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

import AddMovie from "./Components/AddMovie";
import  Home   from './pages/Home'

function App() {
  return (
    <div className="App">
    
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/addmovie" element={ <AddMovie/> } />
        
        </Routes>
      </Router>
    </div>
  )
}

export default App;