import React from 'react'
import Posts from './Posts/Posts'
import Stories from './Stories/Stories'

function Feed() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
       
			<section className='col-span-2'>
            <Stories />
						<Posts />
      </section>

        <div></div>
      
    </div>
  )
}

export default Feed
