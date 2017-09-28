import {mediaReplaceService, mediaDeleteService} from 'project-services'
import React, {Component, PropTypes} from 'react'
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
      activeIndex: 0
    }
  }
  static get propTypes () {
    return {
      initialSlide: PropTypes.number.isRequired,
      isOpenGallery: PropTypes.bool.isRequired,
      handleGallery: PropTypes.func.isRequired
    }
  }
  typeItem = (i, k) => {
    if (this.state.activeIndex === k || this.state.activeIndex === k + 1 || this.state.activeIndex === k - 1) {
      if (i.name.indexOf('png') !== -1) { return <img src={config.urls.gallery + i.name} /> } else
      if (i.name.indexOf('mp4') !== -1) { return <video src={config.urls.gallery + i.name} id='video' controls /> } else
      if (i.name.indexOf('mp3') !== -1) {
        return (<div>
          <img className='audio-img' src={config.urls.media + 'audio_file.png'} />
          <audio src={config.urls.gallery + i.name} controls />
        </div>)
      } else if (i.name.indexOf('pdf') !== -1) {
        return <iframe src='http://docs.google.com/gview?url=http://api.bewebmaster.co.il/public/creating_appointment.pdf&embedded=true' />
      }
    }
  }
  replace = async id => {
    const body = `note=${this.state.textareaValue}`
    const response = await mediaReplaceService(body, id)
    if (response.status === 204) {
      config.data.gallery[this.state.activeIndex].note = this.state.textareaValue
      config.data.gallery[this.state.activeIndex].date = moment().format('YYYY-MM-DD HH:mm')
      this.setState({isEditNote: false, textareaValue: ''})
    }
  }
  delete = async id => {
    const response = await mediaDeleteService(id)
    if (response.status === 204) {
      config.data.gallery.splice(this.state.activeIndex, 1)
      this.props.handleGallery()
      this.setState({activeIndex: 0})
    }
  }
  render () {
    return (
      <Modal show={this.props.isOpenGallery}>
        <Modal.Header>
          <img className={'close-button ' + (config.isRtL ? 'left' : 'right')} src='./dist/media/add.svg'
            onClick={() => { this.props.handleGallery(); this.setState({activeIndex: 0}) }} />
        </Modal.Header>
        <Modal.Body>
          <div className={this.state.isEditNote ? 'noSwiping' : ''}>
            <Swiper observer onSlideChangeStart={e => { e.container[0].childNodes[0].style.transitionDuration = '300ms' }}
              nextButton={config.isRtL ? '.swiper-button-prev-rtl' : '.swiper-button-next'}
              prevButton={config.isRtL ? '.swiper-button-next-rtl' : '.swiper-button-prev'}
              onSetTranslate={s => { this.setState({activeIndex: s.activeIndex}) }}
              slidesPerView='auto' initialSlide={this.props.initialSlide}>
              {config.data.gallery.map((i, k) => (<div key={k} id='gallery-swiper-wrap'>{this.typeItem(i, k)}</div>))}
            </Swiper>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='data'>
            <h1 className={config.isRtL ? 'right' : 'left'}>
              {config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].date}</h1>
            <h1 className={this.state.isEditNote ? 'hidden' : config.isRtL ? 'right' : 'left'}>
              {config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].note}</h1>
            <textarea className={this.state.isEditNote ? 'textarea ' + (config.isRtL ? 'right' : 'left') : 'hidden'}
              onChange={event => { this.setState({textareaValue: event.target.value}) }} value={this.state.textareaValue} />
            <button className={this.state.isEditNote ? config.isRtL ? 'right' : 'left' : 'hidden'}
              onClick={() => { this.replace(config.data.gallery[this.state.activeIndex].id) }}>{config.translations.save}
            </button>
          </div>
          <div className='icons'>
            <img src={config.urls.media + 'edit.png'} onClick={() => {
              if (!this.state.isEditNote) this.setState({ isEditNote: !this.state.isEditNote, textareaValue: config.data.gallery[this.state.activeIndex].note })
            }} />
            <img src={config.urls.media + 'trash.png'} onClick={() => { this.delete(config.data.gallery[this.state.activeIndex].id) }} />
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MediaModal
