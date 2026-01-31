
import React from 'react';
import { MdShield, MdBook, MdExplore, MdFolderOpen, MdWarning, MdCheckCircle } from 'react-icons/md';

interface AnalysisResultProps {
    data: {
        classification: string;
        rights: { title: string; description: string }[];
        roadmap: { step: number; title: string; description: string }[];
        checklist: string[];
    };
}

export default function AnalysisResult({ data }: AnalysisResultProps) {
    return (
        <div className="w-full max-w-[800px] animate-fade-in-up">

            {/* 🛡️ Legal Classification */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#dbdfe6] dark:border-[#2d3748] p-6 mb-6 flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <MdShield className="text-3xl" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Legal Classification</p>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111318] dark:text-white">{data.classification}</h2>
                </div>
            </div>

            {/* 📘 Aapke Adhikar (Legal Awareness) */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 px-2">
                    <MdBook className="text-2xl text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-[#111318] dark:text-white">📘 Aapke Adhikar (Legal Awareness)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {data.rights.map((right, index) => (
                        <div key={index} className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-lg p-5">
                            <h4 className="font-bold text-blue-800 dark:text-blue-200 text-lg mb-1">{right.title}</h4>
                            <p className="text-slate-700 dark:text-slate-300">{right.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🧭 Agla Kadam (Step-by-Step Roadmap) */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 px-2">
                    <MdExplore className="text-2xl text-emerald-600 dark:text-emerald-400" />
                    <h3 className="text-xl font-bold text-[#111318] dark:text-white">🧭 Agla Kadam (Step-by-Step Roadmap)</h3>
                </div>
                <div className="space-y-4">
                    {data.roadmap.map((step, index) => (
                        <div key={index} className="flex gap-4 bg-white dark:bg-[#1a202c] p-5 rounded-xl border border-[#dbdfe6] dark:border-[#2d3748] shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                                {step.step}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111318] dark:text-white text-lg">{step.title}</h4>
                                <p className="text-slate-600 dark:text-gray-400 mt-1 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 📂 Evidence Checklist */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 px-2">
                    <MdFolderOpen className="text-2xl text-amber-600 dark:text-amber-400" />
                    <h3 className="text-xl font-bold text-[#111318] dark:text-white">📂 Evidence Checklist</h3>
                </div>
                <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#dbdfe6] dark:border-[#2d3748] p-6">
                    <ul className="space-y-3">
                        {data.checklist.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <MdCheckCircle className="text-slate-300 dark:text-slate-600 text-xl mt-0.5" />
                                <span className="text-slate-700 dark:text-slate-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ⚖️ Disclaimer */}
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 flex gap-3">
                <MdWarning className="text-yellow-600 dark:text-yellow-400 text-2xl flex-shrink-0" />
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Disclaimer:</strong> "Yeh information sirf kanooni jagrukta (awareness) ke liye hai. Ise official legal advice na samjhein. Ek registered advocate se zaroor milein."
                </p>
            </div>

        </div>
    );
}
