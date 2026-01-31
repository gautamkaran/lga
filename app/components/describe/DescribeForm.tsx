
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdInfo, MdSecurity, MdArrowForward } from "react-icons/md";

export default function DescribeForm() {
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleGetGuidance = () => {
        if (description.trim()) {
            sessionStorage.setItem("case_description", description);
            router.push("/analysis");
        } else {
            // Optional: Shake effect or alert
            alert("Please describe your situation first.");
        }
    };

    return (
        <div className="w-full max-w-[800px] flex flex-col items-center">
            {/* HeadlineText Component */}
            <div className="mb-8">
                <h1 className="text-[#111318] dark:text-white tracking-tight text-[36px] md:text-[48px] font-bold leading-tight text-center font-display">
                    How can we help you today?
                </h1>
                <p className="text-[#616f89] dark:text-gray-400 text-lg text-center mt-4">
                    Your AI-powered assistant for Indian legal awareness.
                </p>
            </div>
            {/* Input Section */}
            <div className="w-full bg-white dark:bg-[#1a202c] p-6 md:p-10 rounded-xl shadow-sm border border-[#dbdfe6] dark:border-[#2d3748]">
                {/* TextField Component */}
                <div className="flex flex-col gap-4 w-full">
                    <label className="flex flex-col w-full">
                        <p className="text-[#111318] dark:text-gray-200 text-lg font-medium pb-3">
                            Describe your legal concern
                        </p>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbdfe6] dark:border-[#2d3748] bg-white dark:bg-[#101622] min-h-[200px] placeholder:text-[#616f89] p-5 text-lg font-normal leading-relaxed"
                            placeholder="Describe your legal concern in simple words... (e.g., My landlord is not returning my deposit)"
                        ></textarea>
                    </label>
                </div>
                {/* MetaText Component */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 gap-4">
                    <div className="flex flex-col">
                        <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal flex items-center gap-2">
                            <MdInfo className="text-base" />
                            You don’t need to know legal terms.
                        </p>
                        <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal flex items-center gap-2 mt-1">
                            <MdSecurity className="text-base" />
                            Your privacy is respected.
                        </p>
                    </div>
                    {/* SingleButton Component */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleGetGuidance}
                            className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white gap-3 text-lg font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                        >
                            <span className="truncate">Get Guidance</span>
                            <MdArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
