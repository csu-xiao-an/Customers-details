import React from 'react'
import './comment.styl'

class Comment extends React.Component {
  render () {
    return (
      <div id='comment'>
        <div className='label-wrap'>
          <div className={'add-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.remarks}</div>
        </div>
        <div className='add-wrap'>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_comment}</h1>
        </div>
      </div>
    )
  }
}
export default Comment
