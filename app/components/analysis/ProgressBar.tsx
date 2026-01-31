"use client";

import { useState, useEffect } from "react";

const STAGES = [
    { progress: 15, text: "Analyzing your query...", icon: "search" },
    { progress: 35, text: "Consulting relevant statutes...", icon: "gavel" },
    { progress: 55, text: "Identifying applicable sections...", icon: "menu_book" },
    { progress: 75, text: "Preparing legal guidance...", icon: "lightbulb" },
    { progress: 95, text: "Finalizing recommendations...", icon: "check_circle" },
];

export default function ProgressBar() {
    const [currentStage, setCurrentStage] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Smoothly animate progress within each stage
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const targetProgress = STAGES[currentStage].progress;
                if (prev < targetProgress) {
                    return Math.min(prev + 1, targetProgress);
                }
                return prev;
            });
        }, 50);

        // Move to next stage after reaching current target
        const stageTimeout = setTimeout(() => {
            if (currentStage < STAGES.length - 1) {
                setCurrentStage((prev) => prev + 1);
            }
        }, 2000);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(stageTimeout);
        };
    }, [currentStage]);

    const stage = STAGES[currentStage];

    return (
        <div className="w-full max-w-[480px] bg-white dark:bg-[#1a2130] p-6 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#374151]">
            <div className="flex flex-col gap-3">
                <div className="flex gap-6 justify-between items-center">
                    <p className="text-[#111318] dark:text-white text-base font-medium leading-normal flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm animate-pulse">
                            {stage.icon}
                        </span>
                        {stage.text}
                    </p>
                    <p className="text-primary text-sm font-bold leading-normal">{progress}%</p>
                </div>
                <div className="rounded-full bg-[#dbdfe6] dark:bg-gray-700 h-2 w-full overflow-hidden">
                    <div
                        className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-[#616f89] dark:text-gray-400 text-xs font-normal leading-normal italic">
                    Status: Processing your legal query through NyayDost AI...
                </p>
            </div>
        </div>
    );
}
