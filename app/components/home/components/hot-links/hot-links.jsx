import './hot-links.styl'
const { Link } = ReactRouterDOM

export default class HotLinks extends React.Component {
  state = {
    isActivePunchCard: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => {
    config.data.punch_cards && config.data.punch_cards.forEach(i => {
      if ((i.expiration && moment(i.expiration) > moment() && i.uses.length < i.service_count) || i.uses.length < i.service_count) i.isActive = true
    })
    this.setState(config.data.punch_cards && { isActivePunchCard: config.data.punch_cards.some(i => i.isActive) })
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
    let e = document.getElementById(i.url.replace('#', ''))
    let scroll = e.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  renderExternalLink = (url, name, img) => (
    <div className='link-wrap'>
      <Link className={'link ' + (this.props.rights.hot_links.external ? 'square' : 'hidden')} to={config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) + url : url}><img src={img} /></Link>
      <span>{name}</span>
    </div>
  )
  render () {
    return (
      <div id='hot-links'>
        {config.data.hot_links.map(i => {
          if (i.url[0] === '#') {
            return (
              <div className='link-wrap'>
                <div onClick={() => this.link(i)}
                  className={'link ' + (this.props.rights.hot_links.internal ? 'circle1' : 'hidden')}>
                  <img src={i.img} />
                </div>
                <span>{config.translations.hot_links[i.name]}</span>
              </div>
            )
          } else {
            if (i.url === config.urls.punch_cards) {
              return this.state.isActivePunchCard
                ? this.renderExternalLink(i.url, config.translations.hot_links[i.name], i.img)
                : this.renderExternalLink(config.urls.punch_cards_adding, config.translations.punch_cards_adding, '')
            } else {
              return this.renderExternalLink(i.url, config.translations.hot_links[i.name], i.img)
            }
          }
        })}
        {/* <div>
          <div className='link add-btn'>
            <img className='add' src={config.urls.media + 'ic_add.png'} />
          </div>
          <span>{config.translations.add_hot_line}</span>
        </div> */}
      </div>
    )
  }
}
