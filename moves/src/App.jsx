import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Movie from './component/Movie'
import movies from './movie.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className="main">
        {
          movies.map((element,index)=>{
            return(
            <Movie
            key={index}
            title={element.Title}
            year={element.Year}
            img={element.Poster}
            />
          )
          })
        }
        
      </div>
    </>
  )
}

export default App
