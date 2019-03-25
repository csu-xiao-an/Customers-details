import './profile.styl'
import Phone from '../phone/phone.jsx'
// import Address from '../address/address.jsx'
import Sex from '../sex/sex.jsx'
import Sendlink from '../sendlink/sendlink.jsx'
import Email from '../email/email.jsx'
import Agreement from '../agreement/agreement.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import {clientPutService, clientNewGetService, addressGetService, newGetService} from 'project-services'
const {Link} = ReactRouterDOM
let timeout
export default class Profile extends React.Component {
state = {
  visibleMapPopup: false,
  birthdate: String(config.data.birthdate),
  birthyear: String(config.data.birthyear),
  gender: null,
  address: '',
  name: '',
  editProfile: false,
  delBirth: false,
  permit_ads: false,
  profileBirthEdit: false,
  profileEmailEdit: false,
  profilePhoneEdit: false,
  profileAddressEdit: false,
  isViewAdress: false,
  adress: []
}
componentDidMount = () => {
  this.setState({
    address: config.data.address ? config.data.address : null,
    name: config.data.name,
    phone: config.data.phone ? config.data.phone : null,
    email: config.data.email ? config.data.email : null,
    gender: config.data.gender ? config.data.gender : null
  })
}
delName = () => {
  this.setState({name: ''})
}
delAddress = () => {
  this.setState({address: ''}, () => this.setState({address: null}))
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
  this.resetFields()
}
delSex = () => {
  this.setState({gender: config.data.gender})
}
getPhone = value => {
  this.setState({ phone: value })
}
deletePhone = () => {
  this.setState({ phone: null })
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
deleteBirthday = () => {
  this.setState({ birthyear: null, birthdate: null })
}
getArgeement = value => {
  this.setState({ permit_ads: value })
}
deleteEmail = () => {
  this.setState({ email: null })
}
getDATE = (date, year) => {
  this.setState({ birthyear: year, birthdate: date })
}
changeAdress = e => {
  clearTimeout(timeout)
  this.setState({ address: e })
  localStorage.setItem('address', e)
  if (e.length > 0) {
    timeout = setTimeout(() => addressGetService(e).then(r => r.json().then(r =>
      this.setState({isViewAdress: true, adress: r.results}))), config.timeout)
  } else this.setState({isViewAdress: false})
}
saveAll = () => {
  const fields = ['name', 'address', 'gender', 'email', 'phone', 'birthdate', 'birthyear', 'permit_ads']
  const body = Object.keys(this.state).reduce((params, field) => {
    if (fields.includes(field) && (this.state[field] || !this.state.gender || !this.state.permit_ads)) {
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
      config.data.phone = this.state.phone
      config.data.address = this.state.address
      config.data.email = this.state.email
      config.data.name = this.state.name
      config.data.gender = this.state.gender
      config.data.permit_ads = this.state.permit_ads
      this.setState({ editProfile: false }, () => this.changeBirth())
      this.changeDays()
      this.resetFields()
      this.forceUpdate()
      clientNewGetService().then(r => {
        config.data.profile_image = r.r.profile_image
        let newArray = r.r
        for (let key in newArray) {
          if (fields.includes(key)) {
            config.data[key] = newArray[key]
            this.forceUpdate()
          }
        }
        this.props.getProfilePicture(config.data.profile_image)
      })
    } else {
      this.setState({ editProfile: true })
    }
  })
}
changeDays = () => this.setState({newDays: config.data.birthdate && config.data.birthyear
  ? `${config.data.birthyear}-${config.data.birthdate}`
  : ((!!config.data.birthyear) ? (`${config.data.birthyear}${!!config.data.birthdate ? config.data.birthdate : ''}`)
    : `${moment().format('YYYY')}-${!!config.data.birthdate ? config.data.birthdate : moment().format('MM-DD')}`)})
changeBirth = () => this.setState({profileBirthEdit: !this.state.profileBirthEdit})
changeEmailEdit = () => this.setState({profileEmailEdit: !this.state.profileEmailEdit})
changePhoneEdit = () => this.setState({profilePhoneEdit: !this.state.profilePhoneEdit})
changeAddressEdit = () => this.setState({profileAddressEdit: !this.state.profileAddressEdit})
resetFields = () => {
  this.setState({
    profileEmailEdit: false,
    profileBirthEdit: false,
    profileAddressEdit: false,
    profilePhoneEdit: false
  })
}
editInfo = () => {
  // newGetService().then(r => console.log(r))
  this.setState({editProfile: true})
}
render () {
  const { isVisibleFields } = this.props
  return (
    <div id='profile'>
      <div id='profile-header'>
        <h2 className='block-title'>{config.translations.profile}</h2>
        {/* {this.state.editProfile 
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
          : <div className='edit-profile' onClick={this.editInfo}>
            <div className='edit-wrap'><img className='img-edit-profile' src={config.urls.media + 'edit-note.svg'} /></div>
            <div>{config.translations.editProfile}</div>
          </div>} */}
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
      {((this.props.isVisibleFields || config.data.phone) || this.state.editProfile) &&
        <Phone editProfile={this.state.editProfile}
          getPhone={this.getPhone}
          changePhoneEdit={this.changePhoneEdit}
          profilePhoneEdit={this.state.profilePhoneEdit}
          deletePhone={this.deletePhone}
          hatePhone={this.state.phone}
          {...this.props} />}
      {((this.props.isVisibleFields || config.data.email) || this.state.editProfile) &&
        <Email editProfile={this.state.editProfile}
          // delEmail={this.delEmail}
          deleteEmail={this.deleteEmail}
          getEmail={this.getEmail}
          hateEmail={this.state.email}
          changeEmailEdit={this.changeEmailEdit}
          profileEmailEdit={this.state.profileEmailEdit}
          {...this.props} />}
      {(this.state.editProfile || (this.props.isVisibleFields || config.data.address)) &&
      <div id='address'>
        <div className={!this.state.editProfile ? 'address-wrap' : 'hidden'}>
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
        {(this.state.editProfile && !config.data.address)
          ? <div onClick={() => this.changeAddressEdit()}
            className={!this.state.profileAddressEdit ? 'add-address' : 'hidden'}>
            <div className='wrap-address'>
              <span className='label'>{config.translations.address}:</span>
              <h1>{config.translations.add_address}</h1>
            </div>
            <div className='add-info'>
              <div className='add-wrap'>
                <img src={config.urls.media + 'profile_plus.svg'} />
              </div>
            </div>
          </div> : ''}
        {this.state.editProfile &&
          <div className={this.state.profileAddressEdit || config.data.address ? 'address-edit' : 'hidden'}>
            <div className='address-data-edit'>
              <div className='address-wrap-edit'>
                <span className='label'>{config.translations.address}:</span>
                <div className='block-content'>
                  <input className='edit-input' 
                    type='text' value={this.state.address} 
                    onChange={e => this.changeAdress(e.target.value)} />
                  {/* onChange={e => this.setState({ address: e.target.value })} /> */}
                  <div className={this.state.isViewAdress ? 'adress-list-wrap' : 'hidden'}>
                    {this.state.adress.map(i => (
                      <div onClick={() => this.setState({addres: i.formatted_address, isViewAdress: false}, () => { config.data.address = i.formatted_address })}>{i.formatted_address}</div>)
                    )}
                  </div>
                </div>
              </div>
              <div className='del-info'>
                <div className='del-wrap' onClick={this.delAddress}>
                  <img src={config.urls.media + 'plus2.svg'} />
                </div>
              </div>
            </div>
          </div>}
      </div>}
      {/* {!config.data.gender && <Sex {...this.props} />} */}
      {((this.props.isVisibleFields || config.data.gender) || this.state.editProfile) && <Sex editProfile={this.state.editProfile}getGender={this.getGender}{...this.props} />}
      {((config.data.birthdate || config.data.birthyear) || this.state.editProfile) &&
        <Birthdate editProfile={this.state.editProfile}
          getBdate={this.getBdate}
          getByear={this.getByear}
          getDATE={this.getDATE}
          deleteBirthday={this.deleteBirthday}
          changeDays={this.state.newDays}
          profileBirthEdit={this.state.profileBirthEdit}
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
