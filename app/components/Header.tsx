

import Link from "next/link";
import { MdGavel } from "react-icons/md";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0f2f4] dark:border-slate-800">
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-primary">
                        <MdGavel className="w-8 h-8" />
                    </div>
                    <Link href="/">
                        <h2 className="text-[#111318] dark:text-white text-xl font-bold tracking-tight">
                            My Lawyer
                        </h2>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/guides"
                    >
                        Process
                    </Link>
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/support"
                    >
                        Support
                    </Link>
                    <Link
                        href="/describe"
                        className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all transform active:scale-95"
                    >
                        Start Now
                    </Link>
                </nav>
            </div>
        </header>
    );
}
