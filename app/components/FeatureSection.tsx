
export default function FeatureSection() {
    return (
        <section className="bg-white dark:bg-slate-900/50 py-20 border-y border-[#f0f2f4] dark:border-slate-800">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-[600px] space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight font-display">
                            Why Choose My Lawyer?
                        </h2>
                        <p className="text-[#4e5a71] dark:text-slate-400 text-lg">
                            Empowering Indian citizens with legal knowledge through advanced AI
                            technology.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-primary">
                            Features
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-[#dbdfe6] dark:border-slate-700 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                        <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">translate</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Simple Language</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            We break down complex legal jargon into plain English and Hindi so
                            you can understand your rights clearly.
                        </p>
                    </div>
                    <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-[#dbdfe6] dark:border-slate-700 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                        <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Legal awareness whenever you need it, instantly. No appointments
                            or waiting rooms required.
                        </p>
                    </div>
                    <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-[#dbdfe6] dark:border-slate-700 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                        <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">menu_book</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">IPC &amp; BNS Citations</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            All information is backed by references to the Indian Penal Code
                            and the new Bharatiya Nyaya Sanhita.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
