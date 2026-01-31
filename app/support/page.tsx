
import SupportHeader from "../components/support/SupportHeader";
import SafetyAlert from "../components/support/SafetyAlert";
import EmergencyButtons from "../components/support/EmergencyButtons";
import ResourceGrid from "../components/support/ResourceGrid";
import SupportFooter from "../components/support/SupportFooter";

export default function SupportPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-gray-100 min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <SupportHeader />
                    {/* Main Content */}
                    <div className="px-4 md:px-40 flex flex-1 justify-center py-8">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <SafetyAlert />
                            <EmergencyButtons />
                            <ResourceGrid />
                            <SupportFooter />
                        </div>
                    </div>
                </div>
            </div>
            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-1 bg-red-500 z-50"></div>
        </div>
    );
}
