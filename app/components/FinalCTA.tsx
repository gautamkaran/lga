
import Link from "next/link";
import { MdGavel } from "react-icons/md";

export default function FinalCTA() {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-20">
            <div className="bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <MdGavel className="text-[120px]" />
                </div>
                <div className="relative z-10 max-w-[720px] mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black leading-tight font-display">
                        Ready to clear your legal doubts?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl">
                        Join thousands of Indians who are becoming legally aware. Start your
                        consultation now for free.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/describe" className="bg-white text-primary h-14 px-10 rounded-xl text-lg font-black hover:bg-slate-100 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center">
                            Start Free Session
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
