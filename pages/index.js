import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { useState } from "react";
import victor from "../public/victor.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);


  return (
  
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ATcron AB</title>
        <meta name="description" content="ATcron AB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-800 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-sans text-2xl font-bold">ATcron AB</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://atcron.com/cv.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Victor Gunnarsson
            </h2>
            <h3 className="text-2xl font-bold py-2 dark:text-white md:text-3xl">
              Computer Science Engineer
            </h3>
            <p className="text-md py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Expert consultant in software engineering, dedicated to providing customized, efficient solutions. My focus on innovation and continous improvement guarantees cutting-edge, client-focused solutions! 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/victor-gunnarsson-765199196/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="mailto:victor.gunnarsson@atcron.com">
              <AiFillMail />
            </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-400 to-transparent rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-70 md:w-70">
          
              <Image src={victor} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
