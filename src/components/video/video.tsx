import styles from './video.module.css';
import { cn } from '@/lib/utils'; 
export function Video() {
  return (
    <video 
      className={cn(styles.video)} 
      autoPlay 
      muted 
      loop
      width="756" 
      height="240" 
      preload="auto"
      poster="/images/porsches-and-horses.png"
      playsInline
    >
      <source src="/videos/porsche_horses.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}