
export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-12">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="text-primary">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#111318] dark:text-white text-lg font-bold">
                            My Lawyer
                        </h2>
                    </div>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <a className="hover:text-primary" href="#">
                            Terms of Service
                        </a>
                        <a className="hover:text-primary" href="#">
                            Privacy Policy
                        </a>
                        <a className="hover:text-primary" href="#">
                            Legal Disclaimer
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © 2024 My Lawyer AI. For educational purposes only.
                    </p>
                    <div className="flex gap-4">
                        <a
                            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-sm">share</span>
                        </a>
                        <a
                            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-sm">mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
