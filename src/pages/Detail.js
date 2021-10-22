import React, { useEffect, useState } from 'react'
import HeaderStd from '../component/HeaderStd'
import FILM from '../data/Film'
import { Anime } from '../models/Anime'
import { Link } from 'react-router-dom'
import MovieDetails from '../component/MovieDetails'
const Detail = ({match}) => {
   /* const[movie,SetMovie]=useState([]);
    const film=movie.find((f)=>f.id===match.params.id)
   SetMovie(...film)*/
   const[mov,setMov]=useState(new Anime());

   useEffect(() => {
   console.log(typeof match.params.id)
    const film=FILM.find((f)=>f.id===match.params.id)
    
    setMov({...film})

  },[]);
    return (
        <div>
           <MovieDetails f={mov} />


        </div>
    )
}

export default Detail
