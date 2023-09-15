import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import Layout from '../Components/Layout';
import { addDoc } from 'firebase/firestore';
import { moviesRef } from '../firebase/firebase';
import swal from 'sweetalert'

const AddMovie = () => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: ""
  });

  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
    setLoading(true);
     try{
    
    await addDoc(moviesRef, form);
    swal({
      title: "Sucessfully Added",
      icon: "sucess",
      buttons: false,
      timer: 3000
    })
    
  }catch(err) {
    swal({
      title: "Sucessfully Added",
      icon: "sucess",
      buttons: false,
      timer: 3000
    })
    
  }
  setLoading(false);
  }
  return (
    <Layout>
      <section className="  text-blue-600 ">
        <div className="container px-2 py-8  mx-auto">


          {/* Addmovie */}
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">  Add New Movie </h1>
            <hr className=' w-1/3 mx-auto' />
          </div>
          {/* Addmovie */}



          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">


              {/* Name index */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-blue-600">
                    Title

                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border
             border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
              text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              {/* Name index */}


              {/* Email index */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-blue-600">  Year</label>
                  <input type="email" id="email" name="email"

                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}

                    className="w-full bg-gray-100 bg-opacity-50 rounded border
             border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base
              outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
                </div>
              </div>
              {/* Email index */}


              {/* image link */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-blue-600">
                    Image Link

                  </label>
                  <input id="message" name="message"

                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}

                    className="w-full bg-gray-100 bg-opacity-50 rounded border
                  border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
                   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
              </div>
              {/* image Link */}


              {/* Massage index  */}






              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-blue-600">
                    Description

                  </label>
                  <input id="message" name="message"

                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}

                    className="w-full bg-gray-100 bg-opacity-50 rounded border
             border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32
             text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></input>
                </div>
              </div>

              {/* Massage */}

              {/* Button  */}
              <div className="p-2 w-full">
                <button onClick={addMovie} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none
                  hover:bg-green-800 rounded text-lg">

                  {loading ? <TailSpin height={25} color="white" /> : 'Submit'}
                </button>
              </div>
              {/* Button */}


            </div>
          </div>
        </div>
      </section>;
    </Layout>
  )
}
export default AddMovie;















