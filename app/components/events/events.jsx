import { lastAppoinment } from 'project-components'
import Swiper from 'react-id-swiper'
import moment from 'moment'
import React from 'react'
import './events.styl'

class Events extends React.Component {
  procedures (el) {
    if (el.procedures.length > 1) {
      return el.procedures.length + ' ' + config.translations.procedures
    } else {
      return el.procedures[0].name
    }
  }
  price (el) {
    let sum = 0
    if (el.procedures.length > 1) {
      for (let i = 0; i < el.procedures.length; i++) {
        sum += el.procedures[i].price
      }
    } else {
      sum = el.procedures[0].price
    }
    if (sum === 0 || isNaN(sum)) {
      return ''
    } else {
      return sum
    }
  }
  initialSlide () {
    let slide
    config.data.recent_appoinments.sort((a, b) => +(a.date > b.date) || +(a.date === b.date) - 1).every((el, key) => {
      if (moment() < moment(el.date)) {
        slide = key
        return false
      } else {
        return true
      }
    })
    return slide
  }
  render () {
    return (
      <div id='events'>
        <div className='events'>
          <a href={config.urls.main + config.urls.appointment + '?client_id=' + config.data.id}><img className='clock' src={config.urls.media + 'clock.png'} /></a>
          <h1 className={'label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.close_visits}</h1>
          <div id='swiper-wrap-notes'>
            <Swiper pagination='.swiper-pagination' slidesPerView='auto' paginationClickable initialSlide={this.initialSlide()}>
              <div>
                <div className='note start-note'>{config.translations.all_visits}</div>
              </div>
              {config.data.recent_appoinments.sort((a, b) => +(a.date > b.date) || +(a.date === b.date) - 1).map((el, key) => {
                return (
                  <div key={key}>
                    <div className='note'>
                      <h1 className='date'>{lastAppoinment(el.date)}</h1>
                      <h1 className='procedure'>{this.procedures(el)}</h1>
                      <h1 className='price'>{this.price(el)} {this.price(el) ? (config.data.currency) : ''}</h1>
                    </div>
                  </div>
                )
              })}
              <div>
                <div className='note end-note'>
                  <h1 className='date'><span className='orange'>before</span> week</h1>
                  <h1 className='procedure'>Laser hair removal</h1>
                  <h1 className='price'>450 {config.data.currency}</h1>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    )
  }
}
export default Events
