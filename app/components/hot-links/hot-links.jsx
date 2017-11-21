import {Swiper} from 'project-components'
import './hot-links.styl'

export default class HotLinks extends React.Component {
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
            <div key={i.label} onClick={() => this.link(i)} className={'link ' + (i.url[0] === '#' ? 'circle' : i.url[0] === '/' ? 'square' : '')}>{i.label}</div>)
          )}
        </Swiper>
      </div>
    )
  }
}
