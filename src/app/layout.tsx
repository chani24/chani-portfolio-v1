'use client'

import SmoothScroll from "./_components/SmoothScroll"
import './globals.css'
import TopNav from './_components/TopNav/TopNav';
import Footer from './_components/Footer/Footer';
import LoadingScreen from "./_components/LoadingScreen/LoadingScreen";

import Head from 'next/head'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {

  return (
    <html lang="en">
      <Head>
        <title>Chidera Ani - Frontend developer</title>
        <meta name='description' content='Chidera Ani is a creative frontend developer skilled in crafting captivating web experiences. With a strong design sensibility and up-to-date tech knowledge, Chidera transforms concepts into user-friendly interfaces. Their expertise results in responsive, accessible websites, backed by collaborative teamwork.'/>
      </Head>
      <body>
        <TopNav />
        <LoadingScreen />
      <SmoothScroll>
          
        {children}
        <Footer/>
        </SmoothScroll>
      </body>
    </html>
  )
}
