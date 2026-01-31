
"use client";

import Link from "next/link";
import { MdGavel, MdSecurity } from "react-icons/md";


export default function SupportHeader() {
    return (
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5 border-b border-solid border-b-[#f0f2f4] bg-white dark:bg-[#1a2130]">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <header className="flex items-center justify-between whitespace-nowrap px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className="size-8 text-primary">
                            <MdGavel className="w-full h-full" />
                        </div>
                        <Link href="/">
                            <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                My Lawyer
                            </h2>
                        </Link>
                    </div>
                    <div className="flex gap-3">
                        <button
                            className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                            onClick={() => (window.location.href = "https://google.com")}
                        >
                            <span className="truncate">Quick Exit (Esc)</span>
                        </button>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f4] dark:bg-gray-700 text-[#111318] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <MdSecurity />
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
}
