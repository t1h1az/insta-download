import { InstagramVideoForm } from "@/features/instagram/components/form";
import backgroundImage from "../../public/images/porsches-and-horses.png";
import Link from "next/link";
import Image from 'next/image'

export default function HomePage() {
  return (
    <div
      className="flex flex-col py-8 flex-dir"
    >
      <section className="flex flex-col py-8">
        <div className="flex flex-col justify-center column">
          <div className="flex w-full justify-center">
            <Image
              src="/marketer-studios-logo.png"
              width={200}
              height={200}
              alt="Picture of the author"
              className="w-40"
            />
          </div>
        </div>


        {/* <h1 className="text-balance m-3 mb-0 text-center text-4xl font-extrabold">
          marketer.studios
      </h1> */}
      </section >
      {/* <h2 className="text-balance mb-8 text-center text-4xl">Growth Kit</h2> */}
      < section className="flex flex-col items-center justify-center gap-4 mb-8" >
        <InstagramVideoForm />
      </section >
      <Link className="text-center mb-8" style={{cursor: "pointer"}} href="https://www.instagram.com/marketer.studios/">@marketer.studios </Link>
    </div >
  );
}
