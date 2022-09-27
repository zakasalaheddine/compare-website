import { useState } from 'react'
import DesktopBullEye from './desktop'
import MobileBullEye from './mobile'

export default function BullEye({ elements }) {
  const { items } = elements
  const [activeIndex, setActiveIndex] = useState(0)
  const changeActiveItem = (index) => {
    setActiveIndex(index)
  }
  return (
    <>
      <DesktopBullEye
        activeIndex={activeIndex}
        changeActiveItem={changeActiveItem}
        items={items}
      />
      <MobileBullEye
        activeIndex={activeIndex}
        changeActiveItem={changeActiveItem}
        items={items}
      />
    </>
  )
}
