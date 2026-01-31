

import { MdBalance } from "react-icons/md";

export default function PulseVisual() {
    return (
        <div className="relative flex items-center justify-center mb-10 h-48 w-48">
            {/* Layered pulse animation */}
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse-soft"></div>
            <div className="absolute inset-4 bg-primary/20 rounded-full animate-pulse opacity-20"></div>
            <div className="relative bg-white dark:bg-[#1a2130] rounded-full p-8 shadow-xl border border-primary/10">
                <MdBalance className="text-primary text-5xl" />
            </div>
        </div>
    );
}
