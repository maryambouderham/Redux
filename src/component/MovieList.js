import React from 'react'
import MovieItem from './MovieItem'

const MovieList = (props) => {
    return (
        <div>
            <div class="album py-5 bg-light">
    <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {props.listMovies.map(t => 
                <MovieItem
                    key={t.id}
                    id={t.id}
                    title={t.title} 
                    description={t.description}
                    image={t.image}
                   
                    OnClickDelete={props.OnClickDeleteMovie}
                    
                    />)}
      </div>
    </div>
  </div>
        </div>
    )
}

export default MovieList
