import { mediaReplaceService, mediaDeleteService } from 'project-services'
import React, { Component, PropTypes } from 'react'
import Modal from 'react-bootstrap-modal'
import Swiper from 'react-id-swiper'
import moment from 'moment'
import './media-modal.styl'

class MediaModal extends Component {
  constructor () {
    super()
    this.state = {
      isEditNote: false,
      textareaValue: '',
      activeIndex: 0,
      pages: [],
      page: []
    }
    this.activeEdit = this.activeEdit.bind(this)
  }
  static get propTypes () {
    return {
      initialSlide: PropTypes.number.isRequired,
      isOpenGallery: PropTypes.bool.isRequired,
      handleGallery: PropTypes.func.isRequired
    }
  }
  activeEdit () {
    if (!this.state.isEditNote) {
      this.setState({
        isEditNote: !this.state.isEditNote,
        textareaValue: config.data.gallery[this.state.activeIndex].note
      })
    }
  }
  typeItem (el) {
    if (el.name.indexOf('png') !== -1) {
      return <img src={config.urls.gallery + el.name} />
    } else if (el.name.indexOf('mp4') !== -1) {
      return <video src={config.urls.gallery + el.name} id='video' controls />
    } else if (el.name.indexOf('mp3') !== -1) {
      return (<div>
        <img className='audio-img' src={config.urls.media + 'audio_file.png'} />
        <audio src={config.urls.gallery + el.name} controls />
      </div>)
    } else if (el.name.indexOf('pdf') !== -1) {
      return (<div>
        <iframe src='http://docs.google.com/gview?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true' />
      </div>)
    }
  }
  async replace (id) {
    const body = `note=${this.state.textareaValue}`
    const response = await mediaReplaceService(body, id)
    if (response.status === 204) {
      config.data.gallery[this.state.activeIndex].note = this.state.textareaValue
      config.data.gallery[this.state.activeIndex].date = moment().format('YYYY-MM-DD HH:mm')
      this.setState({
        isEditNote: false,
        textareaValue: ''
      })
    }
  }
  async delete (id) {
    const response = await mediaDeleteService(id)
    if (response.status === 204) {
      config.data.gallery.splice(this.state.activeIndex, 1)
      this.props.handleGallery()
    }
  }
  render () {
    return (
      <Modal show={this.props.isOpenGallery}>
        <Modal.Header>
          <img onClick={this.props.handleGallery} className='close-button' src='./dist/media/add.svg' />
        </Modal.Header>
        <Modal.Body>
          <div className={this.state.isEditNote ? 'noSwiping' : ''}>
            <Swiper onSetTranslate={swiper => { this.setState({activeIndex: swiper.activeIndex}) }}
              observer slidesPerView='auto' initialSlide={this.props.initialSlide}
              nextButton='.swiper-button-next' prevButton='.swiper-button-prev'>
              {config.data.gallery.map((el, key) => (<div key={key} id='gallery-swiper-wrap'>{this.typeItem(el, key)}</div>))}
            </Swiper>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='data'>
            <h1>{config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].date}</h1>
            <h1 className={this.state.isEditNote ? 'hidden' : ''}>{config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].note}</h1>
            <textarea className={this.state.isEditNote ? 'textarea' : 'hidden'}
              onChange={event => { this.setState({textareaValue: event.target.value}) }} value={this.state.textareaValue} />
            <button className={this.state.isEditNote ? '' : 'hidden'}
              onClick={() => { this.replace(config.data.gallery[this.state.activeIndex].id) }}>{config.translations.save}
            </button>
          </div>
          <div className='icons'>
            <img src={config.urls.media + 'edit.png'} onClick={this.activeEdit} />
            <img src={config.urls.media + 'trash.png'} onClick={() => { this.delete(config.data.gallery[this.state.activeIndex].id) }} />
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MediaModal
