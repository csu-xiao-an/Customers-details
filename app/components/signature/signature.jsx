import Switch from 'react-toggle-switch'
import React from 'react'
import './signature.styl'

class Signature extends React.Component {
  render () {
    return (
      <div id='signature'>
        <div className='checkbox-wrap'>
          <Switch on={config.data.approved_marketing.status} />
          <h1>{config.translations.marketing_material}</h1>
        </div>
        <div className='autograph'>
          <img src={'./dist/media/' + config.data.approved_marketing.sign} />
        </div>
        <h1>{config.translations.signature_added}</h1>
        <button className='block2-button'>{config.translations.btn_delete}</button>
        <button className='block2-button'>{config.translations.btn_replace}</button>
      </div>
    )
  }
}
export default Signature
