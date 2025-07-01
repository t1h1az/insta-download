import { InstagramVideoForm } from "@/features/instagram/components/form";
import { redirect } from 'next/navigation';
import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";
import styles from './page.module.css';

export default async function HomePage() {
  console.log('hit instagram page');
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  return (
      <section className="flex w-full items-center justify-center flex-col py-8">
        <div className="flex flex-col justify-center column">
          <div className="flex w-full justify-center">
            <h1 className={cn(styles.headline, "text-3xl font-bold text-center")}>
            Instagram Video Downloader
              </h1>
          </div>
        </div>
        <InstagramVideoForm />
      </section >
  );
}
