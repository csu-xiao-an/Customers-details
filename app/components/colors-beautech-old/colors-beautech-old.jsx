import AccessRights from '../access-rights/access-rights.jsx'
import { Swiper } from 'project-components'
import Topnav from '../topnav/topnav.jsx'
import './colors-beautech-old.styl'

class ColorsBeautechOld extends React.Component {
  render () {
    return (
      <div id='punch_cards_old'>
        <Topnav {...this.props} color />
        <div className='header'>
          <img className='fill-color' src={`${config.urls.media}icons-8-fill-color.png`} />
          <h2>{config.translations.colors_beautech_old.colors}</h2>
          <img className='barber' src={`${config.urls.media}parikmakheri-stilisti.png`} />
        </div>
        <div className='swiper'>
          <div id='swiper-wrap-punch'>
            <Swiper slidesPerView='auto' centeredSlides observer initialSlide={config.data.colors_beautech_old.length - 1}>
              {config.data.colors_beautech_old.map(i => <div>
                <div className='main'>
                  <p className='main-title'><span>{config.translations.colors_beautech_old.brand}</span><span className='value'>{i.company}</span></p>
                  <p className='main-title'><span>{config.translations.colors_beautech_old.series}</span><span className='value'>{i.series}</span></p>
                  {i.colors.map(element => <div className='colors'>
                    <div className='colors-item'>
                      <img src={`${config.urls.media}icons-8-fill-color.png`} />
                      <div className='colors-info'>
                        <p className='main-title'><span>{config.translations.colors_beautech_old.color}</span><span className='value'>{element.color}</span></p>
                        <p className='main-title'><span>{config.translations.colors_beautech_old.quantity}</span><span className='value'>{element.dosing}</span></p>
                      </div>
                    </div>
                    {element.comments && <p className='main-title color-comments'><span>{config.translations.colors_beautech_old.comments}</span><span className='value'>{element.comments}</span></p>}
                  </div>
                  )}
                </div>
                <div className='oxy'>
                  <div className='oxy-header'>
                    <img src={`${config.urls.media}icons-8-fill-color.png`} />
                    <h2>{config.translations.colors_beautech_old.oxygen}</h2>
                  </div>
                  <div className='oxy-body'>
                    {i.oxy.map(element => <div className='oxy-info'>
                      <div className='oxy-item'>
                        <img src={`${config.urls.media}percent.svg`} />
                        <div className='concentration'>
                          <p className='main-title'><span>{config.translations.colors_beautech_old.concentration}</span><span className='value'>{element.percent}</span></p>
                          {element.dosing && <p className='main-title'><span>{config.translations.colors_beautech_old.quantity}</span><span className='value'>{element.dosing}</span></p>}
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
                      <p className='main-title'><span>{config.translations.colors_beautech_old.comments}</span><span className='value'>{i.comments}</span></p>
                    </div>
                  </div>
                  <div className='common-item'>
                    <div className='common-img'>
                      <img src={`${config.urls.media}time-left.png`} />
                    </div>
                    <div>
                      <p className='main-title'><span>{config.translations.colors_beautech_old.waiting_time}</span><span className='value'>{i.waiting_time}</span></p>
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
