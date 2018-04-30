import SinglePunch from './components/single-punch/single-punch.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import {Swiper} from 'project-components'
import { getPunchCardsList } from 'project-services'
import Topnav from '../topnav/topnav.jsx'
import './punch-cards.styl'

class PunchCards extends React.Component {
  state = {
    initialSlide: 0,
    punchs_list: [],
    punch: {}
  }
  componentWillUpdate = () => {
    this.refs.swiper.swiper.slideTo(this.state.initialSlide, 1)
    console.log(this.state.initialSlide)
  }
  componentWillMount = () => {
    getPunchCardsList().then(r => r.json().then(r => {
      r.forEach(i => {
        i && i.uses && i.uses.length < i.service_count
          ? i.expiration ? moment(i.expiration) > moment() ? i.isActive = true : i.isActive = false : i.isActive = true
          : i.isActive = false
      })
      r.sort((a, b) => a.id - b.id).sort((a, b) => a.isActive - b.isActive)
      r.every((i, k) => {
        if (i.isActive) { this.setState({initialSlide: k}); return false } else return true
      })
      r.every(i => {
        if (i.isActive) { this.setState({punch: i}); return false } else return true
      })
      if (!this.state.punch.id) this.setState({punch: r[0]})
      this.setState({punchs_list: r})
    }))
    if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }
  initialSlide = () => {
    const a = this.state.punchs_list
    let slide
    a.every((i, k) => {
      if (i.isActive) { slide = k; return false } else return true
    })
    console.log(slide)
    return slide
  }
  updateSingle = () => {
    if (this.state.punch_list.every(i => {
      if (i.isActive) { this.setState({punch: i}); return false } else return true
    })) this.setState({punch: this.state.punch_list[0]})
  }
  update = () => this.forceUpdate()
  render () {
    console.log('punch_list:', this.state.punchs_list)
    console.log('punch:', this.state.punch)
    console.log('punch:', this.state.initialSlide)
    return (
      <div id='punch_cards'>
        <Topnav {...this.props} punch />
        <div className='swiper'>
          <div className='punch-label-wrap'><div className={'punch-label ' + (config.isRtL ? 'right' : 'left')}>
            {config.translations.punch}<span> ({this.state.punchs_list.length})</span></div></div>
          <div id='swiper-wrap-punch'>
            <Swiper ref='swiper' pagination='.swiper-pagination' slidesPerView='auto' initialSlide={this.state.initialSlide} centeredSlides observer>
              {this.state.punchs_list.map(i => <div>
                <div className='punch' style={!i.isActive ? {backgroundColor: 'lightgray'} : {}} onClick={() => this.setState({punch: i})}>
                  <h1 className='name'>{i.service_name}</h1><h1 className='count'><span>{i.uses && i.uses.length}</span>/{i.service_count}</h1>
                  <h1 className={'sum ' + (config.isRtL ? 'left' : 'right')}>{i.sum}{config.data.currency}</h1></div></div>)}</Swiper></div>
        </div>
        <SinglePunch i={this.state.punch} update={this.update} updateSingle={this.updateSingle} />
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(PunchCards)
