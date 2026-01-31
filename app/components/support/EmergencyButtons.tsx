

import { MdCall, MdSupportAgent } from "react-icons/md";

export default function EmergencyButtons() {
    return (
        <>
            <div className="py-6">
                <h2 className="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center">
                    Immediate Support &amp; Helplines
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-2 px-4 max-w-2xl mx-auto">
                    Help is available. These services are toll-free and operate 24/7
                    across India.
                </p>
            </div>
            <div className="flex justify-center mb-8">
                <div className="flex flex-1 gap-4 flex-wrap px-4 py-3 max-w-[720px] justify-center">
                    <button className="flex min-w-[240px] max-w-[480px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-16 px-6 bg-red-600 hover:bg-red-700 text-white text-xl font-bold leading-normal tracking-[0.015em] grow shadow-lg transition-all active:scale-95">
                        <MdCall className="text-3xl" />
                        <span className="truncate">Call 100 (Police)</span>
                    </button>
                    <button className="flex min-w-[240px] max-w-[480px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-16 px-6 bg-primary text-white text-xl font-bold leading-normal tracking-[0.015em] grow shadow-lg transition-all active:scale-95">
                        <MdSupportAgent className="text-3xl" />
                        <span className="truncate">1091 (Women Helpline)</span>
                    </button>
                </div>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-800 my-4 mx-4"></div>
        </>
    );
}
