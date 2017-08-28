import React from 'react'
import './add.styl'

class Add extends React.Component {
  render () {
    return (
      <div id='add'>
        <div className='add2'>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_link}</h1>
        </div>
      </div>
    )
  }
}
export default Add
