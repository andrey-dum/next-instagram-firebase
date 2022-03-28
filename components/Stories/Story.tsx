import React, { FC } from 'react'

interface IStory {
    id?: string | number;
    username: string;
    avatar: string;
}


export const Story: FC<IStory> = ({
    username,
    avatar
}) => {
  return (
    <div 
        className=''
    >
        <img
            className='rounded-full w-14 h-14 
            p-[1.5px] border-red-500 border-2
            hover:scale-110 transition-all duration-200 ease-out'
            src={avatar}
        />
        <p className='text-xs w-14 truncate text-center'>{username}</p>

    </div>
  )
}

