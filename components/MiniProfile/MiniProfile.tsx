import React from 'react'
import { posts } from '../Posts/Posts'

function MiniProfile() {
  return (
    <div className='flex mt-5 ml-5 items-center justify-between
     '>
       
        <img
            className='h-16 w-16 rounded-full border p-[2px]'
            src={posts[0].userImg}
        />

         <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{posts[0].username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
        </div>

        <button className='ml-5 text-blue-400 text-sm font-semibold'>Sign Out</button>
      
    </div>
  )
}

export default MiniProfile
