

import Link from "next/link";
import { MdGavel } from "react-icons/md";

export default function GuideFooter() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-10">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 opacity-60">
                    <div className="size-5">
                        <MdGavel className="w-full h-full" />
                    </div>
                    <span className="text-sm font-medium">© 2024 My Lawyer India</span>
                </div>
                <div className="flex gap-6">
                    <Link
                        className="text-xs text-slate-500 hover:text-primary transition-colors"
                        href="#"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        className="text-xs text-slate-500 hover:text-primary transition-colors"
                        href="#"
                    >
                        Terms of Use
                    </Link>
                    <Link
                        className="text-xs text-slate-500 hover:text-primary transition-colors"
                        href="#"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </footer>
    );
}
