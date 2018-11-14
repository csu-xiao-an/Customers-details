import './profile.styl'
import Phone from '../phone/phone.jsx'
// import Adress from '../adress/adress.jsx'
import Sex from '../sex/sex.jsx'
import Sendlink from '../sendlink/sendlink.jsx'
import Email from '../email/email.jsx'
import Agreement from '../agreement/agreement.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
const {Link} = ReactRouterDOM

export default class Profile extends React.Component {
    state = {
      visibleMapPopup: false,
      address: ''
    }
    componentDidMount = () => {
      this.setState({address: config.data.address})
    }
    render () {
      const { isVisibleFields } = this.props
      return (
        <div id='profile'>
          <div id='profile-header'>
            <h2 className='block-title'>{config.translations.profile}</h2>
          </div>
          <div id='name'>
            <div className='fullname'>
              <span className='label'>{config.translations.name}:</span>
              <span className='block-content'>{config.data.name}</span>
            </div>
          </div>
          {(this.props.isVisibleFields || config.data.phone) && <Phone {...this.props} />}
          {(this.props.isVisibleFields || config.data.email) && <Email {...this.props} />}
          {(this.props.isVisibleFields || config.data.address) &&
          (<div id='address'>
            <div className='address-wrap'>
              <span className='label'>{config.translations.address}:</span>
              <div className='block-content'>
                <div className='text'>{this.state.address}</div>
              </div>
            </div>
            <div className='images'>
              <div className='img-wrap'>
                <a href={config.urls.waze.replace('{address}', config.data.address)}>
                  <img
                    // onClick={() => this.setState({visibleMapPopup: true})}
                    src={config.urls.media + 'waze.png'}
                  />
                </a>
              </div>
              <div className='img-wrap'>
                <a href={config.urls.google_maps.replace('{address}', config.data.address)}>
                  <img
                    // onClick={() => this.setState({visibleMapPopup: true})}
                    src={config.urls.media + 'icon-adress.png'}
                  />
                </a>
              </div>
            </div>
            {/* <Adress {...this.props}
              show={this.state.visibleMapPopup}
              parent={this}
            /> */}
          </div>)}
          {/* {!config.data.gender && <Sex {...this.props} />} */}
          {(this.props.isVisibleFields || config.data.gender) && <Sex {...this.props} />}
          {(this.props.isVisibleFields || (config.data.birthdate || config.data.birthyear)) && <Birthdate {...this.props} />}
          {config.data.phone && <Sendlink {...this.props} />}
          <Agreement {...this.props} />
        </div>
      )
    }
}
