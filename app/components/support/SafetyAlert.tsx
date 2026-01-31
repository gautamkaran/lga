
export default function SafetyAlert() {
    return (
        <div className="p-4 @container">
            <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 p-6 @[480px]:flex-row @[480px]:items-center shadow-sm">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                        <span className="material-symbols-outlined">warning</span>
                        <p className="text-lg font-bold leading-tight">
                            If you are in immediate danger, please contact local authorities.
                        </p>
                    </div>
                    <p className="text-amber-700 dark:text-amber-300/80 text-base font-normal leading-normal">
                        Your safety is our priority. While this AI can provide guidance, it is
                        not a substitute for professional human intervention in emergencies.
                    </p>
                </div>
                <button className="flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold leading-normal transition-colors">
                    <span className="truncate">Emergency Protocols</span>
                </button>
            </div>
        </div>
    );
}
