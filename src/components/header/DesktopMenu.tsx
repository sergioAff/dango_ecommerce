"use client";

import { DataLinks } from "@/utils/DataLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-7 items-center ">
      {DataLinks.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className={clsx("text-primary leading-[19.36px]", {
            "underline underline-offset-4 decoration-[5px] decoration-primary font-bold":
              pathname === item.link,
          })}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
