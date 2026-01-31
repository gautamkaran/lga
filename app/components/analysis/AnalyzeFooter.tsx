
import Link from "next/link";

export default function AnalyzeFooter() {
    return (
        <footer className="py-10 px-10 text-center border-t border-[#e5e7eb] dark:border-[#374151]">
            <p className="text-[#616f89] dark:text-gray-500 text-sm">
                &quot;My Lawyer&quot; provides legal information, not legal advice.
                Always consult a certified professional for specific legal matters.
            </p>
            <div className="flex justify-center gap-6 mt-4">
                <Link
                    className="text-xs text-[#616f89] hover:text-primary transition-colors"
                    href="#"
                >
                    Privacy Policy
                </Link>
                <Link
                    className="text-xs text-[#616f89] hover:text-primary transition-colors"
                    href="#"
                >
                    Terms of Service
                </Link>
                <Link
                    className="text-xs text-[#616f89] hover:text-primary transition-colors"
                    href="#"
                >
                    Contact Support
                </Link>
            </div>
        </footer>
    );
}
