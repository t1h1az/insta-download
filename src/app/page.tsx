import { InstagramVideoForm } from "@/features/instagram/components/form";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-0 text-center text-4xl font-extrabold">
        Marketer Studios
      </h1>
      <Link className="text-center mb-8" style={{cursor: "pointer"}} href="https://www.instagram.com/marketer.studios/">@marketerstudios </Link>
      <h2 className="text-balance mb-8 text-center text-4xl">Growth Kit</h2>
      <section className="flex flex-col items-center justify-center gap-4 mb-8">
        <InstagramVideoForm />
      </section>
      <p className="text-center mb-8" >Mehr Tools folgen in Kürze. Falls ihr Fragen habt, schreibt uns bei Instagram.</p>
    </div>
  );
}
