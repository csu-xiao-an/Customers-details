import './profile.styl'
import Phones from '../phones/phones.jsx'
import Sex from '../sex/sex.jsx'
import Email from '../email/email.jsx'
import Agreement from '../agreement/agreement.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import {putService as clientPutService, newGetService as clientNewGetService} from 'project-services/client.service.js'
import {addressService} from 'project-services/address.service.js'
import { default as IncorrectMail } from 'project-components/incorrectMail/incorrectMail.jsx'
import { default as IncorrectPhone } from 'project-components/incorrectPhone/incorrectPhone.jsx'
import { default as EmptyDataModal } from 'project-components/EmptyDataModal/emptydatamodal.jsx'

export default class Profile extends React.Component {
state = {
  loader: false,
  validateMail: false,
  validatePhone: false,
  visibleMapPopup: false,
  birthdate: config.data.birthdate ? String(config.data.birthdate) : null,
  birthyear: config.data.birthyear ? String(config.data.birthyear) : null,
  gender: null,
  address: '',
  name: '',
  editProfile: false,
  permit_ads: config.data.permit_ads || false,
  profileBirthEdit: false,
  profileEmailEdit: false,
  profileNameEdit: false,
  profilePhoneEdit: false,
  profileAddressEdit: false,
  isViewAdress: false,
  adress: [],
  resetApi: true,
  changeState: false,
  maleSelected: false,
  femaleSelected: false,
  genderSelect: '',
  label: config.translations.personal_info.gender.select_gender
}

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  NAME  ///////////////////////////////
/// ///////////////////////////////////////////////////////////////////

changeNameEdit = () => {
  this.setState({ profileNameEdit: !this.state.profileNameEdit }, () => document.getElementById('name-input').focus())
}

delName = () => {
  this.setState({ name: '' }, () => this.setState({ name: null }))
  document.getElementById('name-input').focus()
}

blurName = () => {
  this.setState({ activeNameModal: true })
}

cancelNameModal = () => {
  this.setState({ activeNameModal: false, name: config.data.name, profileNameEdit: true }, () => document.getElementById('name-input').focus())
}

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  PHONE  //////////////////////////////
/// ///////////////////////////////////////////////////////////////////

changePhoneEdit = () => this.setState({profilePhoneEdit: !this.state.profilePhoneEdit})

normalizePhones = phones => {
  if (phones && phones.length) {
    return phones.map((phone, index) => ({ id: index, number: phone.number || phone }))
  } else {
    return []
  }
}

changeOnePhone = value => {
  let phone = this.state.phone
  let phoneIndex = phone.findIndex(phone => phone.id === value.id)
  if (phoneIndex > -1) {
    phone[phoneIndex].number = value.number
    this.setState({ phone })
  }
}

getPhone = value => {
  this.setState({ phone: value })
  this.changeOnePhone(value)
}

deletePhone = value => {
  this.changeOnePhone(value)
  this.setState({ ifEnterPhone: false })
}

getPhonesValue = value => {
  let filterValues = value.filter(i => !!i.number)
  this.setState({ phone: filterValues })
  if (filterValues.length) {
    return `[${filterValues.map(phone => JSON.stringify(phone.number))}]`
  } else {
    return null
  }
}

visibleModal = () => {
  this.setState({ visibleModal: true, blur: false })
}

blurPhoneModal = () => {
  let arrayPhones = this.state.phone.filter(phone => !!phone.number)
  if (arrayPhones.length === 0) this.setState({ visibleModal: true, blur: true })
}

cancelEmptyPhoneModal = () => {
  this.setState({ visibleModal: false, permit_empty_phone: true })
  if (!this.state.blur) this.saveAll()
}

cancelPhoneModal = () => {
  this.setState({ visibleModal: false, permit_empty_phone: false })
}

getUniqkId = id => {
  let nextId = id
  const { phone } = this.state
  if (phone.filter(phone => phone.id === id).length) {
    nextId++
    return this.getUniqkId(nextId)
  } else return nextId
}

onAddPhone = () => {
  const { phone } = this.state
  phone.push({ id: this.getUniqkId(0), number: '' })
  this.setState({ phone, add: true })
}
// validatePhone = phone => {
//   const r = /^[0-9-+*#]+$/
//   return r.test(phone)
// }
showPhoneValidateModal = icorrectNumber => {
  this.setState({ phoneValidateModal: true, icorrectNumber })
}
hidePhoneValidateModal = () => {
  this.setState({ phoneValidateModal: false, loader: false })
}
/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  GENDER  /////////////////////////////
/// ///////////////////////////////////////////////////////////////////

getGender = gender => this.setState({ gender })

defaultPos = () => {
  if (config.data.gender) {
    let initState = config.data.gender
    if (initState.toLowerCase() === 'male') {
      this.setState({ label: config.translations.personal_info.gender.male, maleSelected: true })
    } else if (initState.toLowerCase() === 'female') {
      this.setState({ label: config.translations.personal_info.gender.female, femaleSelected: true })
    } else if (!initState) {
      this.setState({ label: config.translations.personal_info.gender.select_gender, femaleSelected: false, maleSelected: false })
    }
  }
}

deleteGender = () => {
  this.state.gender = null
  this.setState({ label: config.translations.personal_info.gender.select_gender, changeState: false, femaleSelected: false, maleSelected: false, genderSelect: null }, () => this.getGender(this.state.genderSelect))
}

handleGenderClick = () => {
  let changeState = !this.state.changeState
  this.setState({changeState})
}

selectedSex = () => {
  let male = document.getElementById('radioMale')
  male && male.addEventListener('click', e => {
    this.state.genderSelect = 'male'
    this.setState({label: config.translations.personal_info.gender.male,
      maleSelected: true,
      femaleSelected: false,
      changeState: false
    })
    this.getGender(this.state.genderSelect)
  })
  let female = document.getElementById('radioFemale')
  female && female.addEventListener('click', e => {
    this.state.genderSelect = 'female'
    this.setState({label: config.translations.personal_info.gender.female,
      maleSelected: false,
      femaleSelected: true,
      changeState: false
    })
    this.getGender(this.state.genderSelect)
  })
}

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  ADDRESS  ////////////////////////////
/// ///////////////////////////////////////////////////////////////////

getAddress = address => this.setState({ address })

loadMap = (url, location) => {
  let scriptTag = document.createElement('script')
  scriptTag.src = url
  location.appendChild(scriptTag)
  this.forceUpdate()
}

delAddress = () => {
  this.setState({address: '', test: ''}, () => {
    this.setState({address: null})
    document.getElementById('pac-input').focus()
  })
}

removeElements = () => {
  let elem = document.getElementsByClassName('pac-container')
  while (elem.length > 0) {
    elem[0].parentNode.removeChild(elem[0])
  }
}

changeAdress = e => {
  let value = e.target.value
  this.setState({ address: value })
}

changeAddressEdit = () => {
  this.setState({profileAddressEdit: !this.state.profileAddressEdit}, () => {
    this.initMap()
    document.getElementById('pac-input').focus()
  })
}

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  EMAIL  //////////////////////////////
/// ///////////////////////////////////////////////////////////////////

deleteEmail = () => this.setState({ email: '' }, () => {
  this.setState({email: null, validateMail: false})
  document.getElementById('email-input').focus()
})

getEmail = email => this.setState({ email })

changeEmailEdit = () => this.setState({ profileEmailEdit: !this.state.profileEmailEdit }, () => document.getElementById('email-input').focus())

changeMail = e => {
  this.setState({ email: e })
  if (e !== '' && e.length >= 3) {
  } else {
    this.setState({ validateMail: false })
  }
}

validate = email => {
  const r = /^.+@.+\..+$/
  !r.test(email) && this.showMail()
  return r.test(email)
}

showMail = () => {
  this.setState({ activateMailModal: true })
}
hideMailModal = () => {
  this.setState({ activateMailModal: false, loader: false })
  document.getElementById('email-input').focus()
}

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  BIRTHDATE  //////////////////////////
/// ///////////////////////////////////////////////////////////////////

getBdate = birthdate => this.setState({ birthdate })

getByear = birthyear => this.setState({ birthyear })

deleteBirthday = () => this.setState({ birthyear: null, birthdate: null })

changeDays = () => this.setState({newDays: config.data.birthdate && config.data.birthyear
  ? `${config.data.birthyear}-${config.data.birthdate}`
  : ((config.data.birthyear) ? (`${config.data.birthyear}${config.data.birthdate ? config.data.birthdate : ''}`)
    : `${moment().format('YYYY')}-${config.data.birthdate ? config.data.birthdate : moment().format('MM-DD')}`)})

changeBirth = () => this.setState({profileBirthEdit: !this.state.profileBirthEdit})

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  PERMIT ADS  /////////////////////////
/// ///////////////////////////////////////////////////////////////////

handleAds = () => {
  this.setState({ permit_ads: !this.state.permit_ads })
  this.forceUpdate()
}
getArgeement = value => this.setState({ permit_ads: value })

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  OTHER  //////////////////////////////
/// ///////////////////////////////////////////////////////////////////

componentDidMount = () => {
  this.setState({
    address: config.data.address ? config.data.address : null,
    name: config.data.name ? config.data.name : null,
    phone: this.normalizePhones(config.data.phone),
    email: config.data.email ? config.data.email : null,
    gender: config.data.gender ? config.data.gender : null
  })
}

initMap = () => {
  const divNode = document.createElement('div')
  const url = `${config.urls.media}ic-marked.svg`
  divNode.innerHTML = `<style>
    .circle:before{
      content: url(${url});
    }
    </style>`
  document.body.appendChild(divNode)
  divNode.innerHTML = `<style>
    .radio.checked .circle:before{
      content: url(${url});
    }
    </style>`
  document.body.appendChild(divNode)
  this.selectedSex()
  if (window.google) {
    let input = this.input
    const searchBox = new window.google.maps.places.SearchBox(input)
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces()
      this.setState({
        address: places[0].formatted_address
      })
    })
  } else {
    this.initTimeout = setTimeout(() => {
      this.initMap()
    }, 500)
  }
}

