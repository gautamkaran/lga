
export default function AboutHero() {
    return (
        <div className="px-4 md:px-40 flex justify-center py-10 bg-white dark:bg-background-dark/50">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <h1 className="text-[#111318] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Transparency &amp; Trust
                        </h1>
                        <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal max-w-2xl">
                            &quot;My Lawyer&quot; is an AI-powered legal awareness assistant
                            designed specifically for Indian citizens. We aim to bridge the gap
                            between complex laws and everyday understanding.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
