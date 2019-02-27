import './profile.styl'
import Phone from '../phone/phone.jsx'
// import Address from '../address/address.jsx'
import Sex from '../sex/sex.jsx'
import Sendlink from '../sendlink/sendlink.jsx'
import Email from '../email/email.jsx'
import Agreement from '../agreement/agreement.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import {clientPutService} from 'project-services'
const {Link} = ReactRouterDOM

export default class Profile extends React.Component {
state = {
  visibleMapPopup: false,
  address: '',
  name: '',
  editProfile: false,
  permit_ads: '',
  birthEdit: false
}
componentDidMount = () => {
  this.setState({
    address: config.data.address,
    name: config.data.name,
    phone: config.data.phone,
    email: config.data.email,
    gender: config.data.gender
  })
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
    phone: config.data.phone,
    email: config.data.email,
    gender: config.data.gender,
    // birthdate: config.data.birthdate,
    // birthyear: config.data.birthyear,
    permit_ads: config.data.permit_ads,
    editProfile: false
  })
}
delEmail = () => {
  this.setState({email: config.data.email})
}
delSex = () => {
  this.setState({gender: config.data.gender})
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
  this.setState({ permit_ads: value })
}
// check = () => {
//   config.data[config.urls.fields.address] = this.state.inputValue
// }
saveAll = () => {
  const fields = ['name', 'address', 'gender', 'email', 'phone', 'birthdate', 'birthyear', 'permit_ads']
  const body = Object.keys(this.state).reduce((params, field) => {
    if (fields.includes(field) && this.state[field]) {
      const value = `${this.state[field]}`
      const result = `${field}=${value}`
      return params + (params.length ? `&${result}` : result)
    }
    return params
  }, '')
  body && clientPutService(body).then(r => {
    if (r.status === 204) {
      config.data.birthdate = this.state.birthdate
      config.data.birthyear = this.state.birthyear
      config.data.phone && (config.data.phone = this.state.phone)
      config.data.address && (config.data.address = this.state.address)
      config.data.email && (config.data.email = this.state.email)
      config.data.name && (config.data.name = this.state.name)
      config.data.gender && (config.data.gender = this.state.gender)
      config.data.permit_ads && (config.data.permit_ads = this.state.permit_ads)
      this.setState({ editProfile: false }, () => this.changeBirth())
      this.changeDays()
      this.forceUpdate()
    } else {
      this.setState({ editProfile: true })
    }
  })
}
changeDays = () => this.setState({newDays: config.data.birthdate && config.data.birthyear
  ? `${config.data.birthyear}-${config.data.birthdate}`
  : ((!!config.data.birthyear) ? (`${config.data.birthyear}${!!config.data.birthdate ? config.data.birthdate : ''}`)
    : `${moment().format('YYYY')}-${!!config.data.birthdate ? config.data.birthdate : moment().format('MM-DD')}`)})
changeBirth = () => this.setState({birthEdit: !this.state.birthEdit})
render () {
  const { isVisibleFields } = this.props
  return (
    <div id='profile'>
      <div id='profile-header'>
        <h2 className='block-title'>{config.translations.profile}</h2>
        {this.state.editProfile 
          ? <div className='back-save-btn'>
            <div className='back-wrap'>
              <div className='img-back'><img src={config.urls.media + 'arrow-left.svg'} /></div>
              <div className='back-btn' onClick={this.backAll}>{config.translations.back}</div>
            </div>
            <div className='save-wrap'>
              <div><img src={config.urls.media + 'apply.svg'} /></div>
              <div className='save-btn' onClick={this.saveAll}>{config.translations.success}</div>
            </div>
          </div>
          : <div className='edit-profile' onClick={() => this.setState({editProfile: true})}>
            <div className='edit-wrap'><img className='img-edit-profile' src={config.urls.media + 'edit-note.svg'} /></div>
            <div>{config.translations.editProfile}</div>
          </div>}
      </div>
      {(this.props.isVisibleFields || config.data.name) && <div id='name'>
        {!this.state.editProfile ? <div className='fullname'>
          <div className='fullname-wrap'>
            <span className='label'>{config.translations.name}:</span>
            <span className='block-content'>{config.data.name}</span>
          </div>
        </div>
          : <div className='fullname-edit'>
            <div className='edit-wrap'>
              <span className='label'>{config.translations.name}:</span>
              <input className='edit-input' type='text' value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
            </div>
            <div className='del-info'>
              <div className='del-wrap' onClick={this.delName}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>
          </div>}
      </div>}
      {(this.props.isVisibleFields || config.data.phone) &&
        <Phone editProfile={this.state.editProfile} 
          getPhone={this.getPhone}
          hatePhone={this.state.phone}
          {...this.props} />}
      {(this.props.isVisibleFields || config.data.email) &&
        <Email editProfile={this.state.editProfile}
          delEmail={this.delEmail}
          getEmail={this.getEmail}
          hateEmail={this.state.email}
          {...this.props} />}
      {/* {(this.props.isVisibleFields || config.data.address) && */}
      {!this.state.editProfile ? (this.props.isVisibleFields || config.data.address) && <div id='address'>
        <div className='address-wrap'>
          <div className='address-data'>
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
                  src={config.urls.media + 'icon-address.png'}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
        : <div id='address'>
          <div className='address-edit'>
            <div className='address-data-edit'>
              <div className='address-wrap-edit'>
                <span className='label'>{config.translations.address}:</span>
                <div className='block-content'>
                  <input className='edit-input' type='text' value={this.state.address} onChange={e => this.setState({address: e.target.value})} />
                </div>
              </div>
              <div className='del-info'>
                <div className='del-wrap' onClick={this.delAddress}>
                  <img src={config.urls.media + 'plus2.svg'} />
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* {!config.data.gender && <Sex {...this.props} />} */}
      {(this.props.isVisibleFields || config.data.gender) && <Sex editProfile={this.state.editProfile}getGender={this.getGender}{...this.props} />}
      {((config.data.birthdate || config.data.birthyear) || this.state.editProfile) &&
        <Birthdate editProfile={this.state.editProfile}
          getBdate={this.getBdate}
          getByear={this.getByear}
          changeDays={this.state.newDays}
          birthEdit={this.state.birthEdit}
          changeBirth={this.changeBirth}
          hateBdate={this.state.birthdate}
          hateByear={this.state.birthyear}
          {...this.props} />}
      {config.data.phone && <Sendlink {...this.props} />}
      <Agreement editProfile={this.state.editProfile}getArgeement={this.getArgeement}{...this.props} />
    </div>
  )
}
}
