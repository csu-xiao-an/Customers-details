import React from 'react'
import './comment.styl'

const client = window._config

class Comment extends React.Component {
  render () {
    return (
      <div id='comment'>
        <div className='add1-label'>{client.translations.remarks}</div>
        <img src='./app/components/media/add.svg' />
        <h1>{client.translations.add_comment}</h1>
      </div>
    )
  }
}
export default Comment
