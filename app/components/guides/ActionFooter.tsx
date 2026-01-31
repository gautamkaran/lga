
export default function ActionFooter() {
    return (
        <div className="flex justify-center pt-4 pb-10">
            <div className="flex gap-4">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">person_search</span>
                    Find an Advocate Near Me
                </button>
                <button className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                    Browse Similar Cases
                </button>
            </div>
        </div>
    );
}
