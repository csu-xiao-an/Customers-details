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
  componentWillMount = () => {
    config.punch_cards && config.punch_cards.forEach(i => {
      if ((i.expiration && moment(i.expiration) > moment() && i.uses.length < i.service_count) || i.uses.length < i.service_count) i.isActive = true
    })
    this.setState(config.punch_cards && {isActivePunchCard: config.punch_cards.some(i => i.isActive)})
    config.data.hot_links = config.data.hot_links.filter(j => !j.plugin_name || config.plugins_list.includes(j.plugin_name))
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
  renderExternalLink = (url, label, img) => (
    <div>
      <Link className={'link ' + (this.props.rights.hot_links.external ? 'square' : 'hidden')} to={config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) + url : url}><img src={img} /></Link>
      <span>{label}</span>
    </div>
  )
  render () {
    return (
      <div id='hot-links'>
        <Swiper slidesPerView='auto'>
          {config.data.hot_links.map(i => {
            if (i.url[0] === '#') {
              return (
                <div>
                  <div onClick={() => this.link(i)}
                    className={'link ' + (this.props.rights.hot_links.internal ? 'circle1' : 'hidden')}>
                    <img src={i.img} />
                  </div>
                  <span>{i.label}</span>
                </div>
              )
            } else {
              if (i.url === config.urls.punch_cards) {
                return this.state.isActivePunchCard
                  ? this.renderExternalLink(i.url, i.label, i.img)
                  : this.renderExternalLink(config.urls.punch_cards_adding, config.translations.punch_cards_adding, '')
              } else {
                return this.renderExternalLink(i.url, i.label, i.img)
              }
            }
          })}
          <div>
            <div className='link add-btn'>
              <img className='add' src={config.urls.media + 'ic_add.png'} />
            </div>
            <span>{config.translations.add_hot_line}</span>
          </div>
        </Swiper>
      </div>
    )
  }
}
