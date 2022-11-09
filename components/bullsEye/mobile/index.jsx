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
          { bullEyeItem_id: { name, icon, description, title, ctaText, ctaTarget } },
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
            ctaTarget={ctaTarget}
            onClick={() => changeActiveItem(idx)}
          />
        )
      )}
    </div>
  )
}
