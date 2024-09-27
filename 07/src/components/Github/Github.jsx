import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/abhi-v017')
    //  .then(Response => Response.json())
    //  .then((data)=>{setData(data)})
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const gitInfoLoader = async()=>{
    const Response =await fetch('https://api.github.com/users/abhi-v017')
    return Response.json()
}