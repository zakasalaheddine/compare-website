import Image from 'next/future/image'
import Link from 'next/link'
import Disclaimers from '../disclaimers'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function BullEyeContent({
  name,
  title,
  description,
  thumbnail,
  ctaText,
  ctaTarget = '/'
}) {
  const thumbnailSrc = `${BackendURL}/assets/${thumbnail.id}/${thumbnail.filename_download}`
  return (
    <div className="flex mt-12 md:mx-2 xl:mx-auto xl:w-3/5 items-end">
      <div className="flex flex-col items-start w-3/5">
        <p className="text-sm text-bg-light mb-5">{name}</p>
        <h2 className="text-2xl text-secondary font-black mb-5">{title}</h2>
        <p className="text-sm text-bg-dark font-semibold mb-5">{description}</p>
        <Link href={ctaTarget}>
          <a className="text-sm text-bgWhite bg-secondary-light mb-5 py-4 px-10 rounded-md">
            {ctaText}
          </a>
        </Link>
        <Disclaimers />
      </div>
      <div className="w-2/4">
        <Image
          src={thumbnailSrc}
          layout="responsive"
          alt={title}
          width={1096}
          height={694}
        />
      </div>
    </div>
  )
}
