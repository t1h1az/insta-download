import { InstagramVideoForm } from "@/features/instagram/components/form";
import { redirect } from 'next/navigation';
import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";
import styles from './page.module.css';
import './instagram.css';

export default async function HomePage() {
  console.log('hit instagram page');
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  return (
      <div className="container--login w-full flex flex-col items-center">
         <div
        className={cn(styles.blur, 'my-4 flex w-full max-w-2xl flex-col items-center rounded-lg px-4 pb-2 pt-2 shadow-md sm:px-8')}
      >
        <h1 className="headline--login">Instagram Video Downloader</h1>
      </div>
        <div 
          className={cn(styles.blur, 'my-4 flex w-full max-w-2xl flex-col items-center rounded-lg border px-4 pb-16 pt-8 shadow-md sm:px-8')}
        >
          <InstagramVideoForm />
        </div>
      </div >
  );
}
