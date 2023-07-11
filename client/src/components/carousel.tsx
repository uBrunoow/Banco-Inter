import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function carrousel() {
  return (
    <div>
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}
