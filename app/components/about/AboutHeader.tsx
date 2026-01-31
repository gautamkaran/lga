
import Link from "next/link";
import { MdGavel } from "react-icons/md";


export default function AboutHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#dbdfe6] dark:border-b-gray-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary">
                <div className="size-6">
                    <MdGavel className="w-full h-full" />
                </div>
                <Link href="/">
                    <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                        My Lawyer
                    </h2>
                </Link>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <Link
                        className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="#"
                    >
                        Chat
                    </Link>
                    <Link
                        className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="#"
                    >
                        Library
                    </Link>
                    <Link
                        className="text-primary text-sm font-bold leading-normal"
                        href="/about"
                    >
                        About
                    </Link>
                </div>
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90">
                    <span className="truncate">Get Started</span>
                </button>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200"
                    data-alt="User profile avatar placeholder"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgsWP4uxowdIe9ud_p9Lpt7NvqOMYVxVCNfS5UAtSzCgNx4A4jUw7AMBKUw8-9T5yjb3nfEdejF1JvbHMJSf4NclNPSOb9EaZG-tmId7tCzNPK4rLO1qI3sUZPumLMgL4zSMyhB2873lWHgAkh7-73uL3kx_UOrFjcEpl4P815Hw6S2vxgIv8uIVXOtQ6SHEV2nFgblpUwlTGIRbMVcRmzx44FUonimHLzZdTB_WmPGPaWW1eRE_QcjURt15leTXfDU0g9rZSvUQT-")',
                    }}
                ></div>
            </div>
        </header>
    );
}
