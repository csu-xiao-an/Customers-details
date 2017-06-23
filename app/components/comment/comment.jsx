import React from 'react'
import './comment.styl'

class Comment extends React.Component {
  render () {
    return (
      <div id='comment'>
        <div className='add1-label'>Remarks</div>
        <img src='./app/components/media/add.svg' />
        <h1>Add a comment</h1>
      </div>
    )
  }
}
export default Comment
