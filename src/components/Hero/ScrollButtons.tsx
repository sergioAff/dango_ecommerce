import { useEffect, useState } from "react";

export const arrowRight = (
  <svg
    className="w-4 h-4 group-hover:fill-white fill-primary"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 7H12.17L6.58 1.41L8 0L16 8L8 16L6.59 14.59L12.17 9H0V7Z" />
  </svg>
);

interface ScrollButtonsInterface {
  distance: number;
}

export const ScrollButtons = ({ distance }: ScrollButtonsInterface) => {
  const [paddingLeft, setPaddingLeft] = useState(distance);

  useEffect(() => {
    setPaddingLeft(distance);
  }, [distance]);

  return (
    <div
      className={`absolute bottom-10 lg:bottom-36 left-0 right-0 md:right-auto flex gap-[6px] justify-center z-40 md:px-[3dvw]`}
      style={{ paddingLeft: `calc(${paddingLeft}px * var(--is-xl, 0))` }} // Usa una variable CSS que se activa solo en pantallas xl
    >
      <button className="swiper-button-prev rotate-180 z-10 group border-2 hover:cursor-pointer border-primary hover:bg-primary px-3 py-[7px] rounded-[99px]">
        {arrowRight}
      </button>
      <button className="swiper-button-next z-10 group border-2 hover:cursor-pointer border-primary hover:bg-primary px-3 py-[7px] rounded-[99px]">
        {arrowRight}
      </button>
    </div>
  );
};
