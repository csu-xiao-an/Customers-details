import {Swiper} from 'project-components'
import './hot-links.styl'

export default class HotLinks extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  link = i => {
    if (i.url[0] === '#') {
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
    } else if (i.url[0] === '/') {
      window.location = i.url
    }
  }
  render () {
    return (
      <div id='hot-links'>
        <Swiper slidesPerView='auto'>
          {config.data.hot_links.map(i => (
            <div key={i.label} onClick={() => this.link(i)}
              className={'link ' + (i.url[0] === '#' ? this.props.rights.hot_links.internal ? 'circle' : 'hidden'
                : i.url[0] === '/' ? this.props.rights.hot_links.external ? 'square' : 'hidden' : '')}>{i.label}</div>)
          )}
        </Swiper>
      </div>
    )
  }
}
