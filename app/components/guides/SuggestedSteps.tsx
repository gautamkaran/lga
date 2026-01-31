
import Link from "next/link";

export default function SuggestedSteps() {
    return (
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-slate-900 dark:text-white text-xl font-bold px-6 pt-6 pb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">near_me</span>
                Suggested Next Steps
            </h2>
            <div className="px-6 pb-8">
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                            1
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-slate-800 dark:text-slate-200">
                                Visit Local Labor Office
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                File a statement with the Conciliation Officer at your city&apos;s
                                Labor Commissionerate.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                            2
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-slate-800 dark:text-slate-200">
                                e-Shram Portal Registration
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Register your grievance online via the official{" "}
                                <Link className="text-primary hover:underline" href="#">
                                    e-Shram
                                </Link>{" "}
                                national portal.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                            3
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-slate-800 dark:text-slate-200">
                                Legal Aid Clinic
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Contact the District Legal Services Authority (DLSA) for free
                                legal counseling if required.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
