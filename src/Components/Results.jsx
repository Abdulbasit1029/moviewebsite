import Card from "./Card"
export default function Results({results}) {
  return (
   <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto my-4">
 {/* {
  results.map((result)=>(
<div key={result.id}>
  <h1>{result.original_title}</h1>
   
</div>

  ))
 } */}

 {results.map((result)=>(
    <Card key={result.id} result={result}/>
  ))}
   </div>
  )
}





 {/* {results.map((result)=>(
    <Card key={result.id} result={result}/>
  ))} */}
