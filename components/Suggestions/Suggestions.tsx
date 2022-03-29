import React, { useEffect, useState } from 'react'
import {faker} from '@faker-js/faker';
import { ContextualCard } from '@faker-js/faker/helpers';


function Suggestions() {

	const [suggestions, setSuggestions] = useState<ContextualCard[]>([])

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: Date.now()
		}))

		setSuggestions(suggestions)

	}, [])
  
  return (
    <div className='mt-4 ml-5'>
      <div className='flex justify-between text-small mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-bold'>See all</button>
      </div>
      {
				suggestions.length && suggestions.map((profile: any) => (
					<div 
						key={profile.name}
						className='flex w-full items-center justify-between mt-3'
					>
            <img
              src={profile.avatar}
              alt=""
              className='w-10 h-10 rounded-full border p-[2px]'
            />

            <div className='flex-1 ml-2'>
              <h2 className='font-semibold text-sm'>
                {profile.username}
              </h2>
              <h3 className='text-sm text-gray-400'>
                Works at {profile.company.name}
              </h3>
            </div>

              <button className='text-blue-400 text-sm font-semibold'>Follow</button>

          </div>
				))
			}
    </div>
  )
}

export default Suggestions
