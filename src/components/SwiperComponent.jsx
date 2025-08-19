import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

function SwiperComponent({ arrayObjet }) {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const hasSVG = arrayObjet.some((item) => item.svg);
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={!hasSVG ? { clickable: true } : false}
        autoplay={
          hasSVG
            ? {
                delay: 1500,
                disableOnInteraction: false,
              }
            : false
        }
        spaceBetween={30}
        slidesPerView={1}
        loop={hasSVG}
        onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
        className="flex items-center justify-center w-3/4 "
      >
        {arrayObjet.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-full h-full"
          >
            {item.img ? (
              <img
                src={item.img}
                alt={item.description}
                className="h-full w-full"
              />
            ) : (
              <img
                src={item.svg}
                alt={item.description}
                className="flex h-16 w-full"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {hasSVG ? (
        ""
      ) : (
        <section className="flex flex-col justify-center w-3/4 h-65 rounded-xl bg-[#00A9A5] mt-4">
          <span>
            <p>{arrayObjet[swiperIndex].description}</p>
          </span>
        </section>
      )}
    </div>
  );
}

export default SwiperComponent;
