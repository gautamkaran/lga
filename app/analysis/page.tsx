
import AnalyzeHeader from "../components/analysis/AnalyzeHeader";
import Breadcrumbs from "../components/analysis/Breadcrumbs";
import PulseVisual from "../components/analysis/PulseVisual";
import ProgressBar from "../components/analysis/ProgressBar";
import AnalyzeFooter from "../components/analysis/AnalyzeFooter";

export default function AnalysisPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white transition-colors duration-300">
            <div className="relative flex h-screen w-full flex-col overflow-x-hidden">
                <AnalyzeHeader />
                <main className="flex-1 flex flex-col items-center justify-center px-4">
                    <div className="max-w-[800px] w-full flex flex-col items-center">
                        <Breadcrumbs />
                        <PulseVisual />
                        {/* HeadlineText Component */}
                        <h2 className="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight text-center pb-3 pt-5">
                            Understanding your situation...
                        </h2>
                        {/* BodyText Component */}
                        <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal pb-8 pt-1 text-center max-w-[500px]">
                            This may take a few seconds. We are scanning the Indian Penal Code
                            and recent precedents to provide accurate guidance.
                        </p>
                        <ProgressBar />
                        {/* Background Subtle Elements */}
                        <div className="mt-12 grid grid-cols-3 gap-6 opacity-20 select-none pointer-events-none">
                            <div className="h-24 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                            <div className="h-24 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                            <div className="h-24 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                        </div>
                    </div>
                </main>
                <AnalyzeFooter />
            </div>
        </div>
    );
}
