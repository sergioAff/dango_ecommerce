"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem, closeCart } from "@/redux/reducer";

export const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItem({ id }));
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed bg-black/30 inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-md p-4 flex flex-col gap-3 items-start text-primary md:w-[60dvw]">
        <h2 className="text-lg  font-bold">Tu Carrito</h2>
        {items.length === 0 ? (
          <p>El carro está vacío</p>
        ) : (
          <ul className=" flex flex-col gap-2 w-full ">
            {items.map((item) => (
              <li key={item.id} className="flex gap-2 justify-between w-full">
                {`Producto ${item.id} - $${item.price} x ${item.quantity}`}
                <button
                  className="text-red-500"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {items.length > 0 && (
          <div className="flex w-full justify-center pt-4">
            <p>
              Total: $
              {Math.ceil(
                items.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) * 100
              ) / 100}
            </p>
          </div>
        )}

        <button
          className="bg-red-500/85 rounded-md p-2 text-white"
          onClick={() => dispatch(closeCart())}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
