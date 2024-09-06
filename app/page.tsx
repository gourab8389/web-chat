import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl px-5 md:px-10 2xl:px-36 mx-auto">
      <Hero/>
    </div>

    // <div className="max-w-xl mx-auto border rounded-lg p-10 mt-32">
    //   <h1 className="text-4xl font-semibold text-center">Login to use chat</h1>

    //   <div className="mt-8"></div>
    // </div>
  );
}
