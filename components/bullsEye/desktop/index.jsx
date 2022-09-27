import { useEffect, useState } from 'react'
import BullEyeContent from './bullEyeContent'
import BullEyeNav from './bullEyeNav'

export default function DesktopBullEye({
  activeIndex,
  changeActiveItem,
  items
}) {
  const [activeItem, setActiveItem] = useState(
    items[activeIndex].bullsEyeItem_id
  )

  useEffect(() => {
    setActiveItem(items[activeIndex].bullsEyeItem_id)
  }, [activeIndex, items])

  return (
    <div className="hidden md:block">
      <BullEyeNav
        items={items}
        selectedIndex={activeIndex}
        onChange={changeActiveItem}
      />
      {activeItem && (
        <BullEyeContent
          name={activeItem.name}
          description={activeItem.description}
          title={activeItem.title}
          ctaText={activeItem.ctaText}
          thumbnail={activeItem.thumbnail}
        />
      )}
    </div>
  )
}
