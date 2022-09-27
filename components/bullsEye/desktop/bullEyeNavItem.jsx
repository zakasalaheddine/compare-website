import Image from 'next/future/image'
import { AiFillCaretDown } from 'react-icons/ai'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

const containerClassName = (isActive) =>
  isActive ? 'bg-primary' : 'bg-bgWhite'

const iconContainerClassName = (isActive) =>
  isActive ? 'bg-bgWhite' : 'bg-[#D7FFEF]'

const labelClassName = (isActive) =>
  isActive ? 'text-bgWhite' : 'text-secondary'

export default function BullEyeNavItem({ icon, label, isActive, onChange }) {
  const iconSrc = `${BackendURL}/assets/${icon.id}/${icon.filename_download}`
  return (
    <div
      className={`flex flex-col items-center justify-between w-[140px] cursor-pointer ease-in duration-200 relative ${containerClassName(
        isActive
      )}`}
      onClick={onChange}
    >
      <div
        className={`rounded-full h-10 w-10 flex items-center justify-center mt-2 ease-in duration-200 overflow-hidden ${iconContainerClassName(
          isActive
        )}`}
      >
        <Image
          src={iconSrc}
          alt={label}
          height={64}
          width={64}
          className={`h-6 w-6 ease-in duration-200`}
        />
      </div>
      <h3
        className={`text-[12px] font-semibold py-4 ease-in duration-200 ${labelClassName(
          isActive
        )}`}
      >
        {label}
      </h3>
      {isActive && (
        <AiFillCaretDown className="fill-primary absolute -bottom-5 h-8 w-8" />
      )}
    </div>
  )
}
