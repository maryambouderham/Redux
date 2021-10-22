import React,{useState} from 'react'
import Dashboard from '../component/Dashboard';
import film from "../data/Film"
import "../styles/styleDash.css"
const AdminPage = () => {
    const [movies, setMovies] = useState(film);

    const [listBackup, setListBackup] = useState(film);
    const DeleteFilm = (t) => {
        console.log(t);
        const newarray = movies.filter((c) => c.id !== t);
    
        setMovies([...newarray]);
        setListBackup([...newarray]);
      };
    return (
        <>
            <Dashboard listMovies={movies} 
            DeleteMovie={DeleteFilm}
            />
        </>
    )
}

export default AdminPage
