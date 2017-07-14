import React from 'react'
import './adress.styl'

const client = window._config

class Adress extends React.Component {
  render () {
    return (
      <div id='adress'>
        <div className='google-map'>
          <a href={'waze://?ll=' + client.data.intent_x + ', ' + client.data.intent_y + '&navigate=yes'}>
            <img src={client.urls.media + 'map.png'} />
          </a>
        </div>
        <div className='adress-label'>{client.translations.adress}</div>
        <div className='address'>
          <a href={'waze://?ll=' + client.data.intent_x + ', ' + client.data.intent_y + '&navigate=yes'}><img src={client.urls.media + 'waze.png'} /></a>
          <h1>{client.data.adress}</h1>
        </div>
      </div>
    )
  }
}
export default Adress