/// ///////////////////////////////////////////////////////////////////
/// /////////////////////  SAVE AND BACK BUTTONS  /////////////////////
/// ///////////////////////////////////////////////////////////////////

validatePhone = phone => {
  const r = /^[0-9-+*#]+$/
  phone && !r.test(phone) && this.showPhoneValidateModal(phone)
  return !r.test(phone)
}

saveAll = () => {
  let checkMail = this.state.email && this.validate(this.state.email)
  let filterPhones = this.state.phone.filter(i => !!i.number)
  let arrPhones = filterPhones.map(item => item.number)
  this.setState({loader: true})
  let emptyPhone = this.getPhonesValue(this.state.phone)
  let checkPhones = arrPhones.some(i => this.validatePhone(i))
  if (!checkPhones && (checkMail || !this.state.email)) {
    this.sendData()
  } else if (emptyPhone === null) {
    this.sendData()
  }
}

sendData = () => {
  const fields = ['name', 'address', 'gender', 'email', 'phone', 'birthdate', 'birthyear', 'permit_ads']
  let body = Object.keys(this.state).reduce((params, field) => {
    if (fields.includes(field) && (this.state[field] || !this.state.gender || !this.state.permit_ads)) {
      let value = field === 'phone' ? this.getPhonesValue(this.state[field]) : `${this.state[field]}`
      if (field === 'address') value = encodeURIComponent(value)
      if (field === 'name') value = encodeURIComponent(value)
      if (field === 'email') value = encodeURIComponent(value)
      if (value === '') value = null
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
      this.setState({ editProfile: false, resetApi: false, loader: false }, () => this.changeBirth())
      this.changeDays()
      this.resetFields()
      this.forceUpdate()
      clientNewGetService().then(r => {
        config.data.profile_image = r.r.profile_image
        let newArray = r.r
        for (let key in newArray) {
          if (fields.includes(key)) {
            config.data[key] = newArray[key]
            this.state[key] = newArray[key]
            this.forceUpdate()
          }
        }
        this.props.getProfilePicture(config.data.profile_image)
        this.removeElements()
        this.setState({ phone: this.normalizePhones(this.state.phone), ifEnterPhone: false, validatePhone: false, validateMail: false })
      })
    } else {
      this.setState({ editProfile: true })
    }
  })
}

backAll = () => {
  this.setState({
    address: config.data.address,
    name: config.data.name,
    phone: this.normalizePhones(config.data.phone),
    email: config.data.email,
    gender: config.data.gender,
    ifEnterPhone: false,
    validatePhone: false,
    validateMail: false,
    permit_ads: config.data.permit_ads || false,
    editProfile: false,
    resetApi: false,
    permit_empty_phone: false,
    blur: false,
    changeState: false,
    maleSelected: config.data.gender === 'male' && true,
    femaleSelected: config.data.gender === 'female' && true,
    genderSelect: config.data.gender,
    label: config.translations.personal_info.gender.select_gender
  })
  this.removeElements()
  this.defaultPos()
  this.resetFields()
  this.forceUpdate()
}

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  OTHER  //////////////////////////////
/// ///////////////////////////////////////////////////////////////////

resetFields = () => {
  this.setState({
    profileEmailEdit: false,
    profileBirthEdit: false,
    profileAddressEdit: false,
    profilePhoneEdit: false,
    profileNameEdit: false
  })
}

editInfo = () => {
  if (!window.google) {
    addressService().then(r => {
      const key = r.r.api_key
      this.loadMap(`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&language=${config.locale}`, document.body)
    })
  }
  this.setState({ editProfile: true, resetApi: true, phone: this.normalizePhones(config.data.phone) }, () => this.initMap())
}

saveBtn = () => {
  let numbers = this.state.phone.filter(phone => phone.number !== '')
  if (this.state.name) {
    if (numbers.length !== 0) {
      this.saveAll()
    } else this.visibleModal()
  } else {
    this.blurName()
  }
}

render () {
  const { isVisibleFields } = this.props
  const { loader } = this.state
  return (
    <div id='profile'>
      <div id='profile-header'>
        <h2 className='block-title'>{config.translations.personal_info.title}</h2>
        {this.state.editProfile
          ? <div className='back-save-btn'>
            <div className='back-wrap'>
              <div className='img-back'><img src={config.urls.media + 'arrow-left.svg'} /></div>
              <div className='back-btn' onClick={this.backAll}>{config.translations.personal_info.back_label_btn}</div>
            </div>
            <div className='save-wrap'>
              <div className={'img-wrap' + (!loader ? '' : ' spin')}>{!loader
                ? <svg className='img_apply'>
                  <use xlinkHref={config.urls.media + 'sprite.svg#apply'} />
                </svg>
                : <svg className='img_refresh'>
                  <use xlinkHref={config.urls.media + 'sprite.svg#refresh'} />
                </svg>}
              </div>
              <div className='save-btn' onClick={this.saveBtn}>{config.translations.personal_info.done_label_btn}</div>
            </div>
          </div>
          : <button className='edit-profile' onClick={this.editInfo}>
            <div className='edit-wrap'><img className='img-edit-profile' src={config.urls.media + 'edit-note.svg'} /></div>
            {config.translations.personal_info.edit_label_btn}
          </button>}
      </div>
      {(this.state.editProfile || (this.props.isVisibleFields || config.data.name)) && <div id='name'>
        {!this.state.editProfile && <div className='fullname'>
          <div className='fullname-wrap'>
            <span className='label'>{config.translations.personal_info.name_label}:</span>
            <span className='block-content'>{config.data.name}</span>
          </div>
        </div>}
        {(this.state.editProfile && !config.data.name)
          ? <div onClick={() => this.changeNameEdit()}
            className={!this.state.profileNameEdit ? 'add-name' : 'hidden'}>
            <div className='wrap-name-full'>
              <span className='label'>{config.translations.personal_info.name_label}:</span>
              <h1>{config.translations.personal_info.empty_name_label}</h1>
            </div>
            <div className='add-info'>
              <div className='add-wrap'>
                <img src={config.urls.media + 'profile_plus.svg'} />
              </div>
            </div>
          </div> : ''}
        {(this.state.editProfile && (this.state.profileNameEdit || config.data.name)) &&
          <div className='fullname-edit'>
            <div className='edit-wrap'>
              <span className='label'>{config.translations.personal_info.name_label}:</span>
              <input className='edit-input'
                id='name-input'
                ref={inp => { this.inputName = inp }}
                type='text'
                onBlur={!this.state.name && this.blurName}
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })} />
            </div>
            <div className='del-info'>
              <div className='del-wrap' onClick={this.delName}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>
          </div>}
        <EmptyDataModal
          show={this.state.activeNameModal}
          onHide={this.cancelNameModal}
        />
      </div>}
      {((this.props.isVisibleFields || this.state.phone) || this.state.editProfile) &&
        <Phones editProfile={this.state.editProfile}
          getPhone={this.getPhone}
          add={this.state.add}
          changePhoneEdit={this.changePhoneEdit}
          profilePhoneEdit={this.state.profilePhoneEdit}
          deletePhone={this.deletePhone}
          visibleModal={this.state.visibleModal}
          blurPhoneModal={this.blurPhoneModal}
          cancelEmpty={this.cancelEmptyPhoneModal}
          cancel={this.cancelPhoneModal}
          visibleModalOpen={this.visibleModal}
          phones={this.state.phone || []}
          {...this.props} />}
      <IncorrectPhone
        show={this.state.phoneValidateModal}
        onHide={this.hidePhoneValidateModal}
        phone={this.state.icorrectNumber}
      />
      {this.state.editProfile && this.state.phone.length !== 5 &&
        <div className='add-phones' onClick={this.onAddPhone}>
          <div className='add-phones-wrap'>
            <div className='phone-wrap-half'>
              <span className='label'>{config.translations.personal_info.empty_phone_label}</span>
              <h1>{config.translations.personal_info_editing.add_phone_number}</h1>
            </div>
            <div className='add-info-pic'>
              <div className='pic-wrap'>
                <img src={config.urls.media + 'profile_plus.svg'} />
              </div>
            </div>
          </div>
        </div>
      }
      {/* <ModalPhoneLib
        text={this.text}
        visibleModal={this.state.visibleModal}
        closeModal={this.cancel}
        create={this.create}
        cancelModal={this.cancelPhoneModal}
        saveNumber={this.getPhone}
      /> */}
      {((this.props.isVisibleFields || config.data.email) || this.state.editProfile) &&
        <Email editProfile={this.state.editProfile}
          // delEmail={this.delEmail}
          deleteEmail={this.deleteEmail}
          getEmail={this.getEmail}
          hateEmail={this.state.email}
          changeMail={this.changeMail}
          changeEmailEdit={this.changeEmailEdit}
          profileEmailEdit={this.state.profileEmailEdit}
          blurMail={this.blurMail}
          {...this.props} />}
      <IncorrectMail
        show={this.state.activateMailModal}
        onHide={this.hideMailModal}
        email={this.state.email}
      />
      {(this.state.editProfile || (this.props.isVisibleFields || config.data.address)) &&
      <div id='address'>
        <div className={!this.state.editProfile ? 'address-wrap' : 'hidden'}>
          <div className='address-data'>
            <span className='label'>{config.translations.personal_info.address_lable}:</span>
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
        {this.state.editProfile && !config.data.address &&
          <div ref={input => { this.input = input }} onClick={this.changeAddressEdit}
            className={!this.state.profileAddressEdit ? 'add-address' : 'hidden'}>
            <div className='wrap-address'>
              <span className='label'>{config.translations.personal_info.address_lable}:</span>
              <h1>{config.translations.personal_info.empty_address_label}</h1>
            </div>
            <div className='add-info'>
              <div className='add-wrap'>
                <img src={config.urls.media + 'profile_plus.svg'} />
              </div>
            </div>
          </div>}
        {(this.state.editProfile && (this.state.profileAddressEdit || config.data.address)) &&
          <div className='address-data-edit'>
            <div className='address-wrap-edit'>
              <span className='label'>{config.translations.personal_info.address_lable}:</span>
              <div className='block-content'>
                <input id='pac-input' className='controls'
                  type='text'
                  ref={input => { this.input = input }}
                  onChange={this.changeAdress}
                  value={this.state.address}
                />
              </div>
            </div>
            <div className='del-info'>
              <div className='del-wrap' onClick={this.delAddress}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>
          </div>}
      </div>}
      {((this.props.isVisibleFields || config.data.gender) || this.state.editProfile) &&
        <Sex editProfile={this.state.editProfile}
          defaultPos={this.defaultPos}
          selectedSex={this.selectedSex}
          deleteGender={this.deleteGender}
          maleSelected={this.state.maleSelected}
          femaleSelected={this.state.femaleSelected}
          genderSelect={this.state.genderSelect}
          changeState={this.state.changeState}
          getGender={this.getGender}
          handleGenderClick={this.handleGenderClick}
          label={this.state.label}
          // {...this.props}
        />}
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
      {/* {config.data.phone && <Sendlink {...this.props} />} */}
      <Agreement
        editProfile={this.state.editProfile}
        getArgeement={this.getArgeement}
        permit_ads={this.state.permit_ads}
        handleAds={this.handleAds}
        {...this.props} />
    </div>
  )
}
}
