
import Link from "next/link";

export default function SupportFooter() {
    return (
        <footer className="px-4 py-10 text-center border-t border-gray-100 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-500 text-xs">
                This screen is part of the &quot;My Lawyer&quot; AI safety protocol.
                Your interactions here are encrypted and not stored in your standard
                chat history for your protection.
            </p>
            <div className="mt-4 flex justify-center gap-4">
                <Link className="text-xs text-primary underline" href="#">
                    Privacy Policy
                </Link>
                <Link className="text-xs text-primary underline" href="#">
                    Safety Guide
                </Link>
            </div>
        </footer>
    );
}
