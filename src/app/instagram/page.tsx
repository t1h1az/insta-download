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
            <h1>

            <Image
              src="/images/aey-studios-logo-white.png"
              width={200}
              height={200}
              alt="AEY Studios Logo"
              className="w-40"
              />
              </h1>
          </div>
        </div>


      <h2 className="text-balance m-3 mb-0 text-center text-2xl font-extrabold">
          Instagram Video Downloader
      </h2>
      </section >
      {/* <h2 className="text-balance mb-8 text-center text-4xl">Growth Kit</h2> */}
      < section className="flex flex-col items-center justify-center gap-4 mb-8" >
        <InstagramVideoForm />
      </section >
      <Link className="text-center mb-8" style={{cursor: "pointer"}} href="https://www.aey-studios.com">AEY STUDIOS LLC</Link>
    </div >
  );
}
