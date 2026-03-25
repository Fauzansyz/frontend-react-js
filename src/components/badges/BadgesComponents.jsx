export default function BadgesComponents() {
  return (
    <>
    <div className="w-full flex justify-center p-1">
    <div className="p-1">
    <span class="inline-flex items-center justify-center rounded-full bg-teal-300 px-2.5 py-0.5 text-teal-900 dark:bg-teal-400 dark:text-teal-900">
      <p class="text-sm whitespace-nowrap">Website</p>
    </span>
    </div>

    <div className="p-1">
    <span class="inline-flex items-center justify-center rounded-full border border-teal-500 px-2.5 py-0.5 text-teal-700 dark:text-[var(--text-h)]">
      <p class="text-sm whitespace-nowrap">Service</p>

    </span>
    </div>
    </div>
    </>
  )
}
