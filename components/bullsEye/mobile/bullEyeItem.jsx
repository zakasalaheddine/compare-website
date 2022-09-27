import Image from 'next/future/image'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
export default function MobileBullEyeItem({
  icon,
  label,
  isActive,
  title,
  description,
  ctaText,
  onClick,
  ctaTarget = '/'
}) {
  return (
    <div
      className={`w-4/5 mx-auto bg-bgWhite rounded-lg mb-2 ${isActive ? 'p-5' : 'px-5 py-2'}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center bg-[#D7FFEF]`}
        >
          <Image
            src={icon}
            alt={label}
            height={64}
            width={64}
            className={`h-6 w-6`}
          />
        </div>
        <h3
          className={`ml-2 text-xs font-semibold ease-in duration-200 text-secondary flex-1`}
        >
          {label}
        </h3>
        <IoIosArrowDown
          className={`fill-secondary-light ${isActive ? 'rotate-180' : ''}`}
        />
      </div>
      {isActive && (
        <div className="mt-5">
          <h2 className="text-xl text-secondary font-black mb-5">{title}</h2>
          <p className="text-xs text-bg-dark font-semibold mb-5">
            {description}
          </p>
          <Link href={ctaTarget}>
            <a className="text-xs text-bgWhite bg-secondary-light mb-5 py-4 px-10 rounded-md">
              {ctaText}
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}
