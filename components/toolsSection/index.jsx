import Link from 'next/link'

export default function ToolsSection({ headline, tools = [] }) {
  return (
    <div className="py-14 bg-white-text">
      <h3 className="text-center font-black text-3xl mb-10">{headline}</h3>
      <div className="flex flex-col sm:flex-row xs:justify-center md:justify-start xl:w-3/5 mx-auto xs:flex-wrap md:flex-nowrap">
        {tools.map(({ title, description, ctaText, ctaTarget }, idx) => (
          <div
            key={`tool__${idx}`}
            className="bg-bgWhite py-2 my-2 mx-2 md:my-0 flex flex-col  justify-between sm:w-5/12 md:w-3/12"
          >
            <h5 className="text-lg font-bold border-l-2 border-l-primary pl-5 ml-2 w-40">
              {title}
            </h5>
            <p className="text-xs px-5 py-2">{description}</p>
            <Link href={ctaTarget}>
              <a className="text-center text-secondary-light block">
                {ctaText}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
