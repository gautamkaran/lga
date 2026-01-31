
export default function CapabilitiesComparison() {
    return (
        <div className="px-4 md:px-40 flex justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex items-center gap-2 px-4 pb-3 pt-5">
                    <span className="material-symbols-outlined text-primary">
                        verified_user
                    </span>
                    <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
                        Capabilities &amp; Boundaries
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {/* Left Column: Capabilities */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl border border-primary/20">
                            <p className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-sm">
                                    check_circle
                                </span>{" "}
                                What we can do
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1 border-b border-solid border-[#dbdfe6] dark:border-gray-800 pb-4">
                                    <p className="text-primary dark:text-blue-400 text-sm font-semibold leading-normal">
                                        Explain legal procedures
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        Breaking down complex IPC/CrPC steps for clarity.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 border-b border-solid border-[#dbdfe6] dark:border-gray-800 pb-4">
                                    <p className="text-primary dark:text-blue-400 text-sm font-semibold leading-normal">
                                        Identify jurisdictional authorities
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        Helping you find the right local police station or district
                                        court.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 border-b border-solid border-[#dbdfe6] dark:border-gray-800 pb-4">
                                    <p className="text-primary dark:text-blue-400 text-sm font-semibold leading-normal">
                                        Simplify legal jargon
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        Translating &quot;Legalese&quot; into plain English or
                                        regional languages.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-primary dark:text-blue-400 text-sm font-semibold leading-normal">
                                        Guide through admin processes
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        Step-by-step assistance for filing RTIs or basic
                                        applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Limitations */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-[#dbdfe6] dark:border-white/10">
                            <p className="text-red-600 dark:text-red-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-sm">error</span>{" "}
                                What we cannot do
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1 border-b border-solid border-[#dbdfe6] dark:border-gray-800 pb-4">
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-semibold leading-normal">
                                        Give specific legal advice
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        We provide information based on statutes, not counsel for
                                        specific outcomes.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 border-b border-solid border-[#dbdfe6] dark:border-gray-800 pb-4">
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-semibold leading-normal">
                                        Replace qualified lawyers
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        AI lacks the human judgment required for active litigation.
                                        Always consult a professional.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 border-b border-solid border-[#dbdfe6] dark:border-gray-800 pb-4">
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-semibold leading-normal">
                                        Represent users in court
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        The assistant cannot act as your authorized legal counsel or
                                        signatory.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-semibold leading-normal">
                                        Handle emergency situations
                                    </p>
                                    <p className="text-[#111318] dark:text-gray-300 text-sm font-normal leading-normal">
                                        In case of immediate danger or arrest, please contact local
                                        emergency authorities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
