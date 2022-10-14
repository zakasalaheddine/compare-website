import CheckIcon from 'assets/check.svg'
import ConsIcon from 'assets/cons.svg'

export default function ProsCons({ item }) {
  const { prosHeadline, pros, consHeadline, cons } = item
  return (
    <div className="flex w-full pb-10">
      <div className="w-1/2 bg-primary pr-80 py-10 pl-10">
        <h4 className="text-bgWhite font-bold text-3xl text-center py-5">
          {prosHeadline}
        </h4>
        <div>
          {pros.map(({ title, description }, idx) => (
            <div key={`pro_${idx}`} className="py-2 flex items-start">
              <div className="py-2 px-[0.35rem] bg-primary-light flex items-center justify-center ml-5 rounded-full">
                <CheckIcon />
              </div>
              <div>
                <h5 className="font-bold text-xl ">{title}</h5>
                <p className="font-light text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 bg-bgWhite pl-80 py-10 pr-10">
        <h4 className="text-secondary font-bold text-3xl text-center py-5">
          {consHeadline}
        </h4>
        <div>
          {cons.map(({ title, description }, idx) => (
            <div key={`con_${idx}`} className="py-2 flex items-start">
              <div
                className="p-2 bg-[#EE6A6A]/20 flex items-center justify-center ml-5 rounded-full"
              >
                <ConsIcon />
              </div>
              <div>
                <h5 className="font-bold text-xl ">{title}</h5>
                <p className="font-light text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
