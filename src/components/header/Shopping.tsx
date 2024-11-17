"use client";

import { useDispatch } from "react-redux";
import { openCart } from "@/redux/reducer";

export const Shopping = () => {
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(openCart());
  };

  return (
    <div>
      <button
        onClick={handleOpenCart}
        className="bg-[url('/Header/shopping.png')] bg-cover bg-center rounded-md w-10 h-10"
      ></button>
    </div>
  );
};
