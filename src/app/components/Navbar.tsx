"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
      <nav className="border-gray-200 bg-neutral-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
              <div className="flex items-center">
                  <Image src="/alure-post.svg" className="mr-4" alt="Alure Flag" width={50} height={50}/>
                  <span className="self-center text-2xl font-medium whitespace-nowrap dark:text-white"><p>Alure Post</p></span>
              </div>
              <button data-collapse-toggle="navbar-default" type="button"
                      className="transition duration-150 ease-out hover:ease-in inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavbar(!navbar)}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className={`w-full md:block md:w-auto ${navbar ? 'block' : 'hidden' }`}>
                  <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
                      {[
                          ['Home', '/'],
                          ['Track', '/track'],
                          ['Send', '/send'],

                      ].map(([title, url]) => (
                          <li key={title}>
                              <Link href={url} className="transition duration-150 ease-out hover:ease-in block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" onClick={() => setNavbar(!navbar)}>
                                  {title}
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar;
