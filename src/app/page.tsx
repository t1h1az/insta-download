import { InstagramVideoForm } from "@/features/instagram/components/form";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
        <Link style={{cursor: "pointer"}} href="https://www.instagram.com/marketer.studios/">@marketerstudios </Link>Video Downloader
      </h1>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
    </div>
  );
}
