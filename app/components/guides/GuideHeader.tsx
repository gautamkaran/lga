
import Link from "next/link";

export default function GuideHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-8">
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
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
                        My Lawyer
                    </h2>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                        href="#"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                        href="/guides"
                    >
                        Laws
                    </Link>
                    <Link
                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                        href="#"
                    >
                        Directory
                    </Link>
                    <Link
                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                        href="/support"
                    >
                        Resources
                    </Link>
                </nav>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
                <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
                        <div className="text-slate-500 flex items-center justify-center pl-4">
                            <span className="material-symbols-outlined text-[20px]">
                                search
                            </span>
                        </div>
                        <input
                            className="w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 px-4 pl-2 text-sm"
                            placeholder="Search laws or acts..."
                        />
                    </div>
                </label>
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all">
                    <span>New Query</span>
                </button>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700"
                    data-alt="User profile avatar"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBB5aOmP6yyjh9r7Ej1k2aVLUGbkaYPaYvcHacCG01IgKRwryTMY3OLJ_cz0MUQ8nv_j_s49AL7iwRam0o-MOcB4I-sUQVS6sSeopfVjYaHSV4tEqw8jc5iBZ-H3R1KnncQYafvUlWtXNh64RseI_BHZuloCJBnZgkw16Bk0pjTHIV-ipIACMzhNqTiKB-6Br52a91fhqTzMsdbkbd5DOPjJuZFBEK7qHlnsigTkowsUF7zxr9Jf8ZACIWz3-OAbTIv55sVToTWkrDc")',
                    }}
                ></div>
            </div>
        </header>
    );
}
