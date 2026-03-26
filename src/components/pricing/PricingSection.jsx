export default function PricingSection({data}){
  return (
    <>
    <div className="mx-auto max-w-3xl px-8 py-10 sm:px-4 sm:py-12 lg:px-5">
    <div className="text-center p-10">
    <h2 className="text-3xl font-bold text-[var(--text-h)]">Pricing</h2>
    </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
    {data.map((item, index) => (
      <div key={index} className="rounded-2xl border hover:border-teal-600 focus:border-teal-600 focus:ring-teal-700 active:border-teal-600 hover:shadow-lg transition ring-2 hover:ring-teal-700 active:ring-teal-700 duration-300 p-6 sm:order-last sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-[var(--text-h)]">
      {item.name}
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-[var(--text-h)] sm:text-4xl">{item.pricing}</strong>

              <span className="text-sm font-medium text-[var(--text)]">/month</span>
            </p>
          </div>

          <ul class="mt-6 space-y-2">
    {item.feature.map((items, index) => (
            <li key={index} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-teal-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>

              <span className="text-[var(--text)]">{items}</span>
            </li>
     ))
    }
            </ul>

          <a href="#" className="mt-8 block rounded-full border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-teal-700 hover:ring-1 hover:ring-teal-700">
            Get Started
          </a>
        </div>
    ))}
      </div>
    </div>
    </>
  )
}
