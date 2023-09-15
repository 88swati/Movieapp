import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db} from '../firebase/firebase';
import {  doc, getDoc } from 'firebase/firestore'


function Details() {
const {id} = useParams();
const [data ,setData] = useState({
  title: "",
  year: "",
  Image: "",
  description:""
});


useEffect(() => {
  async function getData() {
    setloading(true);
    const _doc = doc(db, "movies", id);
  const _data = await getDoc(_doc);
  setData(_data.data);
  }
  getData();
},[])

useEffect(() => {
      async function getData() {
        setLoading(true);
        const _doc = doc(db, "movies", id);
        const _data = await getDoc(_doc);
        console.log(_data.data());
        setData(_data.data());
        
        setLoading(false);
      }
      getData();
    },[])
return (
   <Layout>
      <div className=' mt-4 p-4 flex flex-col md:flex-row items-center md:items-center w-full justify-center '>
      <img className=' h-96 block  md: sticky   '
         src="{data.image}" />
          <div className=' md:ml-4  ml-0 w-full md:w-1/2'>
          <h1 className=' text-3xl font-bold  text-gray-400'>{data.title} <span className=' text-xl '>{data.year}
          </span>
           </h1>
          <ReactStars
                    size={20}
                    half={true}
                    value={5}
                    edit={false}
                     />
                      <p className=' mt-2' >{data.description}
                      </p> 
                     
        </div>
      </div>
    </Layout>
  )
}
export default Detail;












// import React, { useEffect, useState } from 'react'
// import ReactStars from 'react-stars'
// import { useParams } from 'react-router-dom'
// import {db} from '../firebase/firebase'
// import { doc, getDoc } from 'firebase/firestore'
// import { ThreeCircles } from 'react-loader-spinner'


// const Detail = () => {
//   const {id} = useParams();
//   const [data, setData] = useState({
//     title: "",
//     year: "",
//     image: "",
//     description: "",
//     rating: 0,
//     rated: 0
//   });
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     async function getData() {
//       setLoading(true);
//       const _doc = doc(db, "movies", id);
//       const _data = await getDoc(_doc);
//       console.log(_data.data());
//       setData(_data.data());
      
//       setLoading(false);
//     }
//     getData();
//   },[])

//   return (
//     <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
//     { loading ? <div className='h-96 flex w-full justify-center items-center'><ThreeCircles height={30} color="white" /></div> : 
//       <>
//       <img className='h-96 block md:sticky top-24' src={data.image} />

//       <div className='md:ml-4 ml-0 w-full md:w-1/2'>
//         <h1 className='text-3xl font-bold text-gray-400'>{data.title} <span className='text-xl'>({data.year})</span></h1>

//         <ReactStars
//           size={20}
//           half={true}
//           value={5}
//           edit={false}
//         />

//         <p className='mt-2'>{data.description}</p>

       
//       </div>
//       </>
//     }
//     </div>
//   )
// }

// export default Detail;




























