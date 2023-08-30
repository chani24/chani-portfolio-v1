'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {

    useEffect(() => {
      
      gsap.to('.blink-text', {
        color: ' #1A1A1A',
        delay: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to('.' + styles.container, {
        height: '0',
        delay: 3,
        duration: 1,
        ease: "power2.inOut",
        });

      gsap.to('.' + styles.logo, {
        opacity: '0',
        delay: 3.2,
        duration: 0.8,
        ease: "power2.inOut",
        });
      }, []);

  return (
    <main className={styles.container}>
      <div className='relative h-full flex items-center'>
        <div className={styles.logo}>
          <span className="blink-text">C</span>HI<span className="blink-text">DERA  ANI</span>
          </div>
        
      </div>
       
    </main>
  )
}
