import BullEyeNavItem from './bullEyeNavItem'

export default function BullEyeNav({ items, onChange, selectedIndex }) {
  return (
    <div className="flex items-center justify-center rounded-sm">
      {items.map(({ bullEyeItem_id: { name, icon } }, idx) => (
        <BullEyeNavItem
          icon={icon}
          label={name}
          isActive={idx === selectedIndex}
          key={`bullEyeItem__${idx}`}
          onChange={() => onChange(idx)}
        />
      ))}
    </div>
  )
}
