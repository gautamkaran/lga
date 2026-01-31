
import Link from "next/link";

export default function AnalyzeHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#374151] bg-white dark:bg-[#1a2130] px-10 py-3 z-10">
            <div className="flex items-center gap-4 text-[#111318] dark:text-white">
                <div className="size-6 text-primary">
                    <span className="material-symbols-outlined text-3xl">gavel</span>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                    My Lawyer
                </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <Link
                        className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="/guides"
                    >
                        Legal Guides
                    </Link>
                    <Link
                        className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="/support"
                    >
                        Contact Support
                    </Link>
                </div>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
                    data-alt="User profile avatar placeholder"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhqV1n7LqWCpq_BQVtpLmv0eG7JcTcn0_whkFMM2mmO9BDUcM_oaFdwC-p6_qQame_emQBKEGi3bb0lKZRfz3lj8mfxnKIx04GHtMCrfpxCCR1iqvq6LQRAVAsr4W3sjYcf1rAY_x7XCrttJpvKKusfXMMnWLKkW7XG7O0wol9WiBy3NaKbpfxHwn9qmye0ZvTQl0v_tPRbyNhFRK_2GQAXTxh_mJ2wo8ks_V5AhL33ysIHX1V7h1eJStzfDo3jJnrlJPmRyWUdub5")',
                    }}
                ></div>
            </div>
        </header>
    );
}
