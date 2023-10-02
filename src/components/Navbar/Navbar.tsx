"use client"
import { useState } from 'react';
import './navbar.css'
import HeartIcon from "@/assets/HeartIcon";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';


export default function Navbar({ links }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav>
      <div className="Navbar">
        <a href="/">
          <HeartIcon />
        </a>
        <div className="Menu">
          {links.map((link) => (
            <a
              className="MenuLink"
              key={link.label}
              href={link.url}
              target={link.target}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <div onClick={handleNav} className='BurgerMenu'>
            <AiOutlineMenu size={36} />
          </div>
        </div>
        <div className='w-9'></div>
      </div>
      <div className={
        menuOpen ? 'fixed left-0 top-0 w-[65%] sm-hidden h-screen bg-white p-10 ease-in duration-500'
          : 'fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500'
      }>
        <div className='flex w-full items center justify-end'>
          <div onClick={handleNav} className='curser-pointer'>
            <AiOutlineClose size={35} />
          </div>
        </div>
        <div className='flex-colum py-4'>
          <ul>
            <li className=' py-4'>
              <a href="/">
                <HeartIcon />
              </a>
            </li >
            <Link href='#countdown'>
              <li
                onClick={() => setMenuOpen(false)}
                className='MenuLink py-4'
              >
                Countdown
              </li>
            </Link>
            <Link href='#ablauf'>
              <li
                onClick={() => setMenuOpen(false)}
                className='MenuLink py-4'
              >
                Ablauf
              </li>
            </Link>
            <Link href='#location'>
              <li
                onClick={() => setMenuOpen(false)}
                className='MenuLink py-4'
              >
                Location
              </li>
            </Link>
            <Link href='#uebernachtung'>
              <li
                onClick={() => setMenuOpen(false)}
                className='MenuLink py-4'
              >
                Übernachtung
              </li>
            </Link>
            <Link href='#anmeldung'>
              <li
                onClick={() => setMenuOpen(false)}
                className='MenuLink py-4'
              >
                Anmeldung
              </li>
            </Link>

          </ul>
        </div>
      </div>
    </nav>

  );
}

type Props = {
  links: {
    label: string;
    url: string;
    target?: string;
  }[];
};
