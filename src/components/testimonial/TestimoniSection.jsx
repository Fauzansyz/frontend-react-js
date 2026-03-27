export default function TestimoniSection() {
  return (
    <>
    <div className="mx-auto max-w-3xl grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 items-center justify-center p-5">
    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
      <div className="flex items-center gap-4">
        <img alt="" src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" className="size-16 rounded-full object-cover"/>

        <div>
          <h3 className="text-lg font-medium text-white">Claire Mac</h3>

          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">Website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        <li>
            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti,
              unde ab ut in!
            </p>
        </li>
      </ul>
    </article>
    </div>
    </>
  )
}
