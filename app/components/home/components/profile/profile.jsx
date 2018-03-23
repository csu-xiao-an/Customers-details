import './profile.styl'
import Phone from '../phone/phone.jsx'
import Adress from '../adress/adress.jsx'
import Sex from '../sex/sex.jsx'
import Details from '../details/details.jsx'
import Agreement from '../agreement/agreement.jsx'
const {Link} = ReactRouterDOM

export default class Profile extends React.Component {
  render () {
    return (
      <div id='profile'>
        <div className='block'>
          <h2 className='block-title'>{config.translations.profile}</h2>
        </div>
        <div className='block'>
            <div className='fullname'>
              <span className='label'>{config.translations.name}:</span>
              <span className='block-content'>{config.data.name}</span>
            </div>
        </div>
        <div className='block'>
            <div className='phone'>
                <span className='label'>{config.translations.phone}:</span>
                <div className='block-content'><Phone {...this.props} /></div>
            </div>
            <div className='phone-img'>
                {this.props.rights.phone.send_sms &&
                <div className='img-wrap'><a href={`/send-sms?client_id=${config.data.id}&referrer=${location.pathname + '?' + location.search}`}>
                    <img src={config.urls.media + 'send-sms.svg'} /></a></div>}
                {this.props.rights.phone.call &&
                <div className='img-wrap'><a href={'tel:' + config.data.phone}><img src={config.urls.media + 'call.svg'} /></a></div>}
            </div>
        </div>
        <div className='block'>
            <div className='email'>
                <span className='label'>{config.translations.email}:</span>
                <div className='block-content'>
                    <div className='text'>{config.data.email}</div>
                </div>
            </div>
            <img src='./dist/media/ic_email.svg' />
        </div>
        {config.data.adress &&
        <div className='block'>
            <div className='address'>
                <span className='label'>{config.translations.adress}:</span>
                <div className='block-content'>
                    <div className='text'>{config.data.adress}</div>
                </div>
            </div>
            <img src='./dist/media/ic_location.svg' />
        </div>}
        {config.data.gender &&
          <div className='block'>
              <div className='gender'>
                  <span className='label'>{config.translations.gender}:</span>
                  <span className='block-content'>{config.data.gender}</span>
              </div>
          </div>
          }
          {config.data.birthdate &&
          <div className='block'>
              <div className='birthday'>
                  <span className='label'>{config.translations.birthday}:</span>
                  <span className='block-content'>{moment(config.data.birthdate).format('DD.MM.Y')}</span>
              </div>
          </div>
          }{config.data.birthdate &&
          <div className='block'>
              <div className='completion'>
                  <span className='label'>{config.translations.request_to_detail}</span>
                  <div className='block-content'><Details {...this.props} /></div>
              </div>
          </div>
          }
          <div className='block'>
              <div className='agreement'>
                  <span className='label'>{config.translations.agreement}:</span>
              </div>
              <Agreement {...this.props} />
          </div>
      </div>
    )
  }
}
