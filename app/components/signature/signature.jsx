import Switch from 'react-toggle-switch'
import React from 'react'
import './signature.styl'

class Signature extends React.Component {
  render () {
    return (
      <div id='signature'>
        <div className='checkbox-wrap'>
          <div className='text'>
            <h1 className='text-h1'>{config.translations.marketing_material}</h1>
          </div>
          <div className='switch'>
            <Switch on={config.data.approved_marketing.status} />
          </div>
        </div>
        <div className='autograph-wrap'>
          <div className='autograph'>
            <img src={'./dist/media/' + config.data.approved_marketing.sign} />
          </div>
          <div className='label'>
            <h1>{config.translations.signature_added}</h1>
            <button className='block2-button'>{config.translations.btn_delete}</button>
            <button className='block2-button'>{config.translations.btn_replace}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Signature
