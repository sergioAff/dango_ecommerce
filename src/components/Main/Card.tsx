"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem, openCart } from "@/redux/reducer";

interface CardInterface {
  id: number;
  image: string;
  price: number;
}

export const Card = ({ id, image, price }: CardInterface) => {
  const dispatch = useDispatch();

  const handleBuyNow = () => {
    dispatch(addItem({ id, price, quantity: 1 }));
    dispatch(openCart());
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col shadow-custom rounded-[20px] p-3">
        <Image
          src={image}
          alt={`imagen ${id}`}
          width={1000}
          height={1000}
          priority
          className=" object-cover p-0.5"
        />
        <div className="flex flex-col gap-0.5 md:flex-row justify-between items-center pt-1.5 pb-1 md:pt-3">
          <p>${price}</p>
          <button
            className="bg-primary rounded-[14px] text-white h-[26px] w-[98px] text-shadow"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
