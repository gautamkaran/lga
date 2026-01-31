

import Link from "next/link";
import { MdPsychology, MdArrowForward } from "react-icons/md";

export default function ResponsibleAIPanel() {
    return (
        <div className="px-4 md:px-40 flex justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="p-4 @container">
                    <div className="flex flex-1 flex-col items-start justify-between gap-6 rounded-xl border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-background-dark p-6 @[480px]:flex-row @[480px]:items-center">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <MdPsychology className="text-primary" />
                                <p className="text-[#111318] dark:text-white text-lg font-bold leading-tight">
                                    Responsible AI Implementation
                                </p>
                            </div>
                            <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal max-w-xl">
                                Our model is grounded in the Indian Penal Code (IPC), Code of
                                Criminal Procedure (CrPC), and the latest Bhartiya Nyaya Sanhita
                                (BNSS). We perform rigorous human-in-the-loop verification to
                                minimize hallucinations.
                            </p>
                        </div>
                        <Link
                            className="text-sm font-bold leading-normal tracking-[0.015em] flex items-center gap-2 text-primary whitespace-nowrap group"
                            href="#"
                        >
                            Read our AI Ethics
                            <MdArrowForward className="text-[20px] group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
