import Hero from "@/components/hero";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if(session){
    redirect("/chat")
  }
  return (
    <div className="max-w-2xl px-5 md:px-10 2xl:px-36 mx-auto">
      <Hero/>
    </div>
  );
}
