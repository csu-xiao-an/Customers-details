import Swiper from 'react-id-swiper'
import React from 'react'
import './events.styl'

class Events extends React.Component {
  render () {
    return (
      <div id='events'>
        <div className='events'>
          <img className='clock' src='./app/components/media/clock.svg' />
          <h1 className='babel'>Close visits</h1>
          <div id='swiper-wrap-notes'>
            <Swiper pagination='.swiper-pagination' slidesPerView={3} paginationClickable>
              <div>
                <div className='note' />
              </div>
              <div>
                <div className='note' />
              </div>
              <div>
                <div className='note' />
              </div>
              <div>
                <div className='note' />
              </div>
              <div>
                <div className='note' />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    )
  }
}
export default Events
