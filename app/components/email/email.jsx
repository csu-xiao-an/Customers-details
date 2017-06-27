import React from 'react'
import './email.styl'

const client = window._config

class Email extends React.Component {
  render () {
    return (
      <div id='e-mail'>
        <img src='./app/components/media/mail.svg' />
        <div className='e-mail-label'>{client.translations.email}</div>
        <h1>{client.data.email}</h1>
      </div>
    )
  }
}
export default Email
