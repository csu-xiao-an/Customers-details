import Swiper from 'react-id-swiper'
import Modal from 'react-bootstrap-modal'
import React from 'react'
import './gallery.styl'

const client = window._config

class Gallery extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpenGallery: false,
      initialSlide: 0
    }
    this.handleGallery = this.handleGallery.bind(this)
  }
  handleGallery () {
    this.setState({isOpenGallery: !this.state.isOpenGallery})
  }
  initialSlide (key) {
    this.setState({initialSlide: key})
  }
  render () {
    return (
      <div id='gallery'>
        <Modal show={this.state.isOpenGallery}>
          <Modal.Header>
            <img onClick={this.handleGallery} className='close-button' src='./dist/media/add.svg' />
          </Modal.Header>
          <Modal.Body>
            <Swiper slidesPerView='auto' initialSlide={this.state.initialSlide} nextButton='.swiper-button-next' prevButton='.swiper-button-prev'>
              {client.data.gallery.map((el, key) => {
                return (
                  <div key={key} id='gallery-swiper-wrap'>
                    <img src={client.urls.gallery + el} className='gallery-single-item' />
                  </div>)
              })}
            </Swiper>
          </Modal.Body>
          <Modal.Footer>
            <p>dsfsdfsdf</p>
          </Modal.Footer>
        </Modal>
        <div className='label-wrap'>
          <h1>{client.data.gallery.length} {client.translations.photos_count}</h1>
          <div className='gallery-label'>{client.translations.gallery}</div>
        </div>
        <div id='swiper-wrap-gallery'>
          <Swiper pagination='.swiper-pagination' slidesPerView={3} slidesPerColumn={2} paginationClickable>
            {client.data.gallery.map((el, key) => {
              return (
                <div key={key}>
                  <img src={client.urls.gallery + el} onClick={() => { this.handleGallery(); this.initialSlide(key) }} />
                </div>)
            })}
          </Swiper>
        </div>
        <img className='add-button' src='./dist/media/add.svg' />
        <h1 className='add-label'>{client.translations.add_media}</h1>
      </div>
    )
  }
}
export default Gallery
