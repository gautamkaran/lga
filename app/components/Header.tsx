

import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0f2f4] dark:border-slate-800">
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-primary">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <h2 className="text-[#111318] dark:text-white text-xl font-bold tracking-tight">
                        My Lawyer
                    </h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="#"
                    >
                        Process
                    </a>
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/about"
                    >
                        About
                    </Link>
                    <a
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="#"
                    >
                        FAQ
                    </a>
                    <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all transform active:scale-95">
                        Start Now
                    </button>
                </nav>
            </div>
        </header>
    );
}
