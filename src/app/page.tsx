"use client";
import { Hero } from "@/components/Hero/Hero";
import { Card } from "@/components/Main/Card";
import { CardsData } from "@/utils/CarsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ScrollButtonsMain } from "@/components/Main/ScrollButtonsMain";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div className="py-14 ">
        <h2 className="text-center font-bold text-3xl leading-10 text-primary/60">
          Featured Collection
        </h2>
        <div className="relative pb-12 md:pb-16">
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-main",
              prevEl: ".swiper-button-prev-main",
            }}
            className=""
          >
            {CardsData().map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-colol items-center justify-center md:px-2 ">
                  <div className="pt-11 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-7 md:gap-x-5 md:gap-y-11 pb-10 max-w-sm md:max-w-[951px]">
                    {data.map((card) => (
                      <Card
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        price={card.price}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <ScrollButtonsMain />
        </div>
      </div>
    </main>
  );
}
