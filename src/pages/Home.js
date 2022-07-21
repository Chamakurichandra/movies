import React,{useEffect, useState} from 'react';
import axios from 'axios';
import SearchIcon from '../assets/Vector.png';
import '../App.css';
import Cards from '../components/Cards';
export default function Home() {
  const [moviesList,setMoviesList]=useState();
  const [searchMovie,setSearchMovie]=useState("");

    useEffect(()=>{
      getMoviesList();      
    },[]);

    const getMoviesList=async()=>{
      let url="https://api.themoviedb.org/3/movie/popular?api_key=cab4930fa1f4687bf87638eac564aac4&language=en-US&page=1"
      const res= await axios.get(url);
      setMoviesList(res.data);
    }
    const getSearchMovieList=async()=>{
      let url=
      `https://api.themoviedb.org/3/search/movie?api_key=cab4930fa1f4687bf87638eac564aac4&language=en-US&query=${searchMovie}&page=1&include_adult=false`;
     const res=await axios.get(url);
     console.log(res.data);
     setMoviesList(res.data);
    }
    const handleSearch=()=>{
      getSearchMovieList();
    }
  return (
    <div>
     <div style={{padding:"24px"}}>
     <div class="input-group">
            <input className="form-control border-end-0 border " placeholder='Search movies' type="text"  id="example-search-input" value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)}/>
            <span className="input-group-append">
                <button className="btn btn-primary border-start-0 rounded-0 rounded-end  ms-n3" type="button" onClick={handleSearch}>
                    <img src={SearchIcon} alt=""/>
                </button>
            </span>
     </div>  
     </div> 
     <div className="main">
     <div className='trend'>Trending</div>
     <Cards movies={moviesList}/>
     </div>
    </div>
  )
}
