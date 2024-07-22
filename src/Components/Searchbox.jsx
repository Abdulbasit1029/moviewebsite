"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Searchbox() {
    const [search,setsearch]=useState("");
    const router=useRouter();
    const handleSubmit=(a)=>{
        a.preventDefault();
        router.push(`/search/${search}`)
    }
  return (
    <div >
        <form className=' flex justify-between  max-w-6xl mx-auto'
        onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Search Keywords' 
            value={search}
            className="w-full h-14 placeholder-gray-500 bg-transparent outline-none rounded-md text-white "

onChange={(e)=>{
    setsearch(e.target.value)
}}
               
               />
            <button className='text-amber-600 disabled:text-gray-500' disabled={search===""} >Search</button>
            
        </form>
    </div>
  )
}
