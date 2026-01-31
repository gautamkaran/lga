
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8 text-left">
                    <div className="space-y-4">
                        <h1 className="text-[#111318] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] font-display">
                            Understand your legal situation.{" "}
                            <span className="text-primary">Know your next steps.</span>
                        </h1>
                        <p className="text-[#4e5a71] dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-[540px]">
                            Get instant insights into Indian laws and procedures using our
                            AI-powered legal assistant. Safe, confidential, and easy to
                            understand.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/describe"
                            className="bg-primary hover:bg-blue-700 text-white h-14 px-8 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                        >
                            Describe Your Legal Issue
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                        <button className="bg-white dark:bg-slate-800 border border-[#dbdfe6] dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-[#111318] dark:text-white h-14 px-8 rounded-xl text-base font-bold transition-all flex items-center justify-center">
                            How This Works
                        </button>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span className="material-symbols-outlined text-green-500">
                            verified_user
                        </span>
                        Safe &amp; Anonymous • No Registration Required
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full aspect-square bg-gradient-to-br from-primary/5 to-primary/20 rounded-[2rem] overflow-hidden border border-primary/10">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div
                                className="w-full h-full bg-cover bg-center rounded-2xl shadow-2xl"
                                data-alt="Close up of Lady Justice scales and modern legal books"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZTHUpHkXfZRI6Bz4w-sOeQx3uECC4F90htSLB_e6SXnn8jBb2QhPpEuTr37Gw7AlS9GyWAjW6NLeB5YNQLZL6_vg79ae5bFbFpaRiX5yrvcLCgrXpRCNzko5OQtKtU3T6Rqasr0krh4P_v1eHMrWjg02nq6PgIAG7S3NdWSt-fRALvVg5igCZD7BDcvtgt--Z6nTeQQWMbiOzKQbjT6_SBBqSnoEHq9fNfa-xhZMk9inKjTt08h0eVNu1dlTKFnMb-k6g5pq1FWjw")',
                                }}
                            ></div>
                        </div>
                    </div>
                    {/* Floating Card Decor */}
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:flex items-center gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <span className="material-symbols-outlined">gavel</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Current Laws</p>
                            <p className="text-sm font-bold">IPC &amp; BNS 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
