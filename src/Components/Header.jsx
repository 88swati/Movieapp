import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' flex justify-between text-center
     text-red-500 text-3xl p-3 border-b-2
      border-gray-400'>
          <Link to={'/'}> <span>Filmy <span className=' text-white'>knus
            </span></span></Link> 
            <Link to={'/addmovie'}><h1 className=' text-lg cursor-pointer text-white flex items-center'>
                <Button><AddIcon className=' mr-1' color='secondary' /><span className=' text-white'>  Add New </span></Button>
            </h1></Link>
        </div>
    )}
export default Header;