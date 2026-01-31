
import AboutHeader from "../components/about/AboutHeader";
import AboutHero from "../components/about/AboutHero";
import CapabilitiesComparison from "../components/about/CapabilitiesComparison";
import ResponsibleAIPanel from "../components/about/ResponsibleAIPanel";
import AboutFooter from "../components/about/AboutFooter";

export default function AboutPage() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-[#111318] dark:text-white antialiased min-h-screen flex flex-col">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <AboutHeader />
                    <main className="flex-1 overflow-y-auto">
                        <AboutHero />
                        <CapabilitiesComparison />
                        <ResponsibleAIPanel />
                        <AboutFooter />
                    </main>
                </div>
            </div>
        </div>
    );
}
