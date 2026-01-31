
import Link from "next/link";

export default function AboutHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#dbdfe6] dark:border-b-gray-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary">
                <div className="size-6">
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
