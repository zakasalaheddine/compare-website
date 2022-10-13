import Image from 'next/future/image'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function HeadlineImage({ headline, image }) {
  const thumbnailSrc = `${BackendURL}/assets/${image.id}/${image.filename_download}`
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 max-w-4xl mx-3 lg:mx-auto">
      <h3 className="text-center font-black text-3xl mb-10">{headline}</h3>
      <div className="max-w-4xl mx-auto relative">
        <Image
          src={thumbnailSrc}
          layout="responsive"
          alt={headline}
          width={406}
          height={263}
        />
      </div>
    </div>
  )
}
