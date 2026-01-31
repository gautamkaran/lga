
import GuideHeader from "../components/guides/GuideHeader";
import GeneralAwareness from "../components/guides/GeneralAwareness";
import SuggestedSteps from "../components/guides/SuggestedSteps";
import ReadinessChecklist from "../components/guides/ReadinessChecklist";
import EthicalDisclaimer from "../components/guides/EthicalDisclaimer";
import ActionFooter from "../components/guides/ActionFooter";
import GuideFooter from "../components/guides/GuideFooter";

export default function GuidesPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen text-[#111318] dark:text-white transition-colors duration-200">
            <div className="flex flex-col min-h-screen">
                <GuideHeader />
                <main className="flex-1 flex justify-center py-10 px-4 sm:px-10 lg:px-40">
                    <div className="max-w-[960px] w-full flex flex-col gap-6">
                        {/* PageHeading & Chips */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/10 text-primary px-4 border border-primary/20">
                                    <span className="material-symbols-outlined text-sm">
                                        gavel
                                    </span>
                                    <p className="text-sm font-bold uppercase tracking-wider">
                                        Employment Law
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between items-end gap-3">
                                <div className="flex min-w-72 flex-col gap-2">
                                    <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">
                                        Legal Guidance Results
                                    </h1>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                                        Structured information regarding your query on labor rights
                                        and workplace disputes.
                                    </p>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">
                                        print
                                    </span>
                                    Print Advice
                                </button>
                            </div>
                        </div>
                        <GeneralAwareness />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SuggestedSteps />
                            <ReadinessChecklist />
                        </div>
                        <EthicalDisclaimer />
                        <ActionFooter />
                    </div>
                </main>
                <GuideFooter />
            </div>
        </div>
    );
}
