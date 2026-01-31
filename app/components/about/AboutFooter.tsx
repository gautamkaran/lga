
import Link from "next/link";

export default function AboutFooter() {
    return (
        <footer className="px-4 md:px-40 flex justify-center py-10 border-t border-solid border-t-[#dbdfe6] dark:border-t-gray-800 mt-10">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <p className="text-[#111318] dark:text-white font-bold text-sm">
                            My Lawyer v2.1.0
                        </p>
                        <p className="text-[#616f89] dark:text-gray-500 text-xs">
                            Empowering 1.4 Billion Indian Citizens with Legal Awareness.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link
                            className="text-[#616f89] dark:text-gray-400 text-xs font-medium hover:text-primary underline decoration-primary/30"
                            href="#"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            className="text-[#616f89] dark:text-gray-400 text-xs font-medium hover:text-primary underline decoration-primary/30"
                            href="#"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            className="text-[#616f89] dark:text-gray-400 text-xs font-medium hover:text-primary underline decoration-primary/30"
                            href="#"
                        >
                            Data Retention
                        </Link>
                        <Link
                            className="text-[#616f89] dark:text-gray-400 text-xs font-medium hover:text-primary underline decoration-primary/30"
                            href="#"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
                    <p className="text-[#616f89] dark:text-gray-500 text-[10px] uppercase tracking-widest">
                        Disclaimer: This assistant is for informational purposes only and
                        does not constitute legal advice.
                    </p>
                </div>
            </div>
        </footer>
    );
}
