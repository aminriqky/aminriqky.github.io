import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="portofolio" content="Made with Next.js with TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-x-hidden">
        <div className="flex justify-center">
          <img
            className="rounded-full w-60 h-auto items-center z-10 my-9 pt-1.5"
            src="https://github.com/aminriqky.png"
            alt="Profile Picture"
          />
          <div className="flex-row mx-8 z-10">
            <p className="font-bebas-neue tracking-[.180em] text-5xl mt-24">
              Muhammad Amin Riqky
            </p>
            <div
              className="inline-flex rounded-md shadow-sm mt-12"
              role="group"
            >
              <button type="button" className="btn-primary rounded-l-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-4 h-4 mb-1 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                Profile
              </button>
              <button type="button" className="btn-primary border-t border-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-4 h-4 mb-1 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Education
              </button>
              <button type="button" className="btn-primary border-t border-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-4 h-4 mb-1 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Achievement
              </button>
              <button type="button" className="btn-primary border-t border-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-4 h-4 mb-1 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg>
                Skill
              </button>
              <button type="button" className="btn-primary rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-4 h-4 mb-1 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Project
              </button>
            </div>
          </div>
          <div className="absolute bg-[#3b374a] w-full h-96 z-0 mt-40">
            <div className="flex flex-row mt-40 justify-center ml-[25%] mr-[25%]">
              <div className="w-4 h-4 bg-[#2e82af] font-sans my-2.5" />
              <div className="flex flex-col">
                <p className="text-white font-roboto-flex font-medium text-3xl ml-3">
                  Profile
                </p>
                <p className="paragraph">
                  Hello, my full name is Muhammad Amin Riqky, and people who
                  knew me call me Amin. Now, I live in Palembang, South
                  Sumatera. I was born in Palembang, on 13 November 2000. I
                  strive to be one of the best Web and App Developer at every
                  project so i'm always learning.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-screen h-8"
                fill="none"
              >
                <pattern
                  id="bg1"
                  patternUnits="userSpaceOnUse"
                  width="32"
                  height="32"
                >
                  <path fill="#AAA" d="M16 9 0 25h6l10-10 10 10h6L16 9Z" />
                  <path
                    fill="#fff"
                    d="m16 18 6.928 7.5H9.072L16 18ZM0 0h32v6H0zm0 28h32v6H0z"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#bg1)" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#2e82af] w-full h-96 mt-56">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-screen h-8 translate-y-1.5"
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
