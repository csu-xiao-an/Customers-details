import Swiper from 'react-id-swiper'
import React from 'react'
import './galery.styl'

class Galery extends React.Component {
  constructor () {
    super()
    this.state = {
      images: [
        '01', '02', '03', '04', '05', '06', '07', '08', '09',
        '10', '11', '12', '13', '14', '15', '16', '17', '18'
      ]
    }
  }
  render () {
    return (
      <div id='gallery'>
        <div className='label-wrap'>
          <h1>18 photos</h1>
          <div className='gallery-label'>Gallery</div>
        </div>
        <div id='swiper-wrap-gallery'>
          <Swiper pagination='.swiper-pagination' slidesPerView={3} slidesPerColumn={2} paginationClickable>
            {this.state.images.map((el, key) => {
              return (
                <div key={key}>
                  <img src={'./app/components/media/galery/' + (el) + '.png'} />
                </div>)
            })}
          </Swiper>
        </div>
        <img className='add-button' src='./app/components/media/add.svg' />
        <h1 className='add-label'>Add media</h1>
      </div>
    )
  }
}
export default Galery
