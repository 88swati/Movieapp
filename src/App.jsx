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


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './Components/Header';
import Cards from "./Components/Cards";
import AddMovie from "./Components/AddMovie";


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
       <Routes>
        
        <Route path="/" element={ <Cards/> } />
        <Route path="/addmovie" element={ <AddMovie/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App;