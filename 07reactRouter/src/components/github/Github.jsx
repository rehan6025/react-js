import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Github() {
    const [data , setData] = useState([]);

    useEffect( ()=> {
        fetch('https://api.github.com/users/rehan6025')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    })

  return (

    <div className=' text-center bg-gray-500 p-4 text-xl text-white'>
      Github Repos: {data.public_repos}

      <img className='w-30' src={data.avatar_url} alt="profilePic" />
    </div>
  )
};

export default Github;
