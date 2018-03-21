import { Swiper } from 'project-components'
import './hot-links.styl'
const {Link} = ReactRouterDOM

export default class HotLinks extends React.Component {
  state = {
    isActivePunchCard: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  link = i => {
    const getOffsetSum = () => {
      let e = document.getElementById(i.url.replace('#', ''))
      let top = 0
      while (e) {
        top = top + parseFloat(e.offsetTop)
        e = e.offsetParent
      }
      return Math.round(top)
    }
    const top = getOffsetSum()
    const interval = setInterval(() => {
      let scroll = window.scrollY
      let diff = top - scroll
      if (diff < 5) window.scrollBy(0, diff)
      if (scroll < top) window.scrollBy(0, 5)
      else clearInterval(interval)
    }, 3)
  }
  componentWillMount = () => {
    config.punch_cards.forEach(i => {
      if ((i.expiration && moment(i.expiration) > moment() && i.uses.length < i.service_count) || i.uses.length < i.service_count) i.isActive = true
    })
    this.setState({isActivePunchCard: config.punch_cards.some(i => i.isActive)})
  }
  render () {
    return (
      <div id='hot-links'>
        <Swiper slidesPerView='auto'>
          {config.data.hot_links.map(i => {
            const link = (url, label) =>
              <div className={'link ' + (this.props.rights.hot_links.external ? 'square' : 'hidden')}><Link to={url}><img src={label} /></Link></div>
            if (i.url[0] === '#') {
              return <div onClick={() => this.link(i)} className={'link ' + (this.props.rights.hot_links.internal ? 'square' : 'hidden')}><img src={i.label} /></div>
            } else {
              if (i.url === config.urls.punch_cards) {
                return !this.state.isActivePunchCard ? link(config.urls.punch_cards_adding, config.translations.punch_cards_adding) : link(i.url, i.label)
              } else return link(i.url, i.label)
            }
          })}
        </Swiper>
      </div>
    )
  }
}
