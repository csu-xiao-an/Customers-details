import Switch from 'react-toggle-switch'
import React from 'react'
import './signature.styl'

class Signature extends React.Component {
  render () {
    return (
      <div id='signature'>
        <div className='checkbox-wrap'>
          <Switch on />
          <h1>The customer allows sending marketing material</h1>
        </div>
        <div className='autograph'>
          <img src='./app/components/media/autograph.png' />
        </div>
        <h1>Signature added<br /> successfully</h1>
        <button className='block2-button'>Delete</button>
        <button className='block2-button'>Replace</button>
      </div>
    )
  }
}
export default Signature
