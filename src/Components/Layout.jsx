import React from 'react'


import Header from './Header';

function Layout(props) {
    return (

        <div>
            <Header/>
            
           
            {props.children}
            
        </div>

    )
}

export default Layout;


fetch(url, {
    method: "post",
    header: {"Content-Type": "appliction/json"},
    body:  JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));












   axios ({
    url,
    method:"POST",
    header: {"Content-Type": "application/json"},
    data: {"name": "know Technical", creatorOn: "YouTube"}
   })
   .then(response => console.log(response))
   .catch(err => console.log(err))