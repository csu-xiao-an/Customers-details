import AccessRights from '../access-rights/access-rights.jsx'
import { Swiper } from 'project-components'
import './colors-beautech-old.styl'

class ColorsBeautechOld extends React.Component {
  state = {
    ind: 0
  }
  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }
  chengeDate = e => this.setState({ ind: e.activeIndex })
  render () {
    const { ind } = this.state
    const translations = config.translations.colors_beautech_old
    const beautech = config.data.colors_beautech_old.sort((a, b) => moment(a.date) - moment(b.date))
    return (
      <div id='punch_cards_old'>
        <div className='btn-wrap'>
          <div className={`btn ${this.state.ind === 0 ? 'ban' : ''}`} onClick={this.goPrev}><img src={`${config.urls.media}chevron-left.svg`} /></div>
          <div className='middle-section'>
            <p className='middle-type'>{beautech[ind].type}</p>
            <p className='middle-date'>{`${translations.date} ${moment(beautech[ind].date).format('DD/MM/YY')}`}</p>
          </div>
          <div className={`btn ${this.state.ind === beautech.length - 1 ? 'ban' : ''}`} onClick={this.goNext}><img src={`${config.urls.media}chevron-right.svg`} /></div>
        </div>
        <div className='highlights'>
          <img className='fill-color' src={`${config.urls.media}icons-8-fill-color.png`} />
          <h2>{translations.colors}</h2>
          <img className='barber' src={`${config.urls.media}parikmakheri-stilisti.png`} />
        </div>
        <div className='swiper'>
          <div id='swiper-wrap-punch'>
            <Swiper onSlideChangeEnd={this.chengeDate} ref={node => { if (node) this.swiper = node.swiper }} slidesPerView='auto' centeredSlides observer initialSlide={beautech.length - 1}>
              {beautech.map(i => <div>
                <div className='main'>
                  <p className='main-title'><span>{translations.brand}</span><span className='value'>{i.company}</span></p>
                  <p className='main-title'><span>{translations.series}</span><span className='value'>{i.series}</span></p>
                  {i.colors.map(element => <div className='colors'>
                    <div className='colors-item'>
                      <img src={`${config.urls.media}icons-8-fill-color.png`} />
                      <div className='colors-info'>
                        <p className='main-title'><span>{translations.color}</span><span className='value'>{element.color}</span></p>
                        <p className='main-title'><span>{translations.quantity}</span><span className='value'>{element.dosing}</span></p>
                      </div>
                    </div>
                    {element.comments && <p className='main-title color-comments'><span>{translations.comments}</span><span className='value'>{element.comments}</span></p>}
                  </div>
                  )}
                </div>
                <div className='oxy'>
                  <div className='oxy-header'>
                    <img src={`${config.urls.media}icons-8-fill-color.png`} />
                    <h2>{translations.oxygen}</h2>
                  </div>
                  <div className='oxy-body'>
                    {i.oxy.map(element => <div className='oxy-info'>
                      <div className='oxy-item'>
                        <img src={`${config.urls.media}percent.svg`} />
                        <div className='concentration'>
                          <p className='main-title'><span>{translations.concentration}</span><span className='value'>{element.percent}</span></p>
                          {element.dosing && <p className='main-title'><span>{translations.quantity}</span><span className='value'>{element.dosing}</span></p>}
                        </div>
                      </div>
                    </div>)}
                  </div>
                </div>
                <div className='common'>
                  <div className='common-item'>
                    <div className='common-img'>
                      <img src={`${config.urls.media}feather.svg`} />
                    </div>
                    <div>
                      <p className='main-title'><span>{translations.comments}</span><span className='value'>{i.comments}</span></p>
                    </div>
                  </div>
                  <div className='common-item'>
                    <div className='common-img'>
                      <img src={`${config.urls.media}time-left.png`} />
                    </div>
                    <div>
                      <p className='main-title'><span>{translations.waiting_time}</span><span className='value'>{i.waiting_time}</span></p>
                    </div>
                  </div>
                </div>
              </div>)}
            </Swiper>
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(ColorsBeautechOld)