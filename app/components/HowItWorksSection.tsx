
export default function HowItWorksSection() {
    return (
        <section className="max-w-[1200px] mx-auto px-6 pt-20">
            <div className="text-center max-w-[720px] mx-auto space-y-4">
                <h2 className="text-3xl font-black font-display">How It Works</h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Navigating the legal landscape in India is now as easy as three simple
                    steps.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 relative">
                {/* Connector line for desktop */}
                <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0"></div>
                <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-900 shadow-lg flex items-center justify-center mb-6 text-primary">
                        <span className="text-2xl font-black font-display">1</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Describe</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Share your situation in your own words. Our AI understands natural
                        language.
                    </p>
                </div>
                <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-900 shadow-lg flex items-center justify-center mb-6 text-primary">
                        <span className="text-2xl font-black font-display">2</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Analyze</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        The AI searches through current Indian statutes and legal procedures
                        relevant to you.
                    </p>
                </div>
                <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-900 shadow-lg flex items-center justify-center mb-6 text-primary">
                        <span className="text-2xl font-black font-display">3</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Inform</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Receive a structured overview of your situation and recommended next
                        steps.
                    </p>
                </div>
            </div>
        </section>
    );
}
