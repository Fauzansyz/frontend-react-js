export default function PricingSection({data}){
  return (
    <>
    <div class="max-w-7xl px-8 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 md:p-15">
    <div className="text-center p-10">
    <h2 className="text-3xl font-bold font-(family-name:--inter) text-[var(--text-h)]">Pricing</h2>
    </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:gap-8">
    {data.map((item, index) => (

<div class="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
          <div class="p-6 sm:px-8">
            <h2 class="text-lg font-medium text-[var(--text-h)]">
      {item.name}
              <span class="sr-only">Plan</span>
            </h2>

            <p class="mt-2 text-pretty text-[var(--text-h)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p class="mt-2 sm:mt-4">
              <strong class="text-3xl font-bold text-[var(--text)] sm:text-4xl"> {item.pricing} </strong>

              <span class="text-sm font-medium text-[var(--text)]">/month</span>
            </p>

            <a class="mt-4 block rounded-sm border border-teal-700 bg-teal-700 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 sm:mt-6" href="#">
              Get Started
            </a>
          </div>

          <div class="p-6 sm:px-8">
            <p class="text-lg font-medium text-[var(--text-h)] sm:text-xl">What's included:</p>

            <ul class="mt-2 space-y-2 sm:mt-4">
      {item.feature.map((feature, index) => (
        
              <li class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-teal-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>

                <span class="text-[var(--text)]">{feature}</span>
              </li>
      ))}

            </ul>
          </div>
        </div>
    ))}
      </div>
    </div>
    </>
  )
}
