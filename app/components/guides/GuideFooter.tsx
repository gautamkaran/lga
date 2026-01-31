
import Link from "next/link";

export default function GuideFooter() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-10">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 opacity-60">
                    <div className="size-5">
                        <svg
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
