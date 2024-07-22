import React from 'react'

export default async function page({params}) {
  // const API_KEY= process.env.API_KEY;
  const movieid=params.id;
  const res= await fetch(
    `https://api/themoviedb.org/3/movie/${movieid}?api_key=${process.env.API_KEY}`
  );
  const result=res.json();
  console.log(result)
  
  return (
    <div>
<h1>movie</h1>
    </div>
  )
}

