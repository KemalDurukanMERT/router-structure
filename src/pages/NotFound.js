import React from 'react'
import errImg from  "../assets/404.png"
import { useNavigate } from 'react-router'


const NotFound = () => {
    const navigate = useNavigate()

  return (
    <div className='container text-center mt-4'>
        <img className='w-75' src={errImg} alt='Error Image'/>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-success">
            Go Back
          </button>
        </div>
    </div>
    
  )
}

export default NotFound