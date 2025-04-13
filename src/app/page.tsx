import { InstagramVideoForm } from "@/features/instagram/components/form";
import Link from "next/link";
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <section className="flex flex-col py-8">
      <div           className="flex justify-center"
      >

      <Image
          src="/marketer-studios-logo.png"
          width={200}
          height={200}
          alt="Picture of the author"
          />
          </div>
      <h1 className="text-balance m-3 mb-0 text-center text-4xl font-extrabold">
          MARKETER STUDIOS
      </h1>
      </section>
      <Link className="text-center mb-8" style={{cursor: "pointer"}} href="https://www.instagram.com/marketer.studios/">@marketerstudios </Link>
      <h2 className="text-balance mb-8 text-center text-4xl">Growth Kit</h2>
      <section className="flex flex-col items-center justify-center gap-4 mb-8">
        <InstagramVideoForm />
      </section>
    
      <p className="text-center mb-8" >Mehr Tools folgen in Kürze. Falls ihr Fragen habt, schreibt uns bei Instagram.</p>
    </div>
  );
}
