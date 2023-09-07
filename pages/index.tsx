import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../public/Profile";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Amin Riqky&apos;s Portofolio</title>
        <meta name="portofolio" content="Made with Next.js with TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-x-hidden">
        <Profile />
        <div className="bg-[#2e82af] w-full h-96 mt-52 pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-screen h-8 translate-y-4"
            fill="none"
          >
            <pattern
              id="bg2"
              patternUnits="userSpaceOnUse"
              width="32"
              height="32"
            >
              <path
                fill="#fff"
                d="M18 12c0 2.21 0 4-2 4s-2-1.79-2-4 0-4 2-4 2 1.79 2 4Z"
              />
              <path
                fill="#3b374a"
                d="M0 28h32v6H0zm14-4c-7.778 0-9.815-6.444-10-10h5.556c.555 4 2.963 4.889 4.444 4.667V24Zm0-24C6.222 0 4.185 6.444 4 10h5.556C10.11 6 12.519 5.111 14 5.333V0Zm4 24c7.778 0 9.815-6.444 10-10h-5.556c-.555 4-2.962 4.889-4.444 4.667V24Zm0-24c7.778 0 9.815 6.444 10 10h-5.556C21.89 6 19.482 5.111 18 5.333V0Z"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#bg2)" />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
