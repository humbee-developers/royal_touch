"use client"
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/preloader/page"
import styles from './page.module.css'
import Home from "@/app/home/page"
export default function Page() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  setTimeout( () => {
    setIsLoading(false);
    document.body.style.cursor = 'default'
    window.scrollTo(0,0);
  }, 2000)
  
  return (
    
    

    
    <main className={styles.main}>
    <AnimatePresence mode='wait'>
    {isLoading && <Preloader />}
  </AnimatePresence>
  <Home/>
    </main>
  )
}