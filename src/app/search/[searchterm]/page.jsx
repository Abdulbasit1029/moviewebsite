import Results from '@/Components/Results';
import React from 'react'

export default async function Searchpage({params}) {
    const searchTerm=params.searchTerm;
const res=await fetch(
`https://api/themoviedb.org/3/search/movie?api_key=/${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`

);
const data= await res.json();
const results=data.results;
  return (
    <div>
        {
            results && results.length===0 (
                <h1 className='text-center pt-6'>Result Not Found</h1>
            )

        }
        {
           results && <Results results={results}/> 
        }
    </div>
  )
}
