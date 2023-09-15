import React from 'react'

function Searchbar({searchMovie, setSearchMovie,fetchMovieData}) {
    return (
        <div className=' main flex justify-center py-5 px-4 '>
            <input className='bg-gray-200 placeholder-gray-400 rounded-l-lg px-2
                py-2 outline-none border-2 border-gray-400 text-black w-80' type="text"
                placeholder='Search'
                value={searchMovie} 
                onChange={(e)=> setSearchMovie(e.target.value)}/>
                <button onClick={fetchMovieData}
                 className=' bg-[#40407a] px-4 rounded-r-lg shadow-md
              border-b-2 border-t-2 border-r-2 border-gray-500'>
                    Search
                </button>
        </div>
    )
}

export default Searchbar