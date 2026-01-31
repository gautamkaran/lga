

import { MdWarning } from "react-icons/md";

export default function EthicalDisclaimer() {
    return (
        <div className="mt-4 p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 flex gap-4">
            <MdWarning className="text-amber-600 dark:text-amber-400 shrink-0" />
            <div className="flex flex-col gap-1">
                <p className="text-amber-800 dark:text-amber-300 font-bold text-sm uppercase tracking-wide">
                    Ethical Legal Disclaimer
                </p>
                <p className="text-amber-800 dark:text-amber-400 text-sm leading-relaxed">
                    My Lawyer is an AI-powered educational tool designed for legal
                    awareness only. This content does not constitute legal advice, nor
                    does it create an attorney-client relationship. Laws in India vary by
                    state and specific case circumstances. Always consult with a qualified
                    advocate or the Bar Council of India for representation in legal
                    proceedings.
                </p>
            </div>
        </div>
    );
}
