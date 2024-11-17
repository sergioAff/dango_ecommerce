import { HeroInfo } from "@/utils/HeroInfo";
import { ScrollButtons } from "@/components/Hero/ScrollButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Image from "next/image";

const arrowRightButton = (
  <svg
    width="8"
    height="15"
    viewBox="0 0 8 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 1.3281L1.22022 0L8 7.42836L1.21337 14.8567L0 13.5286L5.57326 7.42836L0 1.3281Z" />
  </svg>
);

export const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      className={`mt-1.5`}
      modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {HeroInfo.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${item.bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="pt-[23px] pb-[105px] md:py-[60px] flex flex-col md:flex-row-reverse md:justify-evenly items-center md:px-[3dvw]">
            <Image
              src={item.image}
              alt="Modelo"
              title="Modelo"
              priority
              width={2000}
              height={2000}
              className="rounded-xl w-[280px] h-[320px] lg:min-w-[486px] lg:min-h-[524px] object-cover"
            />
            <div className="flex flex-col pt-[33px] md:pt-0 gap-10 md:pb-14 lg:pb-32">
              <div className="px-12 md:px-0 md:flex flex-col gap-5">
                <h1 className="text-primary text-[37px] md:text-[60px] text-center md:text-start leading-10 md:leading-[61px] md:pr-[25%] xl:pr-[50%]">
                  {item.title}
                </h1>
                <h2 className="hidden md:inline-block text-[16px] text-primary md:pr-[15%] lg:pr-[30%]">
                  {item.subtitle}
                </h2>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-4">
                <button className="rounded-[10px] w-[170px] md:w-[206px] h-[57px] items-center flex justify-between md:justify-evenly bg-primary text-white tracking-wide leading-4 text-sm px-6 md:font-semibold">
                  SHOP NOW
                  <span className="fill-white">{arrowRightButton}</span>
                </button>
                <button className="rounded-[10px] w-[170px] md:w-[206px] h-[57px] items-center flex justify-evenly md:border border-primary md:text-primary tracking-wide leading-4 text-sm md:text-[12px]">
                  TAKE THE QUIZ
                  <span className="hidden md:inline-block fill-primary">
                    {arrowRightButton}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <ScrollButtons />
    </Swiper>
  );
};
