import BadgesComponents from "../badges/BadgesComponents"

export default function HeroSection() {
  return (
    <>
    <section class="bg-[var(--code-bg)] lg:grid lg:h-screen lg:place-content-center">
      <div class="mx-auto w-screen max-w-7xl px-5 py-15 sm:px-6 sm:py-34 lg:px-8 lg:py-42">
        <div class="mx-auto max-w-prose text-center">
          <h1 class="text-4xl font-normal font-[800] text-[var(--text-h)] sm:text-6xl font-(family-name:--inter)">
            Understand user flow and
            <strong class="text-teal-500"> increase </strong>
            conversions
          </h1>
    <BadgesComponents />

          <p class="mt-4 font-[400] font-(family-name:--sans) text-pretty text-[var(--text-h)] sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
            accusamus impedit minima harum corporis iusto.
          </p>

          <div class="mt-4 flex justify-center gap-4 sm:mt-6">
            <a class="inline-block rounded border border-teal-700 bg-teal-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700" href="#">
              Get Started
            </a>

            <a class="inline-block rounded border border-[var(--color-bg)] px-5 py-3 font-medium text-teal-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )

} 
