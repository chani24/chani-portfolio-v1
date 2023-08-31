'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './main.module.css'

const featuredProjects = [
  {
    title: 'KNF Couture',
    link: '',
  },
  {
    title: 'Neuf Worldwide',
    link: '',
  },
  {
    title: 'Threshold Schools',
    link: '',
  },
  {
    title: 'Breeze Africa Web',
    link: '',
  },
  {
    title: 'De-Fi',
    link: '',
  },
  {
    title: 'Breeze Africa Dashboard',
    link: '',
  }
]


export default function Home() {
  return (
    <main>
      <div id="about"
      className={'relative ' + styles.hero_wrapper}
    >
        <h1 className="text-extra-large">
          <span>F</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>e</span>
          <span>n</span>
          <span>d</span>{' '}
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
            
        </h1>
    </div>
    <div
        className="h-full grid grid-cols-12 relative"
    >
  <div className="col-span-7 text-medium mb-[72px]">I'm all about building modern frontend and fullstack web applications to meet performance, visual, accessibility and security standards. I'm based in Lagos, collaborating with clients from around the world to bring high-quality and timely web projects to fruition.</div>
     </div>
      <div id="projects">
        <div className={styles.section_title}><h2 className="text-large">Featured projects</h2> <Link href="/projects" className="text-small">View all</Link></div>
        <div className="h-full grid grid-cols-12 gap-x-[70px] gap-y-[40px] mt-[72px]">
          {featuredProjects.map((details, index) => {
            return (
              <div className="col-span-6 w-full" key={index}>
                 <video className={styles.projects_video} autoPlay loop muted>
                 <source src="/videos/defi.mp4" />
                </video>
                <div>
                 <a className={"flex items-end "+ styles.projects_link} href={details.link}> <span>{details.title}</span> <span><Image alt="right arrow" height={16}  width={16} src="/images/right-arrow.svg"/></span></a>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
       <div className="h-full grid grid-cols-12  mt-[72px]">
  <div className="col-span-5 text-small">Technologies I work with</div>
        <div className="col-span-7 text-medium">
        I utilize React, Next.js, Webflow, and Shopify to craft user interfaces that are both interactive and responsive. My skill set extends to writing APIs using technologies such as Node.js, Nest.js, and GraphQL. I also have experience with a range of tools including AWS, Netlify, Vercel, as well as project management platforms like Jira and Trello. My proficiency also extends to version control platforms like Github and Gitlab, and I'm adept at using Jest for testing purposes.
  </div>
      </div>
      <div>
        <div className={styles.section_title}><h2 className="text-large">Project categories</h2> <Link href="/categories" className="text-small">View all</Link></div>
        <div className={styles.text_scroll_wrapper}>
  <div className={'text-medium '+ styles.text_scroll}>
    <div className="flex">
     <div className="flex"><div>E-commerce</div><div>Fintech</div><div>Fashion</div><div>Healthcare</div><div>Portfolios</div><div>Landing pages</div><div>Blogs</div><div>Education</div></div>
     <div className="flex"><div>E-commerce</div><div>Fintech</div><div>Fashion</div><div>Healthcare</div><div>Portfolios</div><div>Landing pages</div><div>Blogs</div><div>Education</div></div>
    </div>
  </div>
</div>
      </div>
      <div><div className={styles.section_title}><h2 className="text-large">Articles</h2> <Link href="/categories" className="text-small">View all</Link></div></div>
    
      <div className="h-full grid grid-cols-12  mt-[72px]">
  <div className="col-span-5 text-small">Why you should hire me</div>
  <div className="col-span-7 text-medium">Hiring me brings aboard a dedicated frontend developer with a commitment to delivering top-tier projects. My passion for both excellence and timeliness fuels my work, ensuring that every project I handle is executed with precision and delivered at a high quality. With a keen eye for detail and creative awareness, I consistently turn concepts into captivating, functional interfaces. </div>
    </div></main>
  )
}
