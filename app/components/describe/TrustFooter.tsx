
export default function TrustFooter() {
    return (
        <>
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#616f89] dark:text-gray-400">
                        gavel
                    </span>
                    <span className="text-[#616f89] dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                        Indian Law Optimized
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#616f89] dark:text-gray-400">
                        security
                    </span>
                    <span className="text-[#616f89] dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                        Secure Data
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#616f89] dark:text-gray-400">
                        psychology
                    </span>
                    <span className="text-[#616f89] dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                        AI Powered
                    </span>
                </div>
            </div>
            <p className="mt-8 text-[#616f89] dark:text-gray-500 text-[10px] text-center max-w-[600px] leading-normal">
                Disclaimer: My Lawyer is an AI-powered assistant for informational and
                awareness purposes only. It does not provide legal advice, and its
                output should not be treated as a substitute for professional legal
                counsel. Please consult a licensed advocate for specific legal issues.
            </p>
        </>
    );
}
