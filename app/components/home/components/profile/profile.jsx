import './profile.styl'
import Phone from '../phone/phone.jsx'
import Adress from '../adress/adress.jsx'
import Sex from '../sex/sex.jsx'
import Details from '../details/details.jsx'
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
      this.setState({address: config.data.adress})
    }
    render () {
      const { isVisibleFields } = this.props
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
          {(this.props.isVisibleFields || config.data.phone) && <Phone {...this.props} />}
          {(this.props.isVisibleFields || config.data.email) && <Email {...this.props} />}
          {(this.props.isVisibleFields || config.data.adress) &&
          (<div className='block'>
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
          </div>)}
          {/* {!config.data.gender && <Sex {...this.props} />} */}
          {(this.props.isVisibleFields || config.data.gender) && <Sex {...this.props} />}
          {(this.props.isVisibleFields || (config.data.birthdate || config.data.birthyear)) && <Birthdate {...this.props} />}
          {config.data.birthdate && <Details {...this.props} />}
          <Agreement {...this.props} />
        </div>
      )
    }
}
