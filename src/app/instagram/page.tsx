'use client'; 

import { InstagramVideoForm } from "@/features/instagram/components/form";
import { redirect } from 'next/navigation';
import { createClient } from "@/lib/supabase/server";
import { useState, useEffect} from 'react';

import { cn } from "@/lib/utils";
import styles from './page.module.css';
import './instagram.css';
import { Video } from '@/components/video/video';
import { downloadFile } from "@/lib/utils";
import { getHttpErrorMessage } from "@/lib/http";
import { useVideoInfo } from "@/services/api/queries";

export default function HomePage() {
    const { error, isPending, mutateAsync: getVideoInfo } = useVideoInfo();
    const [downloadURL, setDownloadURL] = useState('');
    
    const httpError = getHttpErrorMessage(error);
    
    const fetchDownloadUrl = async () => {
      try {
        const videoInfo = await getVideoInfo({ postUrl: downloadURL});
  
        const { filename, videoUrl } = videoInfo;
        downloadFile(videoUrl, { filename });
      } catch (error: any) {
        console.log(error);
      }      
    }


  // const supabase = await createClient()
  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/login')
  // }
  return (
      <div className="container--instagram w-full flex flex-col items-center">
        <div
          className={cn(styles.blur, 'headline__container my-4 flex w-full max-w-2xl flex-col items-center rounded-lg px-4 pb-2 pt-2 shadow-md sm:px-8')}
        >
          <h1 className="headline--instagram">Instagram Video Downloader</h1>
        </div>
           <div
        className={cn(styles.blur, 'my-4 flex w-full max-w-2xl flex-col items-center rounded-lg border px-4 pb-8 pt-8 shadow-md sm:px-8')}
      >
        <div className="input__field flex w-full flex-col relative">
          <label htmlFor="link"></label>
          <input
            className="input h-12 w-full sm:pr-28"
            id="link"
            name="link"
            type="text"
            required
            placeholder='' 
            value={downloadURL}
            onChange={(e) => setDownloadURL(e.target.value)}
          />
          <span className="floating-label">Paste your instagram link here</span>
          <span className='success__message'></span>
        </div>
        <button
          onClick={fetchDownloadUrl}
          className="cta--instagram w-400 bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Click To Download
        </button>
      </div> 
      {/* <div
          className={cn(styles.blur, 'my-4 flex w-full max-w-2xl flex-col items-center rounded-lg px-4 pb-2 pt-2 shadow-md sm:px-8')}
        >
          <p className={'text-white'}>Den Link bekommt ihr bei Instagram. <br />
              <span>In der App geht ihr auf Reel teilen und kopiert den Link.</span><br />
              <span>Im Browser klickt ihr einfach den Reel an und kopiert euch dann den Link</span><br />
          </p>
        </div> */}
        <Video />
      </div >
  );
}
