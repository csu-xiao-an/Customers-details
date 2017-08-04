import React from 'react'
import './comment.styl'

class Comment extends React.Component {
  render () {
    return (
      <div id='comment'>
        <div className='add1-label'>{config.translations.remarks}</div>
        <img src='./dist/media/add.svg' />
        <h1>{config.translations.add_comment}</h1>
      </div>
    )
  }
}
export default Comment
