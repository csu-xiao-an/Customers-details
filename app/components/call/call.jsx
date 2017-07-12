import React from 'react'
import './call.styl'

const client = window._config

class Call extends React.Component {
  render () {
    return (
      <div id='call'>
        <a href={'tel:' + client.data.phone[0]}><img src='./dist/media/call.svg' /></a>
        <a href={'sms:' + client.data.phone[0]}><img src='./dist/media/send-sms.svg' /></a>
        <div className='call-label'>{client.translations.mobile}</div>
        <h1>{client.data.phone.map((el, key) => <span key={key}>{el} </span>)}</h1>
      </div>
    )
  }
}
export default Call
