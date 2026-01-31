
"use client";

import { useState, useEffect } from "react";
import AnalyzeHeader from "../components/analysis/AnalyzeHeader";
import Breadcrumbs from "../components/analysis/Breadcrumbs";
import PulseVisual from "../components/analysis/PulseVisual";
import ProgressBar from "../components/analysis/ProgressBar";
import AnalyzeFooter from "../components/analysis/AnalyzeFooter";
import AnalysisResult from "../components/analysis/AnalysisResult";
import { MOCK_ANALYSIS_RESULT } from "../components/analysis/MockData";

export default function AnalysisPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [analysisData, setAnalysisData] = useState(MOCK_ANALYSIS_RESULT);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchAnalysis = async () => {
            const description = sessionStorage.getItem("case_description");

            if (!description) {
                // If no description, we can either redirect or just show Mock Data (as demo)
                // For now, let's keep the mock data simulation for "Empty state" testing
                setTimeout(() => setIsLoading(false), 2000);
                return;
            }

            try {
                const res = await fetch("/api/analyze", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ description }),
                });

                if (!res.ok) {
                    const errorData = await res.json();
                    const detailedError = errorData.message || errorData.details || errorData.error || "Failed to analyze";
                    throw new Error(detailedError);
                }

                const data = await res.json();
                setAnalysisData(data);
            } catch (err: any) {
                console.error("Analysis Error:", err);
                setError(err.message || "Something went wrong. Please try again.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnalysis();
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white transition-colors duration-300">
            <div className="relative flex h-screen w-full flex-col overflow-x-hidden">
                <AnalyzeHeader />
                <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
                    {isLoading ? (
                        <div className="max-w-[800px] w-full flex flex-col items-center animate-fade-in">
                            <Breadcrumbs />
                            <PulseVisual />
                            {/* HeadlineText Component */}
                            <h2 className="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight text-center pb-3 pt-5">
                                Understanding your situation...
                            </h2>
                            {/* BodyText Component */}
                            <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal pb-8 pt-1 text-center max-w-[500px]">
                                We are analyzing your case against the Bharatiya Nyaya Sanhita (BNS) protocols. This may take a moment.
                            </p>
                            <ProgressBar />
                            <p className="text-sm text-center text-slate-400 mt-8 animate-pulse">
                                connecting to NyayDost AI...
                            </p>
                        </div>
                    ) : error ? (
                        <div className="max-w-[800px] w-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8 text-center">
                            <h3 className="text-red-800 dark:text-red-200 text-xl font-bold mb-2">Analysis Failed</h3>
                            <p className="text-red-600 dark:text-red-300 mb-6">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
                            >
                                Try Again
                            </button>
                            <p className="mt-4 text-xs text-slate-500">
                                Check if GEMINI_API_KEY is set in .env.local
                            </p>
                        </div>
                    ) : (
                        <AnalysisResult data={analysisData} />
                    )}
                </main>
                <AnalyzeFooter />
            </div>
        </div>
    );
}
