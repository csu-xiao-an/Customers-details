import React from 'react'
import './email.styl'

class Email extends React.Component {
  render () {
    return (
      <div id='e-mail'>
        <img src='./app/components/media/mail.svg' />
        <div className='e-mail-label'>E-mail</div>
        <h1>ahuva.ben.shushan@gmail.com</h1>
      </div>
    )
  }
}
export default Email
