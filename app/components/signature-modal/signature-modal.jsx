import { signatureReplaceService } from 'project-services'
import React, { Component, PropTypes } from 'react'
import Modal from 'react-bootstrap-modal'
import './signature-modal.styl'

class SignatureModal extends Component {
  constructor () {
    super()
    this.state = {
    }
    this.init = this.init.bind(this)
    this.clear = this.clear.bind(this)
    this.save = this.save.bind(this)
  }
  static get propTypes () {
    return {
      handleEditSignature: PropTypes.func.isRequired,
      isEditSignature: PropTypes.bool.isRequired
    }
  }
  init () {
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
      if (res === 'up' || res === 'out') {
        flag = false
      }
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
    canvas.addEventListener('touchmove', e => {
      findxy('move', e)
    }, false)
    canvas.addEventListener('touchstart', e => {
      findxy('down', e)
    }, false)
    canvas.addEventListener('touchend', e => {
      findxy('up', e)
    }, false)
  }
  clear () {
    let canvas = this.refs.canvas
    let ctx = canvas.getContext('2d')
    let w = canvas.width
    let h = canvas.height
    ctx.clearRect(0, 0, w, h)
  }
  async save () {
    let canvas = this.refs.canvas
    let dataURL = canvas.toDataURL()
    const body = `sign=${dataURL}`
    const response = await signatureReplaceService(body)
    if (response.status === 204) {
      this.props.handleEditSignature()
      config.data.signature = dataURL
    }
  }
  componentDidUpdate () {
    this.init()
  }
  render () {
    return (
      <Modal show={this.props.isEditSignature} dialogClassName='signature-modal-dialog' onHide={this.props.handleEditSignature}>
        <div id='signature-modal-header'>
          <Modal.Header>
            <img onClick={this.props.handleEditSignature} className={'close-button ' + (config.isRtL ? 'left' : 'right')} src='./dist/media/add.svg' />
          </Modal.Header>
        </div>
        <div id='signature-modal-body'>
          <canvas ref='canvas' width={336} height={200} />
        </div>
        <div id='signature-modal-footer'>
          <Modal.Footer>
            <button className={config.isRtL ? 'radiusRight' : 'radiusLeft'} onClick={this.save}>{config.translations.save_signature}</button>
            <button className={config.isRtL ? 'radiusLeft' : 'radiusRight'} onClick={this.clear}>{config.translations.clear}</button>
          </Modal.Footer>
        </div>
      </Modal>
    )
  }
}

export default SignatureModal
