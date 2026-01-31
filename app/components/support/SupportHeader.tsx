
"use client";

import Link from "next/link";

export default function SupportHeader() {
    return (
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5 border-b border-solid border-b-[#f0f2f4] bg-white dark:bg-[#1a2130]">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <header className="flex items-center justify-between whitespace-nowrap px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className="size-8 text-primary">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                            </svg>
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
                            <span className="material-symbols-outlined">shield_lock</span>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
}
