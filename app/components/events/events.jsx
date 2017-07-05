import { getLastAppoinment } from 'project-components'
import Swiper from 'react-id-swiper'
import { Link } from 'react-router'
import moment from 'moment'
import React from 'react'
import './events.styl'

const client = window._config

class Events extends React.Component {
  procedures (el) {
    if (el.procedures.length > 1) {
      return el.procedures.length + ' ' + client.translations.procedures
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
    client.data.recent_appoinments.sort((a, b) => +(a.date > b.date) || +(a.date === b.date) - 1).every((el, key) => {
      if (moment() < moment(el.date)) {
        slide = key + 1
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
          <img className='clock' src='./app/components/media/clock.svg' />
          <button className='babel'>{client.translations.close_visits}</button>
          <div id='swiper-wrap-notes'>
            <Swiper pagination='.swiper-pagination' slidesPerView={2.7} paginationClickable centeredSlides initialSlide={this.initialSlide()}>
              <div />
              <div>
                <Link to={client.urls.appointments}>
                  <div className='note start-note'>{client.translations.all_visits}</div>
                </Link>
              </div>
              {client.data.recent_appoinments.sort((a, b) => +(a.date > b.date) || +(a.date === b.date) - 1).map((el, key) => {
                return (
                  <div key={key}>
                    <div className='note'>
                      <h1 className='date'>{getLastAppoinment(el.date)}</h1>
                      <h1 className='procedure'>{this.procedures(el)}</h1>
                      <h1 className='price'>{this.price(el)} {this.price(el) ? (client.data.currency) : ''}</h1>
                    </div>
                  </div>
                )
              })}
              <div>
                <div className='note end-note'>
                  <h1 className='date'><span className='orange'>before</span> week</h1>
                  <h1 className='procedure'>Laser hair removal</h1>
                  <h1 className='price'>450 {client.data.currency}</h1>
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
