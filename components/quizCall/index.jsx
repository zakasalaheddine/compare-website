import Image from 'next/future/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function QuizCallSection({
  ctaText,
  ctaTarget,
  description,
  headline,
  image
}) {
  const thumbnailSrc = `${BackendURL}/assets/${image.id}/${image.filename_download}`
  return (
    <div className="bg-white-text pt-14">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mx-2 xl:mx-auto xl:w-3/5 bg-primary p-5 md:p-10 rounded-md shadow-md">
        <div className="md:w-8/12 text-bgWhite flex flex-col justify-between items-start gap-6">
          <h3 className="font-black  text-4xl">{headline}</h3>
          <div className="font-normal text-sm mb-10">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
          <Link href={ctaTarget}>
            <a className="text-sm text-bgWhite bg-secondary-light mb-5 py-4 px-10 rounded-md">
              {ctaText}
            </a>
          </Link>
        </div>
        <div className="hidden md:block md:w-3/12">
          <Image
            src={thumbnailSrc}
            layout="responsive"
            alt={headline}
            width={1096}
            height={694}
          />
        </div>
      </div>
    </div>
  )
}
