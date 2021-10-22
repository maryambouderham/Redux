import React from "react";
import { Link } from "react-router-dom";


const MovieItem = (props) => {
  return (

    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            className="w-100 p-3"
            src={props.image}
          />
          <div className="card-body">
          <h5 class="card-title">{props.title}</h5>
            <p className="card-text">
              {props.description}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group ">
                
                <button
                  type="button"
                  className="btn btn-sm  btn-warning w-25 "
                >
                    
                <Link to={`/detail/${props.id}`} className="text-decoration-none text-dark fw-bold">  Wach Now  </Link>
                <i class="far fa-eye"></i>
                </button>
                {/*<button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() =>
                    //console.log(props.indice)
                    {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this movie?"
                        )
                      )
                        props.OnClickDelete(props.id);
                    }
                  }
                >
                  Delete
                </button>*/}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default MovieItem;
