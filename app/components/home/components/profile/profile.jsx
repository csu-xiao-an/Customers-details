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
      address: '',
      name: '',
      editProfile: false
    }
    componentDidMount = () => {
      this.setState({address: config.data.address, name: config.data.name})
    }
    delName = () => {
      this.setState({name: ''})
    }
    delAddress = () => {
      this.setState({address: ''})
    }
    backAll = () => {
      this.setState({
        address: config.data.address,
        name: config.data.name,
        editProfile: false,
        email: config.data.email
      })
    }
    delEmail = () => {
      this.setState({email: config.data.email})
    }
    delSex = () => {
      this.setState({email: config.data.email})
    }
    render () {
      const { isVisibleFields } = this.props
      // console.log(this.state.editProfile);
      console.log(this.state.email);
      return (
        <div id='profile'>
          <div id='profile-header'>
            <h2 className='block-title'>{config.translations.profile}</h2>
            {this.state.editProfile 
              ? <div onClick={this.backAll}>Back</div>
              : <div onClick={() => this.setState({editProfile: true})}>Edit</div>}
          </div>
          <div id='name'>
            {!this.state.editProfile ? <div className='fullname'>
              <div>
                <span className='label'>{config.translations.name}:</span>
                <span className='block-content'>{this.state.name}</span>
              </div>
            </div>
              : <div className='fullname-edit'>
                <div>
                  <span className='label'>{config.translations.name}:</span>
                  <input className='edit-input' type='text' value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                </div>
                <div onClick={this.delName}>X</div>
              </div>}
          </div>
          {(this.props.isVisibleFields || config.data.phone) && <Phone editProfile={this.state.editProfile}{...this.props} />}
          {(this.props.isVisibleFields || config.data.email) && <Email editProfile={this.state.editProfile}
            delEmail={this.delEmail}
            {...this.props} />}
          {/* {(this.props.isVisibleFields || config.data.address) && */}
          {!this.state.editProfile ? <div id='address'>
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
          </div>
            : <div id='address'>
              <div className='address-wrap-edit'>
                <div>
                  <span className='label'>{config.translations.address}:</span>
                  <div className='block-content'>
                    <input className='edit-input' type='text' value={this.state.address} onChange={e => this.setState({address: e.target.value})} />
                  </div>
                </div>
                <div onClick={this.delAddress}>X</div>
              </div>
            </div>}
          {/* {!config.data.gender && <Sex {...this.props} />} */}
          {(this.props.isVisibleFields || config.data.gender) && <Sex editProfile={this.state.editProfile}{...this.props} />}
          {(this.props.isVisibleFields || (config.data.birthdate || config.data.birthyear)) && <Birthdate {...this.props} />}
          {config.data.phone && <Sendlink {...this.props} />}
          <Agreement {...this.props} />
        </div>
      )
    }
}
