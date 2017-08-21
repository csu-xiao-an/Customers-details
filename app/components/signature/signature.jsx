import SignatureModal from '../signature-modal/signature-modal.jsx'
import Switch from 'react-toggle-switch'
import React from 'react'
import './signature.styl'

class Signature extends React.Component {
  constructor () {
    super()
    this.state = {
      isEditSignature: false
    }
    this.handleEditSignature = this.handleEditSignature.bind(this)
  }
  handleEditSignature () {
    this.setState({isEditSignature: !this.state.isEditSignature})
  }
  render () {
    return (
      <div id='signature'>
        <SignatureModal isEditSignature={this.state.isEditSignature} handleEditSignature={this.handleEditSignature} />
        <div className='checkbox-wrap'>
          <div className='text'>
            <h1 className='text-h1'>{config.translations.marketing_material}</h1>
          </div>
          <div className='switch'>
            <Switch on={config.data.permit_ads} />
          </div>
        </div>
        <div className={config.data.signature ? 'autograph-wrap' : 'hidden'}>
          <div className='autograph'>
            <img src={config.data.signature} />
          </div>
          <div className='label'>
            <h1>{config.translations.signature_added}</h1>
            <button className='block2-button'>{config.translations.btn_delete}</button>
            <button className='block2-button'>{config.translations.btn_replace}</button>
          </div>
        </div>
        <div className={config.data.signature ? 'hidden' : 'add-signature-wrap'} onClick={this.handleEditSignature}>
          <div className='text-wrap'>
            <h1>{config.translations.add_signature}</h1>
          </div>
          <div className='img-wrap'>
            <img src={config.urls.media + 'pencil.svg'} />
          </div>
        </div>
      </div>
    )
  }
}
export default Signature
