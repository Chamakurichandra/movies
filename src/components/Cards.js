import React, { useState} from 'react';
import { Pagination } from 'antd';
import {useNavigate} from 'react-router-dom';
import Star from '../assets/Star.png';
import '../App.css';
export default function Cards({ movies }) {
  let navigate=useNavigate();
  const [pagination, setPagination] = useState({ minValue: 0, maxValue: 16 });
  const numEachPage = 16;
  let url = 'https://image.tmdb.org/t/p/w500';
  const handleChange = (value) => {
    setPagination({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage
    });
  };
  return (
    <div>
      <div className='row m-0 p-0 g-0'>
        {movies && movies.results.slice(pagination.minValue, pagination.maxValue).map((item, i) => (
          <div className='col-lg-3 col-sm-6 col-md-6' key={i} onClick={()=>navigate(`/movieDetails/${item.id}`,{state:item})}>
            <div className='movieCard mx-2'>
              <img src={url + item.poster_path} className="w-100 d-block h-100" alt='movie' />
              <div className='position-absolute w-100 info'>
                <div className='title'>
                  <div>{item.title.slice(0, 20)}</div>
                  <img src={Star} alt="" />
                  <span>{item.vote_average} / 10</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center pb-3'>
        <Pagination size="small"
          defaultCurrent={1}
          defaultPageSize={numEachPage}
          onChange={handleChange}
          total={movies && movies.results.length}
        />
      </div>
    </div>
  )
}
