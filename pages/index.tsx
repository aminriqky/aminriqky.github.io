import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="portofolio" content="Made with Next.js with TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center'>
        <img className='rounded-full w-60 h-auto items-center z-10 my-9 pt-1.5' 
          src="https://github.com/aminriqky.png" 
          alt="Profile Picture" 
        />
        <div className='flex-row mx-8 z-10'>
          <p className='font-bebas-neue tracking-[.180em] text-5xl mt-24'>
            Muhammad Amin Riqky
          </p>
          <div className="inline-flex rounded-md shadow-sm mt-12" role="group">
            <button type="button" className="btn-primary rounded-l-lg ">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-4 h-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              Profile
            </button>
            <button type="button" className="btn-primary border-t border-b">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-4 h-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Education
            </button>
            <button type="button" className="btn-primary border-t border-b">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-4 h-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Achievement
            </button>
            <button type="button" className="btn-primary border-t border-b">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-4 h-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              Gallery
            </button>
            <button type="button" className="btn-primary rounded-r-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-4 h-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Project
            </button>
          </div>
        </div>
        <div className='absolute bg-[#3b374a] w-full h-96 z-0 mt-40'>
          <div className='flex flex-row mt-40 justify-center ml-[25%] mr-[25%]'>
            <div className='w-4 h-4 bg-[#2e82af] font-sans my-2.5'/>
            <div className='flex flex-col'>
              <p className='text-white font-roboto-flex font-medium text-3xl ml-3'>
                Profile
              </p>
              <p className='paragraph'>
                Hello, my full name is Muhammad Amin Riqky, and people who knew me call me Amin. 
                Now, I live in Palembang, South Sumatera. I was born in Palembang, on 13 November 2000.
                I strive to be the one of best Web and App Developer at every project so i'm always learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
