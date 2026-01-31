
import Link from 'next/link';
import { MdGavel } from 'react-icons/md';

export default function DescribeHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbdfe6] dark:border-[#2d3748] px-6 md:px-20 py-4 bg-white dark:bg-[#1a202c]">
            <div className="flex items-center gap-4 text-primary">
                <div className="size-8">
                    <MdGavel className="w-full h-full" />
                </div>
                <Link href="/">
                    <h2 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                        My Lawyer
                    </h2>
                </Link>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="hidden md:flex items-center gap-9">
                    <Link
                        className="text-[#111318] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                        href="/guides"
                    >
                        How it Works
                    </Link>
                    <Link
                        className="text-[#111318] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                        href="/about"
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
