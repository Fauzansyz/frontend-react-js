export default function TestimoniSection({data}) {
  return (
    <>
    <div className="mx-auto max-w-3xl grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 items-center justify-center p-5 lg:p-4 sm:p-5 md:p-2">
    {data.map((item, index) => (
    <article key={index} className="rounded-xl border border-gray-700 bg-[var(--code-bg)] p-5 w-80 lg:p-5 sm :p-4 md:p-7">

      <ul className="mt-4 space-y-2">
        <li>
            <p className="mt-1 font-(family-name:--jet) text-[19px] font-light text-gray-300 text-start italic">
              {item.testimonial}
            </p>
        </li>
      </ul>

      <div className="flex items-center gap-4 ml-2 mt-5">
        <img alt="" src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" className="size-10 rounded-full object-cover"/>

        <div>
          <h3 className="font-(family-name:--inter) text-lg font-medium text-white">{item.name}</h3>

          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">{item.category}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    ))}
    </div>
    </>
  )
}
