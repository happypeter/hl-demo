import React, { Component } from 'react'

class CommentBox extends Component {


  state = {
    comments: [
      "hello1",
      "hello2"
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      comments: [...this.state.comments, this.comInput.value ]
    })
    this.comInput.value = ''
  }

  render(){
    let comStr = this.state.comments.map((item, index) => (
      <li key={index}>{item}</li>
    ))

    let comForm = (
      <form onSubmit={this.handleSubmit}>
        <input ref={value => this.comInput = value} type="text" />
        <button type="submit">提交</button>
      </form>
    )
    return(
      <div className="comment-box">
        <ul>
          {comStr}
        </ul>
        {comForm}
      </div>
    )
  }
}

export default CommentBox
