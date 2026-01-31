
import DescribeHeader from "../components/describe/DescribeHeader";
import DescribeForm from "../components/describe/DescribeForm";
import TrustFooter from "../components/describe/TrustFooter";

export default function DescribePage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-[#111318] dark:text-white transition-colors duration-300">
            <div className="layout-container flex h-full grow flex-col">
                <DescribeHeader />
                <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
                    <DescribeForm />
                    <TrustFooter />
                </main>
                {/* Bottom Spacer */}
                <div className="h-10"></div>
            </div>
        </div>
    );
}
