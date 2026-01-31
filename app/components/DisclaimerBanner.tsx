

import { MdInfo } from "react-icons/md";

export default function DisclaimerBanner() {
    return (
        <div className="w-full bg-primary/10 dark:bg-primary/20 py-3 text-center border-b border-primary/20">
            <p className="text-sm font-medium text-primary dark:text-blue-400 px-4">
                <MdInfo className="inline-block text-lg mr-1 align-middle" />
                For legal awareness only. Not a substitute for a lawyer.
            </p>
        </div>
    );
}                                                                                                                                                                                                                                                                                                                               