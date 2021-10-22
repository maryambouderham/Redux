import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import HeaderStd from '../component/HeaderStd'

const AddMovie = () => {
    const inputTitle= useRef()
    const inputImage= useRef()
    const inputTime=useRef()
    const inputDescription=useRef()
    const onClickAdd  = (title,image,time,description) =>{
     
    }

    return (
        <div>
            <HeaderStd/>
            <div className="container">
  <h1>Formulaires</h1>
  <form className="needs-validation" noValidate>
    <div className="form-row">
      <div className="col-md-4 mb-3">
        <label htmlFor="prenom">Title</label>
        <input type="text" ref={inputTitle} className="form-control" id="title" placeholder="titre" required />
        <div className="valid-feedback">Ok !</div>
        <div className="invalid-feedback">Valeur incorrecte</div>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="nom">lien de l'image</label>
        <input type="text" ref={inputImage} className="form-control" id="image" placeholder="image" required />
        <div className="valid-feedback">Ok !</div>
        <div className="invalid-feedback">Valeur incorrecte</div>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="pseudo">time</label>
        <input type="text" ref={inputTime} className="form-control" id="time" placeholder="1h20min" required />
        <div className="valid-feedback">Ok !</div>
        <div className="invalid-feedback">Valeur incorrecte</div>
      </div>
    </div>
    <div className="form-group">
  <label htmlFor="bio">Description</label>
  <textarea className="form-control" ref={inputDescription} id="description" rows={3} defaultValue={""} />
</div>

    
    <button 
    onClick={() =>{ onClickAdd(inputTitle.current.value,inputImage.current.value,inputTime.current.value,inputDescription.current.value)
        }}
    className="btn btn-dark" type="submit"><Link to="/">Ajouter</Link></button>
  </form>
</div>

        </div>
    )
}

export default AddMovie
