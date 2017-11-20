import {Swiper} from 'project-components'
import './hot-links.styl'

export default class HotLinks extends React.Component {
  link = i => {
    // const getOffsetSum = elem => {
    //   var top = 0, left = 0
    //   while(elem) {
    //     top = top + parseFloat(elem.offsetTop)
    //     left = left + parseFloat(elem.offsetLeft)
    //     elem = elem.offsetParent
    //   }
    //   return {top: Math.round(top), left: Math.round(left)}
    // }
    if (i.url[0] === '#') {
      window.location.hash = i.url
      // let top = getOffsetSum(document.getElementById(i.url.replace('#', '')))
      // const scrollToTop = () => {
      //   // let scrollStep = -window.scrollY / (1000 / 15)
      //   console.log(window.scrollY)
      //   console.log(top)
      //   let scrollInterval = setInterval(() => {
      //     if (window.scrollY !== top) {
      //       window.scrollBy(top, 15)
      //     } else clearInterval(scrollInterval)
      //   }, 15)
      // }
      // scrollToTop()
      // let an = document.getElementsByTagName('body')[0].animate({scrollTop: top}, 1500)
      // console.log(an)
    } else if (i.url[0] === '/') {
      window.location = i.url
    }
  }
  render () {
    return (
      <div id='hot-links'>
        <Swiper slidesPerView='auto' spaceBetween={26} slidesOffsetBefore={13} slidesOffsetAfter={13}>
          {config.data.hot_links.map(i => (
            <div key={i.label} onClick={() => this.link(i)} className={'link ' + (i.url[0] === '#' ? 'circle' : i.url[0] === '/' ? 'square' : '')}>{i.label}</div>)
          )}
        </Swiper>
      </div>
    )
  }
}
