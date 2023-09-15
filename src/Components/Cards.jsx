import React, { useEffect, useState } from 'react'
import {  Vortex} from 'react-loader-spinner';
import ReactStars from 'react-stars'
import { getDocs } from 'firebase/firestore';

import { Link } from 'react-router-dom';
import { moviesRef } from '../firebase/firebase';

const  Card = () => {
    
    const [data, setData] = useState([]);
    const [ loading, setLoading] = useState( false);

    useEffect(() =>{
       async function getData(){
        setLoading(true);
       const _data  = await getDocs(moviesRef)
      _data.forEach((doc) =>{
        setData((prev) =>[...prev, {... (doc.data()), id: doc.id}])
      })
   setLoading(false);
           }
       getData();
    },[])
    return (
        <>
            <div className=' mt-10 mb-2 text-center capitalize text-4xl'>Top Movie</div>
            <hr className=' w-1/3 mx-auto' />


            <div className=' flex flex-wrap justify-between px-3 mt-2 '>
                { loading ? <div className=' w-full flex justify-center  h-96 items-center'> < Vortex height={90}  color=" white"/> </div>:
                 data.map((e,i) => {
                    return (
              <Link to={`/details/${e.id}`}> <div key={i} className=' card font-medium shadow-lg p-2 hover:-translate-y-2
               cursor-pointer mt-6 transition-all duration-500'>
                    <img className='h-60 md:h-72' src={e.image} />
                    <h1><span className=' text-gray-500 mr-1'>Title:</span>{e.title}
                    </h1>
                    <h1><span className=' text-gray-500 mr-1'>Rating:</span>
                    <ReactStars
                    size={20}
                    half={true}
                    value={5}
                    edit={false}
                     />
                    </h1>
                    <h1><span className=' text-gray-500 mr-1'>Year:</span>{e.year}
                    </h1>
                    </div>
                    </Link> 
                 ) })
                 }
                </div>
        </>
    )
}
export default Card;


// step 1 making card ,
// step 2 define state using usestate ,
// step 3  {
//     name: "Gatsiby",
//     rating:"5",
//     year: "2015",
//     img: "https://www.boredart.com/wp-content/uploads/2015/01/famous-movie-posters-of-All-time-Hollywood-18.jpg"

//     }

//     step 4 map the data 