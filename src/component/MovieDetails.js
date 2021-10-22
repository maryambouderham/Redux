import React from 'react'
import HeaderStd from './HeaderStd'

const MovieDetails = ({f}) => {
    return (
        <div>
             
             <HeaderStd/>
           <div className="card  w-75 p-5 m-auto" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={f.image} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
          <div className="d-flex align-items-center">
        <h5 className="card-title fw-bold m-1">{f.title}</h5>
        <small className="text-muted  m-1">({f.nbViews})  </small>
       <span style={{color: '#ffca2c'}}>
  <i className="fas fa-star"></i>
</span>

        <h4 className="fw-bold m-1 fs-1">{f.rating}</h4>
        <h5 className="text-muted">/10</h5>
        </div>
        <p className="card-text">{f.description}</p>
        <p className="card-text"><small className="text-muted">Premiere Date {f.startingDate}</small></p>
       
        {
          f.animeTypes.map(at => <span className="badge bg-secondary">{at}</span>)
                        }
  
<div class="list-group">
  <h5 className="fw-bold">Actors:</h5>
  <ul className="list-group list-group-flush w-25">
                            {
                                f.actors.map(actor => <li className="list-group-item ">{actor}</li>)
                            }
                        </ul>
  <button
                  type="button"
                  className="btn btn-sm  btn-warning w-25 "
                >
                    
                   Wach Now  
                <i class="far fa-eye"></i>
                </button>
</div>  
      </div>
    </div>
  </div>
</div>

    
  
        </div>
    )
}

export default MovieDetails
