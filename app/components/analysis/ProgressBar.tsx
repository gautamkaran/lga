
export default function ProgressBar() {
    return (
        <div className="w-full max-w-[480px] bg-white dark:bg-[#1a2130] p-6 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#374151]">
            <div className="flex flex-col gap-3">
                <div className="flex gap-6 justify-between items-center">
                    <p className="text-[#111318] dark:text-white text-base font-medium leading-normal flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">
                            search
                        </span>
                        Consulting relevant statutes...
                    </p>
                    <p className="text-primary text-sm font-bold leading-normal">65%</p>
                </div>
                <div className="rounded-full bg-[#dbdfe6] dark:bg-gray-700 h-2 w-full overflow-hidden">
                    <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "65%" }}
                    ></div>
                </div>
                <p className="text-[#616f89] dark:text-gray-400 text-xs font-normal leading-normal italic">
                    Status: Currently identifying applicable sections under IPC Section
                    420.
                </p>
            </div>
        </div>
    );
}
