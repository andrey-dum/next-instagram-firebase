import React, { useEffect, useState } from 'react'
import {faker} from '@faker-js/faker';
import { ContextualCard } from '@faker-js/faker/helpers';
import { Story } from './Story';

function Stories() {

	const [suggestions, setSuggestions] = useState<ContextualCard[]>([])

	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: 1
		}))

		setSuggestions(suggestions)

	}, [])

  return (
    <div id="stories" className='mt-5 mb-5 flex space-x-2 
		p-6 bg-wight border-gray-200 border rounded-sm
		 overflow-x-scroll object-contain cursor-pointer
		  scrollbar-thin scrollbar-thumb-gray-400'>
			{
				suggestions.length && suggestions.map((profile: any) => (
					<Story 
						key={profile.name}
						avatar={profile.avatar}
						username={profile.username}
					/>
				))
			}

    </div>
  )
}

export default Stories
