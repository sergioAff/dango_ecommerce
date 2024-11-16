const arrowRight = (
  <svg
    className="w-4 h-4 group-hover:fill-white fill-primary"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 7H12.17L6.58 1.41L8 0L16 8L8 16L6.59 14.59L12.17 9H0V7Z" />
  </svg>
);

export const ScrollButtons = () => {
  return (
    <div className="absolute bottom-0 lg:bottom-24 left-0  right-0 md:right-auto flex gap-[6px] justify-center px-10 pb-10">
      <button className="swiper-button-prev rotate-180 z-10 group border-2 hover:cursor-pointer border-primary hover:bg-primary px-3 py-[7px] rounded-[99px]">
        {arrowRight}
      </button>
      <button className="swiper-button-next z-10 group border-2 hover:cursor-pointer border-primary hover:bg-primary px-3 py-[7px] rounded-[99px]">
        {arrowRight}
      </button>
    </div>
  );
};
