import Swiper from 'react-id-swiper'
import React from 'react'
import './events.styl'

const client = window._config

class Events extends React.Component {
  constructor () {
    super()
    this.state = {
      note: [
        {
          date: '17.05 in',
          time: '11:15',
          deal: 'chemistry',
          price: '90 nis'
        },
        {
          date: 'today in',
          time: '14:15',
          deal: 'manicure'
        },
        {
          date: '12.05 in',
          time: '13:25',
          deal: 'hair coloring',
          price: '280 nis'
        },
        {
          date: 'tomorrow in',
          time: '15:15',
          deal: 'facial treatment',
          price: '450 nis'
        },
        {
          date: 'today in',
          time: '11:45',
          deal: 'laser hair 3 treatments',
          price: '500 nis'
        }
      ]
    }
  }
  render () {
    return (
      <div id='events'>
        <div className='events'>
          <img className='clock' src='./app/components/media/clock.svg' />
          <button className='babel'>{client.translations.close_visits}</button>
          <div id='swiper-wrap-notes'>
            <Swiper pagination='.swiper-pagination' slidesPerView={3} paginationClickable>
              <div>
                <div className='note start-note'>For all <br /> visits...</div>
              </div>
              {this.state.note.map((el, key) => {
                return (
                  <div key={key}>
                    <div className='note'>
                      <h1>{el.date} <span className='col'>{el.time}</span></h1>
                      <h1>{el.deal}</h1>
                      <h1><span className='col'>{el.price}</span></h1>
                    </div>
                  </div>
                )
              })}
              <div>
                <div className='note end-note'>
                  <h1>before <span className='col'>week</span></h1>
                  <h1>Laser hair removal</h1>
                  <h1><span className='col'>450 nis</span></h1>
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
