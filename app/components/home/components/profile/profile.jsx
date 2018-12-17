import './profile.styl'
import Phone from '../phone/phone.jsx'
// import Adress from '../adress/adress.jsx'
import Sex from '../sex/sex.jsx'
import Sendlink from '../sendlink/sendlink.jsx'
import Email from '../email/email.jsx'
import Agreement from '../agreement/agreement.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import {clientReplaceService} from 'project-services'
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
getPhone = value => {
  this.setState({ phone: value })
}
getEmail = value => {
  this.setState({ email: value })
}
getGender = value => {
  this.setState({ gender: value })
}
getBdate = value => {
  this.setState({ birthdate: value })
}
getByear = value => {
  this.setState({ birthyear: value })
}
getArgeement = value => {
  this.setState({ agreement: value })
}
check = () => {
  config.data[config.urls.fields.address] = this.state.inputValue
}
saveAll = () => {
  const fields = ['name', 'address', 'gender', 'email', 'phone', 'birthdate', 'birthyear', 'agreement']
  const body = Object.keys(this.state).reduce((params, field) => {
    if (fields.includes(field) && this.state[field] && this.state[field] !== config.data[field]) {
      const value = `${this.state[field]}`
      const result = `${field}=${value}`
      return params + (params.length ? `&${result}` : result)
    }
    return params
  }, '')
  body && clientReplaceService(body).then(r => {
    if (r.status === 204) {
      config.data.birthdate = this.state.birthdate
      config.data.birthyear = this.state.birthyear
      config.data.phone = this.state.phone
      config.data.address = this.state.address
      config.data.gender = this.state.gender
      config.data.email = this.state.email
      config.data.name = this.state.name
    }
  })
  this.setState({ editProfile: false })
}
render () {
  const { isVisibleFields } = this.props
  return (
    <div id='profile'>
      <div id='profile-header'>
        <h2 className='block-title'>{config.translations.profile}</h2>
        {this.state.editProfile 
          ? <div className='back-save-btn'>
            <div className='back-btn' onClick={this.backAll}>Back</div>
            <div className='save-btn' onClick={this.saveAll}>Save</div>
          </div>
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
            <div className='del-wrap' onClick={this.delName}>
              <img src={config.urls.media + 'plus2.svg'} />
            </div>
          </div>}
      </div>
      {(this.props.isVisibleFields || config.data.phone) &&
        <Phone editProfile={this.state.editProfile} 
          getPhone={this.getPhone}
          {...this.props} />}
      {(this.props.isVisibleFields || config.data.email) &&
        <Email editProfile={this.state.editProfile}
          delEmail={this.delEmail}
          getEmail={this.getEmail}
          {...this.props} />}
      {/* {(this.props.isVisibleFields || config.data.address) && */}
      {!this.state.editProfile ? <div id='address'>
        <div className='address-wrap'>
          <span className='label'>{config.translations.address}:</span>
          <div className='block-content'>
            <div className='text'>{config.data.address}</div>
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
            <div className='del-wrap' onClick={this.delAddress}>
              <img src={config.urls.media + 'plus2.svg'} />
            </div>
          </div>
        </div>}
      {/* {!config.data.gender && <Sex {...this.props} />} */}
      {(this.props.isVisibleFields || config.data.gender) && <Sex editProfile={this.state.editProfile}getGender={this.getGender}{...this.props} />}
      {(this.props.isVisibleFields || (config.data.birthdate || config.data.birthyear)) &&
        <Birthdate editProfile={this.state.editProfile}getBdate={this.getBdate}getByear={this.getByear}{...this.props} />}
      {config.data.phone && <Sendlink {...this.props} />}
      <Agreement editProfile={this.state.editProfile}getArgeement={this.getArgeement}{...this.props} />
    </div>
  )
}
}
