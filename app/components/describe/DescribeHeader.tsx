
import Link from 'next/link';

export default function DescribeHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbdfe6] dark:border-[#2d3748] px-6 md:px-20 py-4 bg-white dark:bg-[#1a202c]">
            <div className="flex items-center gap-4 text-primary">
                <div className="size-8">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                    </svg>
                </div>
                <h2 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                    My Lawyer
                </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="hidden md:flex items-center gap-9">
                    <Link
                        className="text-[#111318] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                        href="#"
                    >
                        How it Works
                    </Link>
                    <Link
                        className="text-[#111318] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                        href="#"
                    >
                        About Us
                    </Link>
                </div>
                <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
                    <span>Sign In</span>
                </button>
            </div>
        </header>
    );
}
