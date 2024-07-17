"use client"
import { useState, useEffect } from 'react'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useTheme } from 'next-themes';
export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [Mounted , SetMounted] = useState(false);
  const currentheme = theme === "system" ? systemTheme : theme;
  useEffect(() => SetMounted(true), []);
  return (
    <div>
      { currentheme === 'dark' ? 
      <CiLight onClick={() => setTheme('light')} className='  text-3xl  hover:text-amber-500 cursor-pointer' /> 
      :
       <CiDark onClick={() => setTheme('dark')} className=' text-3xl hover:text-amber-500 cursor-pointer' />}
    </div>
  )
}
