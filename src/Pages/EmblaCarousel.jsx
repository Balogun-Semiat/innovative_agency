import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

 function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container bg-green-100">
        <div className="embla__slide  bg-red-300">Slide 1</div>
        <div className="embla__slide  bg-blue-300">Slide 2</div>
        <div className="embla__slide  bg-yellow-300">Slide 3</div>
        <div className="embla__slide  bg-yellow-300">Slide 4</div>
        <div className="embla__slide  bg-yellow-300">Slide 5</div>
        <div className="embla__slide  bg-yellow-300">Slide 6</div>
        <div className="embla__slide  bg-yellow-300">Slide 7</div>
      </div>
    </div>
  )
}


export default EmblaCarousel