import React from 'react'
import './call.styl'

const client = window._config

class Call extends React.Component {
  render () {
    return (
      <div id='call'>
        <img src='./app/components/media/call.svg' />
        <img src='./app/components/media/send-sms.svg' />
        <div className='call-label'>{client.translations.mobile}</div>
        <h1>{client.data.phone.map((el, key) => <span key={key}>{el} </span>)}</h1>
      </div>
    )
  }
}
export default Call
