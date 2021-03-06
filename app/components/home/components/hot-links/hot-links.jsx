import './hot-links.styl'
import chalk from 'chalk';
const { Link } = ReactRouterDOM

export default class HotLinks extends React.Component {
  state = {
    isActivePunchCard: false
  }

  static propTypes = {
    rights: PropTypes.object.isRequired,
    recentAppointmentsData: PropTypes.array.isRequired,
    debts: PropTypes.array.isRequired,
    notes: PropTypes.array.isRequired,
    addingFirstItem: PropTypes.func.isRequired,
    createFirstNote: PropTypes.func.isRequired,
    createFirstDebt: PropTypes.func.isRequired
  }

  componentDidMount = () => {
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

  showAndMovetoNotes = () => {
    this.props.createFirstNote()

    setTimeout(() => {
      this.link({url: '#notes'})
    }, 10)
  }
  showAndMovetoDebt = () => {
    this.props.createFirstDebt()
    setTimeout(() => {
      this.link({url: '#debts'})
    }, 10)
  }
  showAndMovetoGallery = () => {
    this.props.addingFirstItem()
    setTimeout(() => {
      this.link({url: '#gallery'})
      let input = document.getElementById('file-input')
      input.click()
    }, 10)
  }
  addFirstAppointment = titles => (
    <a className='link-add block-link'
      href={this.props.rights.events.cr_app
        ? `${config.urls.main}${config.urls.appointment}?client_id=${config.data.id}&worker_id=${config.user.worker_id}`
        : false}>
      <div className='circle-wrap'>
        <img src={`${config.urls.media}plus-white.svg`} />
      </div>
      <span className='link-name'>{titles}</span>
    </a>
  )
  renderExternalLink = (url, name, img) => (
    <div className='link-wrap'>
      <Link className={'link ' + (this.props.rights.hot_links.external ? 'square' : 'hidden')} to={config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) + url : url}><img src={img} /></Link>
      <span>{name}</span>
    </div>
  )
  renderAddLink = () => (
    <div className='link-add'>
      <Link className='circle-wrap' to={config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) + config.urls.punch_cards_adding : config.urls.punch_cards_adding}><img src={`${config.urls.media}plus-white.svg`} /></Link>
      <span className='link-name'>{config.translations.hot_links.add_first_punch_card}</span>
    </div>
  )
  firstAddLink = (click, titles) => (
    <div className='link-add' onClick={click}>
      <div className='circle-wrap'>
        <img src={`${config.urls.media}plus-white.svg`} />
      </div>
      <span className='link-name'>{titles}</span>
    </div>
  )

  render () {
    const hotLinks = config.data.hot_links.filter(i => {
      if (i.name === 'notes') return i
      else if (i.name === 'debts') return i
      else if (i.name === 'gallery') return i
      else if (i.name === 'appointments' && this.props.recentAppointmentsData.length === 0) return i
      else if (i.url[0] !== '#' && (config.data[i.name] && config.data[i.name].length !== 0)) return i
      else if (i.name === 'punch_cards' && (config.urls.punch_cards && config.data.punch_cards.length === 0)) return i
      else if (i.name === 'timeline') return i
    })
    return (
      <div id='hot-links'>
        {hotLinks.map(i => {
          if (i.url[0] === '#' && this.props[i.name].length !== 0) {
            return (
              <div className='link-wrap'>
                <div onClick={() => this.link(i)}
                  className={'link ' + (this.props.rights.hot_links.internal ? 'circle1' : 'hidden')}>
                  <img src={i.img} />
                </div>
                <span>{config.translations.hot_links[i.name]}</span>
              </div>
            )
          } else if (i.name === 'appointments') {
            return this.addFirstAppointment(config.translations.hot_links.add_first_event)
          } else if (i.name === 'debts' && this.props.debts.length === 0) {
            return this.firstAddLink(this.showAndMovetoDebt, config.translations.hot_links.add_first_debt)
          } else if (i.name === 'notes' && this.props.notes.length === 0) {
            return this.firstAddLink(this.showAndMovetoNotes, config.translations.hot_links.add_first_note)
          } else if (i.name === 'gallery' && this.props.gallery.length === 0) {
            return this.firstAddLink(this.showAndMovetoGallery, config.translations.hot_links.add_first_item_gallery)
          } else {
            if (i.url === config.urls.punch_cards) {
              return config.data.punch_cards.length > 0
                ? this.renderExternalLink(i.url, config.translations.hot_links[i.name], i.img)
                : this.renderAddLink()
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
