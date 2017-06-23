import React from 'react'
import './add.styl'

class Add extends React.Component {
  render () {
    return (
      <div id='add'>
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>Source of arrival</h1>
        </div>
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>Add another social network</h1>
        </div>
        <div className='add2'>
          <img src='./app/components/media/add.svg' />
          <h1>Add a link</h1>
        </div>
      </div>
    )
  }
}
export default Add
