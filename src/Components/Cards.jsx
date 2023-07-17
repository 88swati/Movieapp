import React, { useState } from 'react'
import ReactStars from 'react-stars';
const Cards = () => {
    const [data, setData] = useState([
        {
            name: "Expendables",
            year: "2010",
            rating: "3",
            img: "https://th.bing.com/th/id/R.1ec0518ad4c74cf817c0c3f203f86fb6?rik=GRPEKLFQePu0Bg&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-32.jpg&ehk=z16SCM5GZPYbHYptvN3tDQ8aiUHuZa0Cv161sGbRkyc%3d&risl=&pid=ImgRaw&r=0 "

        },
        {
            name: "Expendables",
            year: "2010",
            rating: "2",
            img: "https://th.bing.com/th/id/R.1ec0518ad4c74cf817c0c3f203f86fb6?rik=GRPEKLFQePu0Bg&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-32.jpg&ehk=z16SCM5GZPYbHYptvN3tDQ8aiUHuZa0Cv161sGbRkyc%3d&risl=&pid=ImgRaw&r=0 "

        },
        {
            name: "Expendables",
            year: "2010",
            rating: "5",
            img: "https://th.bing.com/th/id/R.1ec0518ad4c74cf817c0c3f203f86fb6?rik=GRPEKLFQePu0Bg&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-32.jpg&ehk=z16SCM5GZPYbHYptvN3tDQ8aiUHuZa0Cv161sGbRkyc%3d&risl=&pid=ImgRaw&r=0 "

        },
        {
            name: "Expendables",
            year: "2010",
            rating: "4",
            img: "https://th.bing.com/th/id/R.1ec0518ad4c74cf817c0c3f203f86fb6?rik=GRPEKLFQePu0Bg&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-32.jpg&ehk=z16SCM5GZPYbHYptvN3tDQ8aiUHuZa0Cv161sGbRkyc%3d&risl=&pid=ImgRaw&r=0 "

        },
        {
            name: "Expendables",
            year: "2010",
            rating: "3",
            img: "https://th.bing.com/th/id/R.1ec0518ad4c74cf817c0c3f203f86fb6?rik=GRPEKLFQePu0Bg&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-32.jpg&ehk=z16SCM5GZPYbHYptvN3tDQ8aiUHuZa0Cv161sGbRkyc%3d&risl=&pid=ImgRaw&r=0 "

        },
        {
            name: "Expendables",
            year: "2010",
            rating: "3",
            img: "https://th.bing.com/th/id/R.1ec0518ad4c74cf817c0c3f203f86fb6?rik=GRPEKLFQePu0Bg&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-32.jpg&ehk=z16SCM5GZPYbHYptvN3tDQ8aiUHuZa0Cv161sGbRkyc%3d&risl=&pid=ImgRaw&r=0 "

        },
        {
            name: "Expendables",
            year: "2010",
            rating: "2",
            img: "https://th.bing.com/th/id/R.1ec0518ad4c74cf817c0c3f203f86fb6?rik=GRPEKLFQePu0Bg&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-32.jpg&ehk=z16SCM5GZPYbHYptvN3tDQ8aiUHuZa0Cv161sGbRkyc%3d&risl=&pid=ImgRaw&r=0 "

        }

    ]);;
    return (
        <div className=' flex flex-wrap justify-between p-3  mt-2 '>
            {data.map((e, i) => {
                return (

                    <div key={i} className=' card shadow-lg p-2 hover:-translate-y-3
                       font-medium cursor-pointer mt-6 transition-all  duration-500 '>
                        <img className=' h-72'
                            src={e.img}  />
                        <h1>
                            <span className=' text-red-500'>Name:</span>{e.name}
                        </h1>
                        <h1 className=' flex items-center mr-1'>
                            <span className=' text-red-500'>Rating:</span>
                            <ReactStars
                            size={20}
                            half={true}
                            value={e.rating}
                            edit={false}
                            />
                        </h1>
                        <h1>
                            <span className=' text-red-500'>year:</span>{e.year}
                        </h1>

                    </div>
                )
            })}
        </div>
    )
}
export default Cards;