import Modal from 'react-bootstrap-modal'
import Swiper from 'react-id-swiper'
import PDF from 'react-pdf-js'
import './gallery-modal.styl'
import React from 'react'

const client = window._config

class GalleryModal extends React.Component {
  constructor () {
    super()
    this.state = {
      activeIndex: 0,
      pages: [],
      page: []
    }
    this.onDocumentComplete = this.onDocumentComplete.bind(this)
    this.onPageComplete = this.onPageComplete.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }
  activeIndex (swiper) {
    this.setState({activeIndex: swiper.activeIndex})
  }
  onDocumentComplete (pages, key) {
    let pagestmp = this.state.pages
    pagestmp[key] = pages
    this.setState({ pages: pagestmp })
  }
  onPageComplete (page, key) {
    let pagetmp = this.state.page
    pagetmp[key] = page
    this.setState({ page: pagetmp })
  }
  handlePrevious (key) {
    let pagetmp = this.state.page
    if (pagetmp[key] !== 1) {
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
  render () {
    return (
      <Modal show={this.props.isOpenGallery}>
        <Modal.Header>
          <img onClick={this.props.handleGallery} className='close-button' src='./dist/media/add.svg' />
        </Modal.Header>
        <Modal.Body>
          <Swiper slidesPerView='auto' initialSlide={this.props.initialSlide} nextButton='.swiper-button-next' prevButton='.swiper-button-prev'
            onSetTranslate={swiper => { this.activeIndex(swiper) }}>
            {client.data.gallery.map((el, key) => {
              if (el.name.indexOf('png') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <img src={client.urls.gallery + el.name} />
                  </div>
                )
              } else if (el.name.indexOf('mp3') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <img src={client.urls.media + 'audio_file.png'} />
                    <audio src={client.urls.gallery + el.name} controls />
                  </div>
                )
              } else if (el.name.indexOf('mp4') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <video src={client.urls.gallery + el.name} controls />
                  </div>
                )
              } else if (el.name.indexOf('pdf') !== -1) {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <PDF file={client.urls.gallery + el.name}
                      onDocumentComplete={e => { this.onDocumentComplete(e, key) }}
                      onPageComplete={e => { this.onPageComplete(e, key) }}
                      page={this.state.page[key]} />
                    <h1 onClick={() => { this.handlePrevious(key) }}>Prev</h1>
                    <h1>Page {this.state.page[key]} of {this.state.pages[key]}</h1>
                    <h1 onClick={() => { this.handleNext(key) }}>Next</h1>
                  </div>
                )
              }
            })}
          </Swiper>
        </Modal.Body>
        <Modal.Footer>
          <div className='data'>
            <h1>{client.data.gallery[this.state.activeIndex].date}</h1>
            <h1>{client.data.gallery[this.state.activeIndex].note}</h1>
          </div>
          <div className='icons'>
            <img src={client.urls.media + 'edit.png'} />
            <img src={client.urls.media + 'trash.png'} />
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default GalleryModal
