
import Link from "next/link";
import { MdGavel, MdSearch } from "react-icons/md";

export default function GuideHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-8">
                        <MdGavel className="w-full h-full" />
                    </div>
                    <Link href="/">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
                            My Lawyer
                        </h2>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                        href="/"
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
                            <MdSearch className="text-[20px]" />
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
