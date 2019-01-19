import SinglePunch from './components/single-punch/single-punch.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import { getPunchCardsList } from 'project-services'
import { Swiper } from 'project-components'
import Topnav from '../topnav/topnav.jsx'
import './punch-cards.styl'

class PunchCards extends React.Component {
  state = {
    punchsList: [],
    punch: {}
  }
  componentWillMount = () => {
    getPunchCardsList().then(punchsList => {
      punchsList.sort((a, b) => a.id - b.id).sort((a, b) => !!a.isActive - !!b.isActive)
      this.setState({punch: punchsList.find(i => i.isActive) || punchsList[0] || {}, punchsList})
    })
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }
  componentDidUpdate (prevProps, prevState) {
    const { punchsList } = this.state
    if (prevState.punchsList.length && punchsList.length !== prevState.punchsList.length) {
      punchsList.length && this.setState({ punch: punchsList[punchsList.length - 1] })
    }
  }
  updatePunchList = punchsList => this.setState({ punchsList })
  updateSingle = () => {
    const punch = this.state.punchsList.reduce((active, item) => item.isActive ? item : active, null) || this.state.punchsList[0] || {}
    this.setState({ punch })
  }
  update = () => this.forceUpdate()
  renderSlider = () => {
    return (
      <div id='swiper-wrap-punch'>
        <Swiper
          initialSlide={this.state.punchsList.findIndex(i => i.isActive)}
          ref='swiper' pagination='.swiper-pagination'
          slidesPerView='auto' centeredSlides observer>
          {this.state.punchsList.map(i => (
            <div>
              <div className='punch' style={i.uses && i.uses.length === i.service_count ? {backgroundColor: 'lightgray'} : {backgroundColor: 'white'}} onClick={() => this.setState({punch: i})}>
                <h1 className='name'>{i.service_name}</h1>
                <h1 className='count'><span>{i.uses && i.uses.length}</span>/{i.service_count}</h1>
                <h1 className={'sum ' + (config.isRTL ? 'left' : 'right')}>{i.sum}{config.data.currency}</h1>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    )
  }
  render () {
    return (
      <div id='punch_cards'>
        <Topnav {...this.props} punch />
        <div className='swiper'>
          <div className='punch-label-wrap'>
            <div className={'punch-label ' + (config.isRTL ? 'right' : 'left')}>
              {config.translations.punch}<span> ({this.state.punchsList.length})</span>
            </div>
          </div>
          {this.state.punchsList.length > 0 && this.renderSlider()}
        </div>
        <SinglePunch i={this.state.punch} update={this.update} updateSingle={this.updateSingle} updatePunchList={this.updatePunchList} punch_cards={this.state.punchsList} />
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(PunchCards)
