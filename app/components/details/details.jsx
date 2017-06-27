import React from 'react'
import './details.styl'

const client = window._config

class Details extends React.Component {
  render () {
    return (
      <div id='details'>
        <div className='details-label'>{client.translations.completion}</div>
        <button className='details-button'>{client.translations.send}</button>
        <h1>{client.translations.request_to_detail}</h1>
      </div>
    )
  }
}
export default Details
