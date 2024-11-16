"use client";
import { Hero } from "@/components/Hero/Hero";
import { Card } from "@/components/Main/Card";
import { CardsData } from "@/utils/CarsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ScrollButtons } from "@/components/Hero/ScrollButtons";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="py-14 relative">
        <h2 className="text-center font-bold text-3xl leading-10 text-primary/60">
          Featured Collection
        </h2>
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {CardsData().map((data, index) => (
            <SwiperSlide
              className="pt-11 grid grid-cols-2 gap-x-6 gap-y-8"
              key={index}
            >
              {data.map((card) => (
                <Card key={card.id} image={card.image} price={card.price} />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
        <ScrollButtons />
      </div>
    </main>
  );
}
