"use client"
// components/ImageSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      style={{ width: '1280px', height: '100%' }}
      
    >
      <SwiperSlide>
        <img src="/images/image1.jpg" alt="Image 1" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image2.jpg" alt="Image 2" style={{ width: '100%', height: '100%', margin:'auto' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image4.jpg" alt="Image 4" style={{ width: '100%', height: '100%'   }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image6.jpg" alt="Image 6" style={{ width: '100%', height: '100%' }} />
      </SwiperSlide> 
    </Swiper>
  );
};

export default ImageSlider;
