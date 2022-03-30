import { collection, DocumentData, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { IPost } from '../../types'
import Post from './Post'


export const posts = [
  {
      id: 'e',
      username: 'Jhon Doe',
      profileImg: 'https://andrey-dum.web.app/static/media/avatar.739caae9.jpg',
      img: 'https://andrey-dum.web.app/static/media/avatar.739caae9.jpg',
      caption: 'Hello. This is first post'
  },
  // {
  //     id: '212',
  //     username: 'Andy',
  //     userImg: 'https://andrey-dum.web.app/static/media/avatar.739caae9.jpg',
  //     img: 'https://andrey-dum.web.app/static/media/avatar.739caae9.jpg',
  //     caption: 'Hello. This is first post'
  // },
]


function Posts() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot: any) => {
        setPosts(snapshot.docs.map((doc: DocumentData) => ({
          ...doc.data(),
          id: doc.id
        })))
      })
      
      return unsub

      
  }, [db])

  console.log(posts)

  return (
    <div>
      {
        posts.length && posts.map((post: IPost) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            profileImg={post.profileImg}
            image={post.image}
            caption={post.caption}
            timestamp={post.timestamp}
          />
        ))
      }
      
    </div>
  )
}

export default Posts
