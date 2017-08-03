import React, { Component } from 'react'

class CommentBox extends Component {


  state = {
    comments: [
      "hello1",
      "hello2"
    ]
  }
  
  render(){
    let comStr = this.state.comments.map((item, index) => (
      <li key={index}>{item}</li>
    ))
    return(
      <div className="comment-box">
        <ul>
          {comStr}
        </ul>
      </div>
    )
  }
}

export default CommentBox
