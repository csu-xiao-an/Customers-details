// import { mediaReplaceService, mediaDeleteService } from 'project-services'
import React, { Component, PropTypes } from 'react'
import Modal from 'react-bootstrap-modal'
import './signature-modal.styl'

class SignatureModal extends Component {
  constructor () {
    super()
    this.state = {
    }
    this.init = this.init.bind(this)
  }
  static get propTypes () {
    return {
      handleEditSignature: PropTypes.func.isRequired,
      isEditSignature: PropTypes.bool.isRequired
    }
  }
  // async replace (id) {
  //   const body = `note=${this.state.textareaValue}`
  //   const response = await mediaReplaceService(body, id)
  //   if (response.status === 204) {
  //     config.data.gallery[this.state.activeIndex].note = this.state.textareaValue
  //     config.data.gallery[this.state.activeIndex].date = moment().format('YYYY-MM-DD HH:mm')
  //     this.setState({
  //       isEditNote: false,
  //       textareaValue: ''
  //     })
  //   }
  // }
  // async delete (id) {
  //   const response = await mediaDeleteService(id)
  //   if (response.status === 204) {
  //     config.data.gallery.splice(this.state.activeIndex, 1)
  //     this.props.handleGallery()
  //   }
  // }
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
        ctx.moveTo(prevX - 42, prevY - 42)
        ctx.lineTo(currX - 42, currY - 42)
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.closePath()
      }
      if (res === 'down') {
        prevX = currX
        prevY = currY
        currX = e.clientX - canvas.offsetLeft
        currY = e.clientY - canvas.offsetTop

        flag = true
        dot = true
        if (dot) {
          ctx.beginPath()
          ctx.fillStyle = 'black'
          ctx.fillRect(currX - 42, currY - 42, 2, 2)
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
          currX = e.clientX - canvas.offsetLeft
          currY = e.clientY - canvas.offsetTop
          draw()
        }
      }
    }
    canvas.addEventListener('mousemove', function (e) {
      findxy('move', e)
    }, false)
    canvas.addEventListener('mousedown', function (e) {
      findxy('down', e)
    }, false)
    canvas.addEventListener('mouseup', function (e) {
      findxy('up', e)
    }, false)
    canvas.addEventListener('mouseout', function (e) {
      findxy('out', e)
    }, false)
  }
  componentDidUpdate () {
    this.init()
  }
  render () {
    return (
      <Modal show={this.props.isEditSignature} dialogClassName='signature-modal-dialog' onHide={this.props.handleEditSignature}>
        <div id='signature-modal-header'>
          <Modal.Header>
            <img onClick={this.props.handleEditSignature} className='close-button' src='./dist/media/add.svg' />
          </Modal.Header>
        </div>
        <div id='signature-modal-body'>
          <canvas ref='canvas' width={330} height={200} />
          <button onClick={() => { this.props.handleEditSignature() }}>{config.translations.save_signature}</button>
        </div>
      </Modal>
    )
  }
}

export default SignatureModal
