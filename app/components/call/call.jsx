import React from 'react'
import './call.styl'

class Call extends React.Component {
  render () {
    return (
      <div id='call'>
        <img src='./app/components/media/call.svg' />
        <img src='./app/components/media/send-sms.svg' />
        <div className='call-label'>Mobile</div>
        <h1>052-3262187</h1>
      </div>
    )
  }
}
export default Call
