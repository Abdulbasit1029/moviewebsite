import React from 'react'
import Menuitem from './Menuitem'
import { FaHome } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

import Link from 'next/link';
import { ThemeProvider } from 'next-themes';
import DarkModeSwitch from './DarkModeSwitch';



export default function Header() {
  return (
    <div className='flex  justify-between max-w-6xl mx-auto pt-4 '>
        <div className='flex gap-4 text-center '>
<Menuitem title="Home" address="/" Icon={FaHome}/>
<Menuitem title="About" address="/about" Icon={IoMdInformationCircle}/>
        </div>
       <div className='flex gap-4'>
<DarkModeSwitch/>
       <Link href={'/'}>
          <span className='bg-amber-500 py-2 px-4 rounded-md  font-bold'>X Videos</span>
        </Link>
       </div>
    </div>
  )
}
