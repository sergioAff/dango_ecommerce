import Image from "next/image";

interface CardInterface {
  image: string;
  price: string;
}

export const Card = ({ image, price }: CardInterface) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col shadow-custom rounded-[20px] p-3 max-w-[154px]">
        <Image
          src={image}
          alt={``}
          width={1000}
          height={1000}
          priority
          className="w-[136px] h-[173px] object-cover "
        />
        <div className="flex flex-col justify-between items-center py-1.5">
          <p>{price}</p>
          <button className="bg-primary rounded-[14px] text-white h-[26px] w-[98px] text-shadow">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
