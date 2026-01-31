
import Link from "next/link";
import { MdGavel, MdShare, MdMail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-12">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="text-primary">
                            <MdGavel className="w-6 h-6" />
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
                            <MdShare className="text-sm" />
                        </a>
                        <a
                            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                            href="#"
                        >
                            <MdMail className="text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
