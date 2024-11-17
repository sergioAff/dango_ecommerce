import { arrowRight } from "@/components/Hero/ScrollButtons";

export const ScrollButtonsMain = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex gap-[6px] justify-center px-10">
      <button className="swiper-button-prev-main rotate-180 z-10 group border-2 hover:cursor-pointer border-primary hover:bg-primary px-3 py-[7px] rounded-[99px]">
        {arrowRight}
      </button>
      <button className="swiper-button-next-main z-10 group border-2 hover:cursor-pointer border-primary hover:bg-primary px-3 py-[7px] rounded-[99px]">
        {arrowRight}
      </button>
    </div>
  );
};
