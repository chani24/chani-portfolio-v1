import Link from 'next/link'
import styles from './main.module.css'

export default function Home() {
  return (
    <main className="">
      <div className={styles.hero_wrapper}>
        <h1 className="text-extra-large">
          Chidera Ani 
        </h1>
      </div>
      <div className="h-full grid grid-cols-12">
  <div className="col-span-7 text-medium mb-[72px]">I'm all about building modern frontend and fullstack web applications to meet performance, visual, accessibility and security standards. I'm based in Lagos, collaborating with clients from around the world to bring high-quality and timely web projects to fruition.</div>
     </div>
      <div><div className="flex justify-between items-end py-3 border-b border-black"><h2 className="text-large">Featured projects</h2> <Link href="/projects" className="text-small">View all</Link></div></div>
      <div><div className="flex justify-between items-end py-3 border-b border-black"><h2 className="text-large">Project categories</h2> <Link href="/categories" className="text-small">View all</Link></div></div>
    <div className="h-full grid grid-cols-12  mt-[72px]">
  <div className="col-span-5 text-small">Why you should hire me</div>
  <div className="col-span-7 text-medium">Hiring me brings aboard a dedicated frontend developer with a commitment to delivering top-tier projects. My passion for both excellence and timeliness fuels my work, ensuring that every project I handle is executed with precision and delivered at a high quality. With a keen eye for detail and creative awareness, I consistently turn concepts into captivating, functional interfaces. </div>
    </div></main>
  )
}
