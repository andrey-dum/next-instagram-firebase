import React from 'react'
import Post from './Post'


const posts = [
  {
      id: 'e',
      username: 'Jhon Doe',
      userImg: 'https://andrey-dum.web.app/static/media/avatar.739caae9.jpg',
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
  return (
    <div>
      {
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        ))
      }
      
    </div>
  )
}

export default Posts
