import Swiper from 'react-id-swiper'
import React from 'react'
import './gallery.styl'

const client = window._config

class Gallery extends React.Component {
  render () {
    return (
      <div id='gallery'>
        <div className='label-wrap'>
          <h1>{client.data.gallery.length} {client.translations.photos_count}</h1>
          <div className='gallery-label'>{client.translations.gallery}</div>
        </div>
        <div id='swiper-wrap-gallery'>
          <Swiper pagination='.swiper-pagination' slidesPerView={3} slidesPerColumn={2} paginationClickable>
            {client.data.gallery.map((el, key) => {
              return (
                <div key={key}>
                  <img src={client.urls.gallery + el + '.png'} />
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
