import { useState, useEffect } from "react";
import TypeWriter from "./Typewriter";

const Profile = () => {
  const [profil, setProfil] = useState("");

  useEffect(() => {
    if (profil === "") {
      setProfil("An IT developer with a background in Information Systems. I focus on developing digital solutions that prioritize engaging and intuitive user experiences on websites and applications. With a creative approach and attention to function, I always strive to produce aesthetic and effective work on projects. I believe that learning is a never-ending process, and I am always open to new challenges that can expand my skills and positive impact in the technology world.")
    }
  }, [profil]);

  const handleClickScroll = () => {
    const element = document.getElementById('profile');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="profile" className="flex justify-center">
      <div className="flex justify-center">
        <img
          className="z-10 mx-10 xl:my-10 my-24 rounded-full xl:w-60 w-32 h-32 xl:h-auto items-center"
          src="https://github.com/aminriqky.png"
          alt="Profile Picture"
        />
      </div>
      <div className="xl:flex-row z-10 flex-wrap max-sm:w-60">
        <p className="font-bebas-neue 2xl:tracking-[.100em] text-2xl max-sm:mx-5 xl:text-5xl mt-24">
          Muhammad Amin Riqky | Tech Enthusiast
        </p>
        <div
          className="rounded-md shadow-sm mt-3 max-sm:mx-6 xl:mt-9"
          role="group"
        >
          <button
            onClick={() => { setProfil(""); handleClickScroll(); }}
            type="button" className="btn-primary rounded-l-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 19 19"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Profile</p>
          </button>
          <button type="button" className="btn-primary border-t border-b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 19 19"
              fill="currentColor"
            >
              <path
                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Education</p>
          </button>
          <button type="button" className="btn-primary border-t border-b">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24"
                 fill="currentColor">
              <path fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"/>
              <path
                d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"/>
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Experience</p>
          </button>
          <button type="button" className="btn-primary max-sm:rounded-r-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z"/>
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Scores</p>
          </button>
          <button type="button" className="btn-primary max-sm:rounded-l-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                    clipRule="evenodd"/>
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Achievement</p>
          </button>
          <button type="button" className="btn-primary border-t border-b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 19 19"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                clipRule="evenodd"
              />
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Organization Exp.</p>
          </button>
          <button type="button" className="btn-primary border-t border-b">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd"
                    d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                    clipRule="evenodd"/>
              <path
                d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z"/>
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Tech Skills</p>
          </button>
          <button type="button" className="btn-primary rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 19 19"
              fill="currentColor"
            >
              <path
                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
            </svg>
            <p className="hidden xl:block ml-1.5 text-xs">Projects</p>
          </button>
        </div>
      </div>
      <div className="absolute bg-[#3b374a] w-full h-96 z-0 mt-40">
        <div className="flex flex-row xl:mt-40 mt-20 ml-[5%] mr-[5%] 2xl:ml-[15%] 2xl:mr-[15%]">
          <div className="w-4 h-4 bg-[#2e82af] font-sans my-2.5" />
          <div className="flex flex-col">
            <p className="text-white font-roboto-flex font-medium xl:text-3xl text-xl ml-3">
              Profile
            </p>
            <div className="paragraph text-sm xl:text-base text-justify">
              <TypeWriter text={profil} />
            </div>
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
  );
};

export default Profile;