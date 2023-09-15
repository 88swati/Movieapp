// import React from 'react'
// import Header from './Components/Header'
// import Cards from './Components/Cards';

// function App() {
//   return (
//     <div >
//        <Header/>
//        <Cards/>
//     </div>
//   )
// }

// export default App;


// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

// import  Home   from './pages/Home'
// import AddMovie from './pages/AddMovie';
// import  Details  from "./pages/Details";

// function App() {
//   return (
//     <div className="App">

//       <Router>
//        <Routes>
//         <Route path="/" element={ <Home/> } />
//         <Route path="/addmovie"  element={<AddMovie/>} />
//         {/* <Route path="/details/:id"  element={<Details/>} /> */}
//         <Route path="/detail/:id" element={<Details/>} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App;




import React,{useState} from 'react'
import MovieCard from './compponents/MovieCard'
import Navbar from './compponents/Navbar'
import Searchbar from './compponents/Searchbar'

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
 const [searchMovie, setSearchMovie] = useState('');
 const [loading, setLoading] = useState(false);

 const fetchMovieData = async () => {
  try {
    setLoading(true);
    const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
                             
    const data = await res.json();
    setAllMovieData(data.Search);
    console.log(data.Search)
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}
  return (
    <div>
      <Navbar />
      <div className=' bg'>
        <Searchbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <MovieCard  allMovieData={allMovieData} loading={loading}/>
      </div>
    </div>
  )
}

export default App;