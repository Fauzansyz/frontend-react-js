import BadgesComponents from "../badges/BadgesComponents"

export default function HeroSection() {
  return (
    <>
    <section class="bg-[var(--color-bg)] lg:grid lg:h-screen lg:place-content-center">
      <div class="mx-auto w-screen max-w-7xl px-5 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-prose text-center">
          <h1 class="text-4xl font-bold text-[var(--text-h)] sm:text-6xl">
            Understand user flow and
            <strong class="text-teal-600"> increase </strong>
            conversions
          </h1>
    <BadgesComponents />

          <p class="mt-4 text-base text-pretty text-[var(--text-h)] sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
            accusamus impedit minima harum corporis iusto.
          </p>

          <div class="mt-4 flex justify-center gap-4 sm:mt-6">
            <a class="inline-block rounded border border-teal-700 bg-teal-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700" href="#">
              Get Started
            </a>

            <a class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )

} 
