import { useEffect, useState } from "react";


const App=()=> {
  const [data,setData]=useState([])
  const [error, setError] = useState(null);// where to store the coming errors
 
   const fetchData=()=> {// the function to fetch data from the api
     fetch("https://hn.algolia.com/api/v1/search?query=redux")
       .then(res => res.json())
       .then(res => setData(res))
       .catch(err => setError(err));
   }
   useEffect(() => {
   fetchData();
 }, []);
  return (
    <div>
      hello js
    </div>
  );
}

export default App;
