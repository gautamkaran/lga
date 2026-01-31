

import { MdFactCheck } from "react-icons/md";

export default function ReadinessChecklist() {
    return (
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-slate-900 dark:text-white text-xl font-bold px-6 pt-6 pb-4 flex items-center gap-2">
                <MdFactCheck className="text-primary" />
                Readiness Checklist
            </h2>
            <div className="px-6 pb-8 space-y-3">
                <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                    <input
                        className="mt-1 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                        type="checkbox"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            Collect last 3 months&apos; salary slips
                        </span>
                        <span className="text-xs text-slate-500">
                            Evidence of employment and last drawn pay.
                        </span>
                    </div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                    <input
                        className="mt-1 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                        type="checkbox"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            Secure Employment Contract
                        </span>
                        <span className="text-xs text-slate-500">
                            Locate your signed offer letter or appointment order.
                        </span>
                    </div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                    <input
                        className="mt-1 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                        type="checkbox"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            Timeline of Occurrences
                        </span>
                        <span className="text-xs text-slate-500">
                            Note down dates, times, and key witnesses for the incident.
                        </span>
                    </div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                    <input
                        className="mt-1 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                        type="checkbox"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            Communications Log
                        </span>
                        <span className="text-xs text-slate-500">
                            Back up all emails or WhatsApp chats related to the dispute.
                        </span>
                    </div>
                </label>
            </div>
        </div>
    );
}
