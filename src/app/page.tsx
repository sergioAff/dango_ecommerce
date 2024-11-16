import { Hero } from "@/components/Hero/Hero";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="py-14">
        <h2 className="text-center font-bold text-3xl leading-10 text-primary/60">
          Featured Collection
        </h2>
        <div></div>
      </div>
    </main>
  );
}
