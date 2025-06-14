import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import img1 from "../assets/image-1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

SwiperCore.use([Pagination, Navigation, Autoplay]);

import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const banners = [
    {
      image: img1,
      title: "Into a world where secrets guide your blade, and honor defines your path.",
      subtitle:
        "Sit, quas soluta possimus aliquid nam nemo, eaque cupiditate quibusdam atque ratione eum tempore sed quo hic exercitationem delectus.",
      buttonText: "Explore More",
    },
    {
      image: img2,
      title: "Perspiciatis ullam quibusdam minima totam, repellendus ipsa unde!",
      subtitle:
        "Consectetur adipisicing elit. A at illum dignissimos, quas soluta possimus aliquid nam nemo, eaque cupiditate quibusdam atque ratione eum tempore sed quo hic exercitationem delectus.",
      buttonText: "Explore More",
    },
    {
      image: img3,
      title: "Terspiciatis allow well ullam quibusdam totam, repellendus ipsa unde!",
      subtitle:
        "Horem dignissimos, quas soluta possimus aliquid nam nemo, eaque cupiditate quibusdam atque ratione eum tempore sed quo hic exercitationem delectus.",
      buttonText: "Explore More",
    },
    {
      image: img4,
      title: "Reprehenderit minima totam, repellendus ipsa unde!",
      subtitle:
        "Elit. A at illum dignissimos, quas soluta possimus aliquid nam nemo, eaque cupiditate quibusdam atque ratione eum tempore sed quo hic exercitationem delectus.",
      buttonText: "Explore More",
    },
  ];

  return (
    <div className="w-full mx-auto rounded-xl">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[600px]">
              <img
                src={banner.image}
                alt={`banner-${index}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-4 md:px-20 text-white">
                <h2 className="text-base sm:text-xl md:text-4xl lg:text-5xl font-extrabold mb-4 max-w-full sm:max-w-xl">
                  {banner.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-4 max-w-full sm:max-w-xl">
                  {banner.subtitle}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-sm sm:text-base font-semibold transition">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
