import MobileBullEyeItem from './bullEyeItem'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function MobileBullEye({
  activeIndex,
  changeActiveItem,
  items
}) {
  return (
    <div className="block md:hidden">
      {items.map(
        (
          { bullsEyeItem_id: { name, icon, description, title, ctaText } },
          idx
        ) => (
          <MobileBullEyeItem
            key={`mobile_bullEye_${idx}`}
            icon={`${BackendURL}/assets/${icon.id}/${icon.filename_download}`}
            label={name}
            isActive={idx === activeIndex}
            description={description}
            title={title}
            ctaText={ctaText}
            onClick={() => changeActiveItem(idx)}
          />
        )
      )}
    </div>
  )
}
