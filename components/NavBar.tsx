/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Center, Header, Image, Menu } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee'
import { FaMoon } from "react-icons/fa";
import {BsSunFill} from "react-icons/bs";

const Links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/committee', label: 'Committee' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/papers', label: 'Call for Papers' },
  { href: '/awards', label: 'Awards' },
  { href: '/registration', label: 'Registration' },
  { href: '/sponsorship', label: 'Sponsors' },
  { href: '/tracks', label: 'Tracks' },
  { href: '/contact', label: 'Contact Us' },
]



const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    const theme = localStorage.getItem('theme');
    if(theme === 'darkMode') setDarkMode(true)
  },[])

  useEffect(() =>{
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[darkMode])

  
const pathname = usePathname();

  return (
    <header>
      <div className="navbar mx-auto py-3 w-full bg-blue-400 bg-opacity-20 p-1 shadow-md dark:bg-dark">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10 ">
          <div className="flex lg:w-0 lg:flex-1 ">
            <Link href="/" className="flex items-stretch ml-10  ">
              
                <Image
                  src={darkMode ? "RVCE LOGO BLACK.png" : "RVCE NEW-HEADER_onlyLogo.png"}
                  alt="logo"
                  className="logo h-full z-10 w-14"
                />

            </Link>
          </div>
          <nav className=" hidden space-x-10 font-medium md:flex text-lg text-gray-700 ">
            {Links.map((link) => (
              <Link href={link.href} key={link.label} className={`nav-link dark:text-white text-gery-600 font-sans px-1 py-1 border-b-2 transition duration-300 ${
                pathname === link.href
                  ? "text-blue-500 font-bold border-blue-500"
                  : "hover:border-gray-300 border-transparent hover:text-blue-400 "
              }`}>
                  {link.label}
              </Link>
            ))}
          </nav>
          <div className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1' onClick={()=>setDarkMode(!darkMode)}
          >
            <FaMoon className="text-white" size={18} />
            <div className='absolute bg-white  w-6 h-6 rounded-full shadow-md transform transition-transform ' style={darkMode ? {left:"2px"} : {right:"2px"}}>

            </div>
            <BsSunFill className="ml-auto text-yellow-400" size={18}/>
          </div>
          <div className="hidden items-center justify-end space-x-8 md:flex-1 lg:flex  ">
            <Menu
              control={
                <button
                  className="bg-black-100 rounded-lg p-2 text-gray-600 "
                  type="button"
                  name="Mobile Navigation Menu"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              }
            >
              <Menu.Label>
                <p className="font-sans text-blue-400 underline">
                  Download Links
                </p>
              </Menu.Label>
            </Menu>
          </div>
          <div className="lg:hidden">
            <Menu
              control={
                <button
                  className="rounded-lg bg-gray-100 p-2 text-gray-600"
                  type="button"
                  name="Mobile Navigation Menu"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              }
            >
              <Menu.Label> </Menu.Label>
              {Links.map((link) => (
                <Menu.Item key={link.label}>
                  <Link href={link.href}>
                    <a className="font-sans text-gray-500">{link.label}</a>
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Label>
                <p className="font-sans text-blue-400 underline">
                  Download Links
                </p>
              </Menu.Label>
            </Menu>
          </div>
        </div>
      </div>


       {/* <Marquee className="marquee bg-blue-300">
        <div className="content1">
          <span className="ml-80 font-bold text-yellow-300">
          <Link href=""  download>
           Website Under Construction 
          </Link>
          </span>{' '}
  
        </div>
      </Marquee>  */}

      
      <style jsx>{`
        .navbar {
          animation: fadeIn 1s ease-in-out;
        }
        .logo {
          transition: transform 0.3s;
        }
        .logo:hover {
          transform: scale(1.1);
        }
        .nav-link {
          position: relative;
          transition: color 0.3s, border-bottom 0.3s;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 3px;
          bottom: -2px;
          left: 50%;
          background-color: #1e40af;
          transition: all 0.3s ease-in-out;
        }
        .nav-link:hover::before {
          width: 100%;
          left: 0;
        }
        .marquee {
          margin-top: 1rem;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="static bottom-0 w-full bg-gray-50 dark:bg-dark  daerk:text-white">
      <div
        className="mainDiv mx-auto flex max-w-screen-xl flex-col items-center px-4 py-16 sm:px-6 lg:block lg:px-8"
        style={{ padding: '10px' }}
      >
        <Link className="flex items-center justify-around" href="/">
          <Image src="/logo_rvce.jpg" alt="logo" className="m-5 h-full w-20" />
        </Link>
        
          <Center>
            <Image
              src="https://i.ibb.co/dBDxKQt/GO-CHANGE-THE-WORLD.png"
              alt="GO-CHANGE-THE-WORLD"
              className="m-5 h-full w-48"
            />
          </Center>
        
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-extrabold uppercase text-blue-800 dark:text-white">
            RV College of Engineering
          </h1>
          <h2 className="text-center dark:text-white">
            RV Vidyanikethan Post, Mysuru Road Bengaluru - 560059
          </h2>
        </div>
        <div className="abc mt-8 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-center text-xs text-gray-900 dark:text-white">
              &copy; 2022
              {new Date().getFullYear() > 2022
                ? `-${new Date().getFullYear()}`
                : ''}{' '}
              IEEE RVCE
            </p>
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-white">
              <Center>Developed by</Center>
              <Link
                target="_blank"
                className="font-bold text-indigo-500"
                href="https://ieee-rvce.org/#/devs"
                rel="noreferrer"
              >
                IEEE RVCE SE Team
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 500px) {
          footer {
            padding: 10px;
          }
          .text-xs {
            font-size: 12px;
          }
          .mainDiv {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 5px;
          }
        }
        @media (max-width: 1035px) {
          .abc {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

const WrapApp = ({ children }: any) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={80}>
          <NavBar />
        </Header>
      }
      footer={<Footer />}
    >
      {children}
    </AppShell>
  )
}

export default WrapApp
