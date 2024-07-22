"use client"
import React from 'react'
import { useEffect } from 'react'

export default function error({error,reset}) {
  return (
    <div className='text-center mt-10'>
        <h1 >Something went wrong please try again</h1>
        <button className='hover:bg-amber-600 py-2 px-4 rounded-md' onClick={()=>reset()}>
Try Again
        </button>
    </div>
  )
}
