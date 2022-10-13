import Image from 'next/future/image'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function DescriptionTagCloud({ item }) {
  const { logo, headline, description, tags, thumbnail } = item
  return (
    <div className="flex flex-col items-center justify-between py-10 ">
      <div className="bg-primary w-full">
        <div className="max-w-4xl mx-3 lg:mx-auto flex flex-col items-center">
          <div className="py-5">
            <Image
              src={`${BackendURL}/assets/${logo.id}/${logo.filename_download}`}
              alt={headline}
              height={70}
              width={245}
            />
          </div>
          <p className="text-bgWhite font-bold py-10">{description}</p>
          <h4 className="text-bgWhite font-bold pb-40 text-xl">{headline}</h4>
        </div>
      </div>
      <div className="max-w-4xl mx-3 lg:mx-auto flex flex-col items-center">
        <div className="relative h-80 w-[500px] -mt-36 flex items-center justify-center">
          <Image
            src={`${BackendURL}/assets/${thumbnail.id}/${thumbnail.filename_download}`}
            alt={headline}
            height={337}
            width={404}
            className="absolute"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {tags.map((tag, idx) => (
            <div key={`tag_${idx}`} className="bg-primary-light mx-3 my-1 p-3 rounded-3xl">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
