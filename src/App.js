import React from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movieDetails/:id" element={<MovieDetails/>}/>
  </Routes>
</Router>
    </div>
  );
}

export default App;
