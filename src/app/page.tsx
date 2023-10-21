"use client";

import Image from "next/image";
import styles from "./main.module.css";

const featuredProjects = [
  {
    title: "Danol Partners",
    link: "https://www.danolpartners.com/",
    image: "danol",
  },
  {
    title: "Lily Health",
    link: "https://www.mylily.health/",
    image: "lily",
  },
  {
    title: "KNF Couture",
    link: "https://wearknf.com/",
    image: "knf",
  },
  {
    title: "Neuf Worldwide",
    link: "https://www.neuf-ww.xyz/",
    image: "neuf",
  },

  {
    title: "De-Fi",
    link: "https://de-fi-mocha.vercel.app/",
    image: "defi",
  },
  {
    title: "Breeze Africa",
    link: "https://www.breeze.africa/",
    image: "breeze",
  },
];

const articles = [
  {
    title: "How to Write a Simple Test for Your Next.js App",
    link: "https://dev.to/anichidera/how-to-write-a-simple-test-for-your-nextjs-app-2k1j",
  },
  {
    title: "User re-authentication in your React app",
    link: "https://dev.to/anichidera/user-re-authentication-in-your-web-app-16bj",
  },
  {
    title: "The difference between get, find, query (React Testing Library)",
    link: "https://dev.to/anichidera/the-difference-between-get-find-query-react-testing-library-472k",
  },
  {
    title: "Managing auth state in your Angular Firebase app",
    link: "https://dev.to/anichidera/managing-auth-state-in-your-angular-firebase-app-dp4",
  },
];

export default function Home() {
  return (
    <main>
      <div id="about" className={"relative " + styles.hero_wrapper}>
        <h1 className="text-extra-large">
          <span>F</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>e</span>
          <span>n</span>
          <span>d</span>
        </h1>
        <h1 className="text-extra-large">
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
      <div className="h-full grid grid-cols-12 relative">
        <div className="col-span-12 md:col-span-7 text-medium mb-[72px]">
          I'm all about building modern frontend and fullstack web applications
          to meet performance, visual, accessibility and security standards. I'm
          based in Lagos, collaborating with clients from around the world to
          bring high-quality and timely web projects to fruition.
        </div>
      </div>
      <div id="projects">
        <div className={styles.section_title}>
          <h2 className="text-large">Featured projects</h2>{" "}
        </div>
        <div className="h-full grid grid-cols-2 gap-[40px] mt-[40px] md:mt-[72px]">
          {featuredProjects.map((details, index) => {
            return (
              <div className="col-span-2 md:col-span-1 relative" key={index}>
                <Image
                  alt="project thumbnail"
                  className={styles.projects_image}
                  src={"/images/" + details.image + ".png"}
                  height={700}
                  width={1200}
                />
                <div>
                  <a
                    className={"flex items-end " + styles.projects_link}
                    href={details.link}
                    target="_blank"
                  >
                    {" "}
                    <span>{details.title}</span>{" "}
                    <span>
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="arrowRightTopIconTitle"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        color="#000000"
                      >
                        {" "}
                        <title id="arrowRightTopIconTitle">
                          Arrow Right Top
                        </title>{" "}
                        <path d="M19 13V5h-8" />{" "}
                        <path stroke-linecap="round" d="M19 5l-1 1" />{" "}
                        <path d="M18 6L5 19" />{" "}
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-full grid grid-cols-12  mt-[72px]">
        <div className="col-span-5 text-small  hidden md:block">
          Technologies I work with
        </div>
        <div className="col-span-12 md:col-span-7 text-medium">
          I utilize React, Next.js, Webflow, and Shopify to craft user
          interfaces that are both interactive and responsive. My skill set
          extends to writing APIs using technologies such as Node.js, Nest.js,
          and GraphQL. I also have experience with a range of tools including
          AWS, Netlify, Vercel, as well as project management platforms like
          Jira and Trello. My proficiency also extends to version control
          platforms like Github and Gitlab, and I'm adept at using Jest for
          testing purposes.
        </div>
      </div>
      <div className="mt-[60px] md:mt-0">
        <div className={styles.section_title}>
          <h2 className="text-large">Project categories</h2>{" "}
        </div>
        <div className={styles.text_scroll_wrapper}>
          <div className={"text-medium " + styles.text_scroll}>
            <div className="flex">
              <div className="flex">
                <div>E-commerce</div>
                <div>Fintech</div>
                <div>Fashion</div>
                <div>Healthcare</div>
                <div>Portfolios</div>
                <div>Landing pages</div>
                <div>Blogs</div>
                <div>Education</div>
              </div>
              <div className="flex">
                <div>E-commerce</div>
                <div>Fintech</div>
                <div>Fashion</div>
                <div>Healthcare</div>
                <div>Portfolios</div>
                <div>Landing pages</div>
                <div>Blogs</div>
                <div>Education</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[60px] md:mt-0">
        <div className={styles.section_title}>
          <h2 className="text-large">Articles</h2>{" "}
          <a
            href="https://dev.to/anichidera"
            target="_blank"
            className="text-small"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-5  hidden md:block"></div>
          <div
            className={
              "col-span-12 md:col-span-7 text-medium " +
              styles.article_container
            }
          >
            {articles.map((article, index) => {
              return (
                <a key={index} href={article.link} target="_blank">
                  <div className="relative">
                    <p>{article.title}</p>
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="arrowRightTopIconTitle"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      color="#000000"
                    >
                      {" "}
                      <title id="arrowRightTopIconTitle">
                        Arrow Right Top
                      </title>{" "}
                      <path d="M19 13V5h-8" />{" "}
                      <path stroke-linecap="round" d="M19 5l-1 1" />{" "}
                      <path d="M18 6L5 19" />{" "}
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-full grid grid-cols-12  mt-[72px]">
        <div className="col-span-5 hidden md:block text-small">
          Why you should hire me
        </div>
        <div className="col-span-12 md:col-span-7 text-medium">
          Hiring me brings aboard a dedicated frontend developer with a
          commitment to delivering top-tier projects. My passion for both
          excellence and timeliness fuels my work, ensuring that every project I
          handle is executed with precision and delivered at a high quality.
          With a keen eye for detail and creative awareness, I consistently turn
          concepts into captivating, functional interfaces.{" "}
        </div>
      </div>
    </main>
  );
}
