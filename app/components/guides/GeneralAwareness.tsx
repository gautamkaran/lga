
export default function GeneralAwareness() {
    return (
        <div className="rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-slate-100 dark:bg-slate-800 flex items-center justify-center min-h-[160px]">
                    <div
                        className="w-full h-full bg-center bg-no-repeat bg-cover opacity-90"
                        data-alt="Abstract legal scales illustration"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtI5vHPjOUlz9pLQrhFCzo134ZG_ZJdz-_nf3A09ey11j6obKyPKyyoHRP7wwDYAmN8x4jpnAhXsc7OHZ1Mo_oGkMZ-NXjhKRqV1aSMIEA00mqUZEkBb2Za-bWRz8C8pF6ymZa_Hb9QdqxJ0Tp_5HzmlR5nH8Aqj2RpHH9YcG3sT6LhMt4xvbrvNguP7o5NBU1pFBfJJZVcWiHM-f2hE7_ozX01y6X4ygXWCKFW1y6oboOzxbnnzA7JMsHX3bLfqSr-WBUTW6wtout")',
                        }}
                    ></div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center gap-3">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-[20px]">info</span>
                        <h3 className="text-lg font-bold">General Awareness</h3>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                        Under the Industrial Disputes Act (1947), you are protected against
                        unfair dismissal and entitled to statutory notice periods or pay.
                        Indian law mandates that employers follow due process, including a
                        formal inquiry, before termination for misconduct. Understanding
                        these rights is the first step toward achieving a fair resolution.
                    </p>
                </div>
            </div>
        </div>
    );
}
