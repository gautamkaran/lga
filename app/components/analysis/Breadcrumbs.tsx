
import Link from "next/link";

export default function Breadcrumbs() {
    return (
        <div className="flex flex-wrap gap-2 mb-8 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full">
            <Link
                className="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
            >
                Case Intake
            </Link>
            <span className="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal">
                /
            </span>
            <span className="text-primary text-sm font-medium leading-normal">
                Analyzing Information
            </span>
        </div>
    );
}
