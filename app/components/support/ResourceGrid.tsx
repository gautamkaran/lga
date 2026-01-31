
export default function ResourceGrid() {
    return (
        <>
            <h2 className="text-[#111318] dark:text-white text-[24px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-6">
                Recommended Support Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-10">
                {/* Resource Card 1 */}
                <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2130] p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">gavel</span>
                        </div>
                        <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                            Free Legal Aid (NALSA)
                        </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Get free legal services for marginalized sections through the
                        National Legal Services Authority.
                    </p>
                    <div className="flex gap-2 mt-2">
                        <button className="flex-1 h-10 bg-[#f0f2f4] dark:bg-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                            Find Near Me
                        </button>
                        <button className="flex-1 h-10 bg-primary/10 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors">
                            Call 15100
                        </button>
                    </div>
                </div>
                {/* Resource Card 2 */}
                <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2130] p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">
                                volunteer_activism
                            </span>
                        </div>
                        <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                            Women&apos;s Rights NGOs
                        </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Connect with vetted NGOs providing shelter, counseling, and direct
                        legal intervention for domestic issues.
                    </p>
                    <div className="flex gap-2 mt-2">
                        <button className="flex-1 h-10 bg-[#f0f2f4] dark:bg-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                            View Directory
                        </button>
                        <button className="flex-1 h-10 bg-primary/10 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors">
                            Call 181
                        </button>
                    </div>
                </div>
                {/* Info Card 3 - Awareness */}
                <div className="md:col-span-2 flex flex-col gap-3 rounded-xl bg-primary/5 dark:bg-primary/10 p-6 border border-primary/20">
                    <h3 className="text-[#111318] dark:text-white font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">info</span>
                        Know Your Rights: Zero FIR
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        You have the right to file a &apos;Zero FIR&apos; at{" "}
                        <strong>any police station</strong> regardless of where the incident
                        occurred. The police are legally obligated to record your complaint
                        and transfer it to the relevant station.
                    </p>
                </div>
            </div>
        </>
    );
}
