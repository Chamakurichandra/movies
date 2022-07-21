import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
export default function MovieDetails() {
    let navigate = useNavigate();
    let location = useLocation();
    let imgUrl = 'https://image.tmdb.org/t/p/w500';
    const [movieDetail, setMovieDetail] = useState();
    useEffect(() => {
        getMovieDetails();
    }, [])
    const getMovieDetails = async () => {
        let url = `https://api.themoviedb.org/3/movie/${location.state.id}?api_key=cab4930fa1f4687bf87638eac564aac4&language=en-US`;
        let res = await axios.get(url);
        console.log(res.data);
        setMovieDetail(res.data);
    }
    return (
        <div >

            {movieDetail && <div>
                {location.state.id === movieDetail.id &&
                    <div className='row m-0 p-0 g-0'>
                        <div className='col-lg-6 col-sm-12 col-md-6 pb-5'>
                            <div className=' description'>
                                <div onClick={()=>navigate(-1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </div>
                                <div className='movieTitle'>{movieDetail.title}</div>
                                <div>Rating: {movieDetail.vote_average} / 10</div>
                                <p className='content'>{movieDetail.overview}</p>
                                <div><span style={{ paddingRight: "64px" }}>Release Date</span> {new Date(movieDetail.release_date).getFullYear()}</div>
                                <div><span style={{ paddingRight: "34px" }}>Orginal Language</span>{movieDetail.spoken_languages.map((item, i) => (
                                    <span key={i}>{item.name} </span>
                                ))}</div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-6'>
                            <img src={imgUrl + movieDetail.poster_path} className='poster' />
                        </div>
                    </div>
                }
            </div>}
        </div>
    )
}
