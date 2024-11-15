import { SpanBar } from "@/components/header/SpanBar";
import { MobileMenu } from "@/components/header/MobileMenu";
import { DesktopMenu } from "@/components/header/DesktopMenu";
import { Shopping } from "@/components/header/Shopping";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <SpanBar />
      {/* MobileView */}
      <div className="md:hidden flex justify-between items-center min-h-[50px] w-full px-[9px]">
        <MobileMenu />
        <Shopping />
      </div>
      {/* DesktopView */}
      <div className="hidden md:flex justify-between w-full pt-9 px-[74px]">
        <div></div>
        <DesktopMenu />
        <Shopping />
      </div>
    </header>
  );
};
