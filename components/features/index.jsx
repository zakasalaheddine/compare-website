import Image from 'next/future/image'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function Features({ features }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 max-w-4xl mx-3 lg:mx-auto">
      {features.map(({ feature: { id, title, description, icon } }) => (
        <div
          key={`feature__${id}`}
          className="max-w-[185px] min-h-[154px] my-3 flex flex-col items-center justify-between bg-bgWhite p-2"
        >
          <div className="bg-primary-light h-10 w-10 flex items-center justify-center rounded-full">
            <Image
              src={`${BackendURL}/assets/${icon.id}/${icon.filename_download}`}
              alt={title}
              height={60}
              width={60}
              className={`h-6 w-6 ease-in duration-200`}
            />
          </div>

          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-xs flex-1 flex items-center justify-center text-center">
            {description}
          </p>
        </div>
      ))}
    </div>
  )
}
