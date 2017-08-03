import React, { Component } from 'react'

import PostBody from './PostBody'
import CommentBox from './CommentBox'

class Post extends Component {
  render(){
    return(
      <div className="post">
        <PostBody />
        <CommentBox />
      </div>
    )
  }
}

export default Post
