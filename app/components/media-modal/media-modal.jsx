import { mediaReplaceService, mediaDeleteService } from 'project-services'
import React, { Component, PropTypes } from 'react'
import Modal from 'react-bootstrap-modal'
import Swiper from 'react-id-swiper'
import ReactPDF from 'react-pdf'
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
    this.onDocumentComplete = this.onDocumentComplete.bind(this)
    this.onPageComplete = this.onPageComplete.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.activeEdit = this.activeEdit.bind(this)
  }
  static get propTypes () {
    return {
      initialSlide: PropTypes.number.isRequired,
      isOpenGallery: PropTypes.bool.isRequired,
      handleGallery: PropTypes.func.isRequired
    }
  }
  activeIndex (swiper) {
    this.setState({activeIndex: swiper.activeIndex})
  }
  onDocumentComplete (countPage, key) {
    let pages = this.state.pages
    pages[key] = countPage.total
    this.setState({ pages })
  }
  onPageComplete (curPage, key) {
    let page = this.state.page
    page[key] = curPage.pageIndex
    this.setState({ page })
  }
  handlePrevious (key) {
    let pagetmp = this.state.page
    if (pagetmp[key] !== 0) {
      pagetmp[key] = pagetmp[key] - 1
      this.setState({ page: pagetmp })
    }
  }
  handleNext (key) {
    let pagetmp = this.state.page
    if (pagetmp[key] !== this.state.pages[key]) {
      pagetmp[key] = pagetmp[key] + 1
      this.setState({ page: pagetmp })
    }
  }
  async replace (id) {
    const body = {
      description: this.state.textareaValue
    }
    await mediaReplaceService(body, id)
    this.setState({
      isEditNote: false,
      textareaValue: ''
    })
  }
  async delete (id) {
    await mediaDeleteService(id)
  }
  activeEdit () {
    if (!this.state.isEditNote) {
      this.setState({
        isEditNote: !this.state.isEditNote,
        textareaValue: config.data.gallery[this.state.activeIndex].note
      })
    }
  }
  render () {
    return (
      <Modal show={this.props.isOpenGallery}>
        <Modal.Header>
          <img onClick={this.props.handleGallery} className='close-button' src='./dist/media/add.svg' />
        </Modal.Header>
        <Modal.Body>
          <Swiper noSwiping={this.state.isEditNote} slidesPerView='auto' initialSlide={this.props.initialSlide}
            nextButton={this.state.isEditNote ? '' : '.swiper-button-next'}
            prevButton={this.state.isEditNote ? '' : '.swiper-button-prev'}
            onSetTranslate={swiper => { this.activeIndex(swiper) }}>
            {config.data.gallery.map((el, key) => {
              if (el.name.indexOf('png') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <img src={config.urls.gallery + el.name} />
                  </div>
                )
              } else if (el.name.indexOf('mp3') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <img src={config.urls.media + 'audio_file.png'} />
                    <audio src={config.urls.gallery + el.name} controls />
                  </div>
                )
              } else if (el.name.indexOf('mp4') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <video src={config.urls.gallery + el.name} controls />
                  </div>
                )
              } else if (el.name.indexOf('pdf') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <ReactPDF file={config.urls.gallery + el.name} onDocumentLoad={e => { this.onDocumentComplete(e, key) }}
                      onPageLoad={e => { this.onPageComplete(e, key) }} pageIndex={this.state.page[key]} />
                    <h1 onClick={() => { this.handlePrevious(key) }}>Prev</h1>
                    <h1>Page {this.state.page[key] + 1} of {this.state.pages[key]}</h1>
                    <h1 onClick={() => { this.handleNext(key) }}>Next</h1>
                    {/* <iframe src={'http://docs.google.com/gview?url=http://www.axmag.com/download/pdfurl-guide.pdf&embedded=true'} /> */}
                  </div>
                )
              }
            })}
          </Swiper>
        </Modal.Body>
        <Modal.Footer>
          <div className='data'>
            <h1>{config.data.gallery[this.state.activeIndex].date}</h1>
            <h1>{config.data.gallery[this.state.activeIndex].note}</h1>
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
