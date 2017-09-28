import {signatureDeleteService, clientReplaceService} from 'project-services'
import SignatureModal from '../signature-modal/signature-modal.jsx'
import Switch from 'react-toggle-switch'
import React from 'react'
import './signature.styl'

class Signature extends React.Component {
  constructor () {
    super()
    this.state = {
      isEditSignature: false,
      signatureUrl: ''
    }
  }
  delete = async () => {
    const response = await signatureDeleteService()
    if (response.status === 204) {
      delete config.data.signature
      this.forceUpdate()
    }
  }
  handleAds = async () => {
    const body = `permit_ads=${!config.data.permit_ads}`
    const response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.permit_ads = !config.data.permit_ads
      this.forceUpdate()
    }
  }
  handleEditSignature = () => this.setState({isEditSignature: !this.state.isEditSignature})
  render () {
    return (
      <div id='signature'>
        <SignatureModal isEditSignature={this.state.isEditSignature} handleEditSignature={this.handleEditSignature} />
        <div className='checkbox-wrap'>
          <div className='text'><h1 className='text-h1'>{config.data.permit_ads ? config.translations.permitted : config.translations.not_permitted}</h1></div>
          <div className='switch'><Switch on={config.data.permit_ads} onClick={this.handleAds} className={config.isRtL ? 'switchleft' : 'switchright'} /></div>
        </div>
        <div className={config.data.signature ? 'autograph-wrap' : 'hidden'}>
          <div className={'autograph ' + (config.isRtL ? 'right' : 'left')}><img src={config.data.signature} /></div>
          <div className='label'>
            <h1>{config.translations.signature_added}</h1>
            <button onClick={this.delete}>{config.translations.btn_delete}</button>
            <button onClick={this.handleEditSignature}>{config.translations.btn_replace}</button>
          </div>
        </div>
        <div className={config.data.signature ? 'hidden' : 'add-signature-wrap'} onClick={this.handleEditSignature}>
          <div className='text-wrap'><h1>{config.translations.add_signature}</h1></div>
          <div className='img-wrap'><img src={config.urls.media + 'pencil.svg'} /></div>
        </div>
      </div>
    )
  }
}
export default Signature
