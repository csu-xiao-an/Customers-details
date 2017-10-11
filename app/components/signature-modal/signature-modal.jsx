import {signatureReplaceService} from 'project-services'
import React, {Component, PropTypes} from 'react'
import {dataURLtoFile} from 'project-components'
import Modal from 'react-bootstrap-modal'
import './signature-modal.styl'

class SignatureModal extends Component {
  init = () => {
    let canvas = this.refs.canvas
    let ctx = canvas.getContext('2d')
    let flag = false
    let prevX = 0
    let currX = 0
    let prevY = 0
    let currY = 0
    let dot = false
    const findxy = (res, e) => {
      const draw = () => {
        ctx.beginPath()
        ctx.moveTo(prevX - 40, prevY - 40)
        ctx.lineTo(currX - 40, currY - 40)
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.closePath()
      }
      if (res === 'down') {
        prevX = currX
        prevY = currY
        currX = e.targetTouches[0].clientX - canvas.offsetLeft
        currY = e.targetTouches[0].clientY - canvas.offsetTop
        e.preventDefault()
        flag = true
        dot = true
        if (dot) {
          ctx.beginPath()
          ctx.fillStyle = 'black'
          ctx.fillRect(currX - 40, currY - 40, 3, 3)
          ctx.closePath()
          dot = false
        }
      }
      if (res === 'up' || res === 'out') flag = false
      if (res === 'move') {
        if (flag) {
          prevX = currX
          prevY = currY
          currX = e.targetTouches[0].clientX - canvas.offsetLeft
          currY = e.targetTouches[0].clientY - canvas.offsetTop
          e.preventDefault()
          draw()
        }
      }
    }
    canvas.addEventListener('touchstart', e => { findxy('down', e) }, false)
    canvas.addEventListener('touchmove', e => { findxy('move', e) }, false)
    canvas.addEventListener('touchend', e => { findxy('up', e) }, false)
  }
  clear = () => {
    let canvas = this.refs.canvas
    let ctx = this.refs.canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  save = async () => {
    let body = new FormData()
    let canvas = this.refs.canvas
    let dataURL = canvas.toDataURL()
    body.append('sign', dataURLtoFile(dataURL, 'signature.png'))
    const response = await signatureReplaceService(body)
    if (response.status === 204) {
      config.data.signature = dataURL
      if (this.props.isAds) this.props.handleAds()
      this.props.handleEditSignature()
    }
  }
  componentDidUpdate = () => this.props.isEditSignature && this.init()
  render () {
    return (
      <Modal show={this.props.isEditSignature} dialogClassName='signature-modal-dialog' onHide={this.props.handleEditSignature}>
        <div id='signature-modal-header'><Modal.Header>
          <img onClick={this.props.handleEditSignature} className={'close-button ' + (config.isRtL ? 'left' : 'right')} src={config.urls.media + 'add.svg'} />
        </Modal.Header></div>
        <div id='signature-modal-body'><canvas ref='canvas' width={336} height={200} /></div>
        <div id='signature-modal-footer'><Modal.Footer>
          <button className={config.isRtL ? 'radiusRight' : 'radiusLeft'} onClick={this.save}>{config.translations.save_signature}</button>
          <button className={config.isRtL ? 'radiusLeft' : 'radiusRight'} onClick={this.clear}>{config.translations.clear}</button>
        </Modal.Footer></div>
      </Modal>
    )
  }
}
SignatureModal.propTypes = {
  handleEditSignature: PropTypes.func.isRequired,
  isEditSignature: PropTypes.bool.isRequired,
  handleAds: PropTypes.func.isRequired,
  isAds: PropTypes.bool.isRequired
}

export default SignatureModal
