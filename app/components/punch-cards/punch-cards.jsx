import SinglePunch from './components/single-punch/single-punch.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import {Swiper} from 'project-components'
import Topnav from '../topnav/topnav.jsx'
import './punch-cards.styl'

class PunchCards extends React.Component {
  state = {
    punch: {}
  }
  componentWillMount = () => {
    config.punch_cards.forEach(i => {
      if ((i.expiration && moment(i.expiration) > moment() && i.uses.length < i.procedure_count) || i.uses.length < i.procedure_count) i.isActive = true
      else i.isActive = false
    })
    config.punch_cards.sort((a, b) => a.id - b.id).sort((a, b) => a.isActive - b.isActive)
    config.punch_cards.every(i => {
      if (i.isActive) { this.setState({punch: i}); return false } else return true
    })
  }
  initialSlide = () => {
    let slide
    config.punch_cards.every((i, k) => {
      if (i.isActive) { slide = k; return false } else return true
    })
    return slide
  }
  update = () => this.forceUpdate()
  render () {
    return (
      <div id='punch_cards'>
        <Topnav {...this.props} punch />
        <div className='swiper'>
          <div className='punch-label-wrap'><div className={'punch-label ' + (config.isRtL ? 'right' : 'left')}>{config.translations.punch}
            <span> ({config.punch_cards.length})</span></div></div>
          <div id='swiper-wrap-punch'>
            <Swiper pagination='.swiper-pagination' slidesPerView='auto' initialSlide={this.initialSlide()} centeredSlides observer>
              {config.punch_cards.map(i => <div>
                <div className='punch' style={!i.isActive ? {backgroundColor: 'lightgray'} : {}} onClick={() => this.setState({punch: i})}>
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
        <SinglePunch i={this.state.punch} update={this.update} />
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(PunchCards)
