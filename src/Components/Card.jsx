import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiThumbsUp} from 'react-icons/fi'


export default function Card({result}) {
  return (
    <div className='group cursor-pointer hover:shadow-slate-400 shadow-md border-slate-400 rounded-xl m-2 transition-shadow duration-200'>

<Link href={`/movie/${result.id}`}>
        
        <Image  src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
        width={500}
            height={300} className='group-hover:opacity-75 transition-opacity duration-300 '
             >
              </Image>
             <div>
              <p className='line-clamp-2 text-lg'>{result.overview}</p>
              <h1 className='text-xl font-bold truncate'>{result.title || result.name}</h1>
             <p className='flex items-center'>
             {result.release_date || result.first_air_date}
             <FiThumbsUp className='mx-2 h-8 w-6'/>
             {result.vote_count}
             </p>
             </div>

      </Link>
    </div>
  )
}
