import React from 'react'
import './add.styl'

const client = window._config

class Add extends React.Component {
  render () {
    return (
      <div id='add'>
        <div className='add2'>
          <img src='./dist/media/add.svg' />
          <h1>{client.translations.source_arrival}</h1>
        </div>
        <div className='add2'>
          <img src='./dist/media/add.svg' />
          <h1>{client.translations.social_net}</h1>
        </div>
        <div className='add2'>
          <img src='./dist/media/add.svg' />
          <h1>{client.translations.add_link}</h1>
        </div>
      </div>
    )
  }
}
export default Add
