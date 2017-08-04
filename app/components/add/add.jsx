import React from 'react'
import './add.styl'

class Add extends React.Component {
  render () {
    return (
      <div id='add'>
        <div className='add2'>
          <img src='./dist/media/add.svg' />
          <h1>{config.translations.add_link}</h1>
        </div>
      </div>
    )
  }
}
export default Add
