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
  year: config.data.birthyear ? config.data.birthyear : config.translations.datepicker.placeholder.year,
  day: config.data.birthdate ? config.data.birthdate.slice(3) : config.translations.datepicker.placeholder.day,
  month: config.data.birthdate ? config.data.birthdate.slice(0, 2) : config.translations.datepicker.placeholder.month,
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
  // birthdateError: false,
  label: config.translations.personal_info.gender.select_gender,
  // blurPhone: false
}

constructor (props) {
  super(props)
  this.text = {
    title_modal: config.translations.personal_info_editing.title,
    agree_btn: config.translations.personal_info_editing.agree
  }
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

onChangeName = name => {
  this.setState({ name, blurName: false })
}

nameBlur = () => {
  if (this.state.name) {
    this.setState({ blurName: false })
  } else {
    this.setState({ blurName: true })
  }
  // if (!this.state.name) {
  //   this.nameErrorStyle()
  // } else {
  //   this.discardNameErrorStyle()
  // }
}

// nameErrorStyle = () => {
//   const inputName = this.inputName
//   const nameField = this.nameField
//   const spanClass = this.spanClass
//   this.setState({ errorName: true })
//   inputName.classList.add('error-input')
//   spanClass.classList.add('label-error')
//   nameField.classList.add('error-name')
// }

// discardNameErrorStyle = () => {
//   const inputName = this.inputName
//   const nameField = this.nameField
//   const spanClass = this.spanClass
//   this.setState({ errorName: false })
//   inputName.classList.remove('error-input')
//   spanClass.classList.remove('label-error')
//   nameField.classList.remove('error-name')
// }

showNameModal = () => {
  this.setState({ activeNameModal: true })
}

cancelNameModal = () => {
  this.setState({ activeNameModal: false, name: config.data.name, profileNameEdit: true }, () => document.getElementById('name-input').focus())
}

/// ///////////////////////////////////////////////////////////////////
/// ////////////////////////////  PHONE  //////////////////////////////
/// ///////////////////////////////////////////////////////////////////

  resetPhoneBlur = () => {
    this.setState({ blurPhone: false })
  }

  phoneBlur = () => {
    const number = this.state.phone.filter(i => i.number !== '')
    if (number.length === 0) {
      this.setState({ blurPhone: true })
    } else {
      this.setState({ blurPhone: false })
    }
  }

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

cancelSavePhoneModal = () => {
  this.setState({ visibleModal: false, permit_empty_phone: true }, () => this.saveAll())
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
  document.querySelectorAll('#gender').forEach(i => i.parentNode.removeChild(i))
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

saveBirthdate = () => {
  let birthdateError = true
  const datepicker = document.getElementById('birthdate')
  datepicker.style.borderTop = '1px solid #dedeff'
  datepicker.style.borderBottom = 'none'
  datepicker.style.borderLeft = 'none'
  datepicker.style.borderRight = 'none'
  const { day, month, year } = this.state
  const stringDay = config.translations.datepicker.placeholder.day
  const stringMonth = config.translations.datepicker.placeholder.month
  const stringYear = config.translations.datepicker.placeholder.year

  return new Promise(resolve => {
    if (year !== stringYear && day === stringDay && month === stringMonth) {
      // Only year
      datepicker.style.border = '1px solid red'
    } else if (month === stringMonth && day !== stringDay && year === stringYear) {
      // Only day
      datepicker.style.border = '1px solid red'
    } else if (year && day !== stringDay && month === stringMonth) {
      // Year and day
      datepicker.style.border = '1px solid red'
    } else if (year === stringYear && day === stringDay && month !== stringMonth) {
      // Only month
      this.setState({ birthyear: moment().format('YYYY'), birthdate: `${this.state.month}-01`, day: '01', year: moment().format('YYYY') })
      birthdateError = false
    } else if (year !== stringYear && day === stringDay && month !== stringMonth) {
      // Year and month
      this.setState({ birthdate: `${this.state.month}-01`, day: '01' })
      birthdateError = false
    } else if (year === stringYear && day !== stringDay && month !== stringMonth) {
      // Month and day
      this.setState({ birthyear: moment().format('YYYY'), year: moment().format('YYYY'), birthdate: `${this.state.month}-${this.state.day}` })
      birthdateError = false
    } else birthdateError = false
    this.setState({ birthdateError }, () => resolve())
  })
}

  saveBtn = () => {
    this.saveBirthdate().then(() => {
      if (!this.state.birthdateError) {
        const numbers = this.state.phone.filter(phone => phone.number !== '')
        if (this.state.name) {
          if (numbers.length !== 0) {
            this.saveAll()
          } else this.visibleModal()
        } else {
          this.showNameModal()
        }
      }
    })
  }

handleChangeYear = event => {
  this.setState({
    year: event.target.value,
    birthyear: event.target.value
  })
}

handleChangeMonth = event => {
  this.setState({
    month: event.target.value,
    birthdate: moment(`${moment().format('YYYY')}-${event.target.value}-${this.state.day}`).isValid() ? `${event.target.value}-${this.state.day}` : null
  })
}

handleChangeDay = event => {
  this.setState({
    day: event.target.value,
    birthdate: moment(`${moment().format('YYYY')}-${this.state.month}-${event.target.value}`).isValid() ? `${this.state.month}-${event.target.value}` : null
  })
}

deleteBirthday = () => this.setState({
  year: config.translations.datepicker.placeholder.year,
  month: config.translations.datepicker.placeholder.month,
  day: config.translations.datepicker.placeholder.day,
  birthdate: null,
  birthyear: null
})

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
  divNode.setAttribute('id', 'gender')
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
  const checkMail = this.state.email && this.validate(this.state.email)
  const filterPhones = this.state.phone.filter(i => !!i.number)
  const arrPhones = filterPhones.map(item => item.number)
  this.setState({ loader: true })
  const emptyPhone = this.getPhonesValue(this.state.phone)
  const checkPhones = arrPhones.some(i => this.validatePhone(i))
  if (!checkPhones && (checkMail || !this.state.email)) {
    this.sendData()
  } else if (emptyPhone === null && checkMail) {
    this.sendData()
  }
}

sendData = () => {
  const fields = ['name', 'address', 'gender', 'email', 'phone', 'birthdate', 'birthyear', 'permit_ads']
  const body = Object.keys(this.state).reduce((params, field) => {
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
    year: config.data.birthyear ? config.data.birthyear : config.translations.datepicker.placeholder.year,
    day: config.data.birthdate ? config.data.birthdate.slice(3) : config.translations.datepicker.placeholder.day,
    month: config.data.birthdate ? config.data.birthdate.slice(0, 2) : config.translations.datepicker.placeholder.month,
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
    label: config.translations.personal_info.gender.select_gender,
    blurName: false,
    blurPhone: false
  })
  this.removeElements()
  this.defaultPos()
  this.resetFields()
  this.forceUpdate()
  // this.discardNameErrorStyle()
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

render () {
  const { loader } = this.state
  return (
    <div id='profile'>
      <div id='profile-header'>
        <h2 className='block-title'>{config.translations.personal_info.title}</h2>
        {this.state.editProfile
          ? <div className='back-save-btn'>
            <div className='back-wrap'>
              <div className='img-back'><img src={config.urls.media + 'arrow-left.svg'} /></div>
              <div className='back-btn' onClick={this.backAll}>{config.translations.personal_info_editing.back_label_btn}</div>
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
              <div className='save-btn' onClick={this.saveBtn}>{config.translations.personal_info_editing.done_label_btn}</div>
            </div>
          </div>
          : <button className='edit-profile' onClick={this.editInfo}>
            <div className='edit-wrap'><img className='img-edit-profile' src={config.urls.media + 'edit-note.svg'} /></div>
            {config.translations.personal_info_editing.edit_label_btn}
          </button>}
      </div>
      {(this.state.editProfile ||  config.data.name) && <div id='name'>
        <div className={'full-wrap-name ' + ((!this.state.name && this.state.blurName) ? 'error-name' : '')} ref={ref => { this.nameField = ref }}>
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
                <span className='add_info'>{config.translations.personal_info_editing.empty_name_label}</span>
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
                <span className={'label ' + ((!this.state.name && this.state.blurName) ? 'error-span' : '')} ref={ref => { this.spanClass = ref }}>{!this.state.blurName ? config.translations.personal_info.name_label : config.translations.personal_info_editing.name_label_error}:</span>
                <input
                  className='edit-input'
                  id='name-input'
                  ref={inp => { this.inputName = inp }}
                  type='text'
                  onBlur={this.nameBlur}
                  value={this.state.name}
                  onChange={e => this.onChangeName(e.target.value)} />
              </div>
              <div className='del-info'>
                <div className='del-wrap' onClick={this.delName}>
                  <img src={config.urls.media + 'plus2.svg'} />
                </div>
              </div>
            </div>}
          <EmptyDataModal
            text={this.text}
            show={this.state.activeNameModal}
            onHide={this.cancelNameModal}
          />
        </div>
      </div>}
      {(this.state.phone || this.state.editProfile) &&
        <Phones
          editProfile={this.state.editProfile}
          phoneBlur={this.phoneBlur}
          resetPhoneBlur={this.resetPhoneBlur}
          phoneBlurState={this.state.blurPhone}
          getPhone={this.getPhone}
          add={this.state.add}
          changePhoneEdit={this.changePhoneEdit}
          profilePhoneEdit={this.state.profilePhoneEdit}
          deletePhone={this.deletePhone}
          visibleModal={this.state.visibleModal}
          // blurPhoneModal={this.blurPhoneModal}
          cancelSave={this.cancelSavePhoneModal}
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
              <span className='label'>{config.translations.personal_info_editing.empty_phone_label}</span>
              <span className='add_info'>{config.translations.personal_info_editing.add_phone_number}</span>
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
      {(config.data.email || this.state.editProfile) &&
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
      {(this.state.editProfile || config.data.address) &&
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
              <a href={config.urls.waze.replace('{address}', encodeURIComponent(config.data.address))}>
                <img
                  // onClick={() => this.setState({visibleMapPopup: true})}
                  src={config.urls.media + 'waze.png'}
                />
              </a>
            </div>
            <div className='img-wrap'>
              <a href={config.urls.google_maps + encodeURIComponent(config.data.address)}>
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
              <span className='add_info'>{config.translations.personal_info_editing.empty_address_label}</span>
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
                  placeholder={config.translations.personal_info_editing.address_placeholder}
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
      {(config.data.gender || this.state.editProfile) &&
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
          deleteBirthday={this.deleteBirthday}
          birthdateError={this.state.birthdateError}
          profileBirthEdit={this.state.profileBirthEdit}
          changeBirth={this.changeBirth}
          saveBirthdate={this.saveBirthdate}
          handleChangeDay={this.handleChangeDay}
          handleChangeMonth={this.handleChangeMonth}
          handleChangeYear={this.handleChangeYear}
          day={this.state.day}
          year={this.state.year}
          month={this.state.month}
          {...this.props}
        />}
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
