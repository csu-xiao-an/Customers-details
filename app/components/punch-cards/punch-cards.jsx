import AccessRights from '../access-rights/access-rights.jsx'
import {Swiper} from 'project-components'
import Topnav from '../topnav/topnav.jsx'
import './punch-cards.styl'

class PunchCards extends React.Component {
  initialSlide = () => {
    let slide
    // config.data.recent_appoinments && config.data.recent_appoinments.every((i, k) => {
    //   if (moment() < moment(i.date)) { slide = k; return false } else return true
    // })
    slide = 0
    return slide
  }
  render () {
    return (
      <div id='punch_cards'>
        <Topnav {...this.props} punch />
        <div className='swiper'>
          <div className='punch-label-wrap'><div className={'punch-label ' + (config.isRtL ? 'right' : 'left')}>{config.translations.punch}
            <span> ({config.punch_cards.length})</span></div></div>
          <div id='swiper-wrap-punch'>
            <Swiper pagination='.swiper-pagination' slidesPerView='auto' initialSlide={this.initialSlide()}>
              {config.punch_cards.map(i => <div>
                <div className='punch'>
                  <h1 className='name'>{i.procedure_name}</h1>
                  <h1 className='count'><span>{i.uses.length}</span>/{i.procedure_count}</h1>
                  <div className='date-wrap'>
                    <h1 className='date'>{i.expiration}</h1>
                    <h1 className='sum'>{i.sum}{config.data.currency}</h1>
                  </div>
                </div>
              </div>
              )}
            </Swiper>
          </div>
        </div>
        <div className='single-punch'>
          Single
        </div>
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(PunchCards)
