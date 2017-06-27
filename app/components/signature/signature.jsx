import Switch from 'react-toggle-switch'
import React from 'react'
import './signature.styl'

const client = window._config

class Signature extends React.Component {
  render () {
    return (
      <div id='signature'>
        <div className='checkbox-wrap'>
          <Switch on={client.data.approved_marketing.status} />
          <h1>{client.translations.marketing_material}</h1>
        </div>
        <div className='autograph'>
          <img src={'./app/components/media/' + client.data.approved_marketing.sign} />
        </div>
        <h1>{client.translations.signature_added}</h1>
        <button className='block2-button'>{client.translations.btn_delete}</button>
        <button className='block2-button'>{client.translations.btn_replace}</button>
      </div>
    )
  }
}
export default Signature
