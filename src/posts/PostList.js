import React, { Component } from 'react'
import PostData from '../data/posts.json'


class PostList extends Component {
  render() {

    return (
      <div>

        {PostData.map((PostDetail)=> {
          return <h1>{PostDetail.title}
          <br></br>
         <h2><img src={ PostDetail.pic } height="300" alt=""/></h2>

          </h1>
        
        })}
      </div>
    )
    }
  }

  

export default PostList
