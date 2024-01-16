// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const carouselImage = [
  { image: "src/assets/Image/carousel-1.png" },
  { image: "src/assets/Image/carousel-1.png" },
  { image: "src/assets/Image/carousel-1.png" },
  { image: "src/assets/Image/carousel-1.png" },
];
const CardCarousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {carouselImage.map((item) => (
          <SwiperSlide key={item}>
            <img src={item.image} alt="" className="w-[300px] h-[400px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardCarousel;
