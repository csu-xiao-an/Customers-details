import './profile.styl'
import Phone from '../phone/phone.jsx'
import Adress from '../adress/adress.jsx'
import Sex from '../sex/sex.jsx'
import Details from '../details/details.jsx'
import Agreement from '../agreement/agreement.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
const {Link} = ReactRouterDOM

export default class Profile extends React.Component {
    state = {
      visibleMapPopup: false,
      address: ''
    }
    componentDidMount = () => {
      this.setState({address: config.data.adress})
    }
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
          {
            config.data.email && (
              <div className='block'>
                <div className='email'>
                  <span className='label'>{config.translations.email}:</span>
                  <div className='block-content'>
                    <div className='text'>{config.data.email}</div>
                  </div>
                </div>
                <a className='linkto' href={'mailto:' + config.data.email}><img src={config.urls.media + 'ic_email.svg'} /></a>
              </div>
            )
          }
          {config.data.adress &&
          <div className='block'>
            <div className='address'>
              <span className='label'>{config.translations.adress}:</span>
              <div className='block-content'>
                <div className='text'>{this.state.address}</div>
              </div>
            </div>
            <img onClick={() => this.setState({visibleMapPopup: true})}
              src={config.urls.media + 'ic_location.svg'}
            />
            <Adress {...this.props}
              show={this.state.visibleMapPopup}
              parent={this}
            />
          </div>}
          {config.data.gender && <Sex {...this.props} />}
          {(config.data.birthdate || config.data.birthyear) && <Birthdate {...this.props} />}
          {config.data.birthdate && <Details {...this.props} />}
          <Agreement {...this.props} />
        </div>
      )
    }
}
