export default function FAQSection({data}){
  return (
    <>
    <div class="space-y-4 px-5">
    <div className="text-center p-10">
    <h2 className="text-3xl font-bold font-(family-name:--inter) text-[var(--text-h)]">Pricing</h2>
    </div>
    {data.map((item, index) => (
      <details class="group border-s-4 border-gray-200 bg-[var(--bg)] p-4 dark:border-gray-700 dark:bg-[var(--bg)] [&amp;_summary::-webkit-details-marker]:hidden" open="">
        <summary class="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
          <h2 class="text-lg font-medium">{item.question}</h2>

          <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>

        <p class="pt-4 text-gray-900 dark:text-white">
          {item.answer}
        </p>
      </details>
    ))}
    </div>
    </>
  )
}
