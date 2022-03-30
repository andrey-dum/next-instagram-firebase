import { 
    HeartIcon,
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    PaperAirplaneIcon
 } from '@heroicons/react/outline'
import { 
    HeartIcon as HeartIconSolid,
    
 } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { IPost } from '../../types'



function Post({
    username,
    profileImg,
    image,
    caption,
    timestamp
}: IPost) {

    const {data: session} = useSession()
    
  return (
    <div className='bg-white mb-7 border rounded-sm'>
        <div className='flex p-4 items-center space-x-2'>
            <img
                src={profileImg}
                alt="profile photo"
                className='h-14 w-14 rounded-full p-1 object-contain border'
                
            />
            <p className='flex-1 font-bold'>{username}</p>
            <DotsHorizontalIcon className='h-5' />
        </div>

        <img
            alt="post img"
            src={image}
            className=' object-cover w-full'
            
        />

        {
            session && (
                <div className='flex p-4 justify-between'>
                    <div className='flex space-x-2'>
                        <HeartIcon className='iconBtn' />
                        {/* <HeartIconSolid className='iconBtn' /> */}
                        <ChatIcon className='iconBtn' />
                        <PaperAirplaneIcon className='iconBtn rotate-90' />
                    </div>
                    <BookmarkIcon className='iconBtn' />
                </div>
            )
        }

        <div className='p-4 '>
            <span className='font-bold mr-1'>
                {username}
            </span>
         
            {caption}
        </div>


        {/* comments */}
        <div></div>

        {/* form */}
        { session && (
            <form className='flex items-center p-4 space-x-3'>
                <EmojiHappyIcon className='h-7' />
                <input 
                    type="text"
                    placeholder='Add a comment...'
                    className='flex-1 border-none focus:ring-0 outline-none rounded-sm'
                />
                {/* <button className=" font-semibold text-blue-400">Post</button> */}
                <PaperAirplaneIcon className='h-7 rotate-90 cursor-pointer' /> 
            </form>
            )
        }
      
    </div>
  )
}

export default Post
