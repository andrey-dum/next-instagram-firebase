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
import { addDoc, collection, deleteDoc, doc, DocumentData, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { db } from '../../firebase'
import { IComment, IPost } from '../../types'



function Post({
    id,
    username,
    profileImg,
    image,
    caption,
    timestamp
}: IPost) {

    const {data: session} = useSession()
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        
        const unsub = onSnapshot(
          query(collection(db, "posts", id, "comments"), 
          orderBy('timestamp', 'desc')), 
          (snapshot: any) => {
            setComments(snapshot.docs.map((doc: DocumentData) => ({
              ...doc.data(),
              id: doc.id
            })))
          })
    
          return unsub
          
      }, [db, id])

    useEffect(() => {
        onSnapshot(
          collection(db, "posts", id, "likes"), 
          (snapshot: any) => {
            // setLikes(snapshot.docs.map((doc: DocumentData) => ({
            //     ...doc.data(),
            //     id: doc.id
            //   })))
            setLikes(snapshot.docs)
      
          })
      }, [db, id])

    useEffect(() => {
            setHasLiked(
                likes?.findIndex((like) => (like.id === session?.user?.email)) !== - 1
            )
      
      }, [likes])

    const likePost = async () => {
        if(hasLiked) {
            await deleteDoc(doc(db, "posts", id, "likes", session?.user?.email))
        } else {
            await setDoc(doc(db, "posts", id, "likes", session?.user?.email), {
                username: session?.user?.name
            })
        }
    }
     

    const sendComment = async (e: any) => {
        e.preventDefault()

        const commentToSend = comment
        setComment('')

        await addDoc(collection(db, "posts", id, "comments"), {
            text: commentToSend,
            username: session?.user?.name,
            userImage: session?.user?.image,
            timestamp: serverTimestamp()
        })
    }
    
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
                        {
                            hasLiked ? (
                                <HeartIconSolid onClick={likePost} className='iconBtn text-red-500' />
                            ) : (
                                <HeartIcon onClick={likePost} className='iconBtn' />
                            )
                        }
                        {/* <HeartIconSolid className='iconBtn' /> */}
                        <ChatIcon className='iconBtn' />
                        <PaperAirplaneIcon className='iconBtn rotate-90' />
                    </div>
                    <BookmarkIcon className='iconBtn' />
                </div>
            )
        }

        <div className='p-4 '>
        {likes.length > 0 && (
            <p className='font-bold mb-1'>{likes.length} likes</p>
        )}

            <span className='font-bold mr-1'>
                {username}
            </span>
         
            {caption}
        </div>

        {session && comments.length > 0 && (
            <div className=' ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
        
                {comments.map((comment: IComment) => (
                    <div
                        key={comment?.id}
                        className='flex items-center space-x-2 mb-3'
                    >
                        <img 
                            src={comment?.userImage}
                            className='h-7 rounded-full'
                        />
                        <p className='text-sm flex-1'>
                            <span className='font-bold'>
                                {comment?.username}
                            </span>{" "}
                            {comment?.text}
                        </p>

                        <Moment fromNow className='pr-5 text-xs'>
                            {comment?.timestamp?.toDate()}
                        </Moment>

                    </div>
                ))}
            </div>  
        )}

        {/* form */}
        { session && (
            <form className='flex items-center p-4 space-x-3'>
                <EmojiHappyIcon className='h-7' />
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text"
                    placeholder='Add a comment...'
                    className='flex-1 border-none focus:ring-0 outline-none rounded-sm'
                />
                <button 
                    type='submit' 
                    className=" font-semibold text-blue-400"
                    onClick={sendComment}
                    disabled={!comment.trim()}
                >Post</button>
                {/* <PaperAirplaneIcon className='h-7 rotate-90 cursor-pointer' />  */}
            </form>
            )
        }
      
    </div>
  )
}

export default Post
