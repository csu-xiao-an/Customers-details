import uid from 'uid'
import Phones from './components/phones/'
import Gender from './components/gender/'
import Email from './components/email/'
import Name from './components/name/'
import Address from './components/address/'
import Birthdate from './components/birthdate/birthdate.jsx'
import { putService as clientPutService, newGetService as clientNewGetService } from 'project-services/client.service.js'
import { addressService } from 'project-services/address.service.js'
import { default as IncorrectMail } from 'project-components/incorrectMail/incorrectMail.jsx'
import { default as IncorrectPhone } from 'project-components/incorrectPhone/incorrectPhone.jsx'
import { default as EmptyDataModal } from 'project-components/EmptyDataModal/emptydatamodal.jsx'
import './profile.styl'

const normalizePhones = phones => {
  if (phones && phones.length) {
    return phones.map(phone => ({ id: uid(), number: phone.number || phone }))
  } else {
    return []
  }
}
const EmptyNameText = {
  title_modal: config.translations.popup_empty_and_long_name.title_empty_name,
  agree_btn: config.translations.popup_empty_and_long_name.agree_empty_name
}
const LongNameText = {
  title_modal: config.translations.popup_empty_and_long_name.title_long_name.replace('{name_max_length}', config.name_max_length),
  agree_btn: config.translations.popup_empty_and_long_name.agree_long_name
}
const INITIAL_STATE = {
  profileAddressEdit: false,
  long_name_warning: false,
  profileBirthEdit: false,
  openGenderStrip: false,
  addingNewPhone: false,
  validatePhone: false,
  validateMail: false,
  emailEditing: false,
  editProfile: false,
  errorClass: false,
  nameModal: false,
  blurPhone: false,
  bdError: false,
  loader: false
  // permit_ads: config.data.permit_ads || false
}

export default class Profile extends React.Component {

  state = {
    year: config.data.birthyear ? config.data.birthyear : config.translations.datepicker.placeholder.year,
    day: config.data.birthdate ? config.data.birthdate.slice(3) : config.translations.datepicker.placeholder.day,
    month: config.data.birthdate ? config.data.birthdate.slice(0, 2) : config.translations.datepicker.placeholder.month,
    birthdate: config.data.birthdate ? String(config.data.birthdate) : null,
    birthyear: config.data.birthyear ? String(config.data.birthyear) : null,
    phone: normalizePhones(config.data.phone),
    address: config.data.address || null,
    gender: config.data.gender || null,
    email: config.data.email || null,
    name: config.data.name || null,
    ...INITIAL_STATE
  }

  //  name strip
  handleClearName = () => this.setState({ name: '' })

  onChangeName = e => {
    const name = e.target.value
    if (name.length >= config.name_max_length) {
      this.setState({ long_name_warning: true })
    }
    this.setState({ name })
  }

  showNameModal = () => this.setState({ nameModal: true })

  cancelNameModal = () => {
    this.setState({ nameModal: false, name: config.data.name, long_name_warning: false })
  }

  // phone strip

  validatePhone = phone => {
    const r = /^[0-9-+*#]+$/
    phone && !r.test(phone) && this.showPhoneValidateModal(phone)
    return !r.test(phone)
  }

  setPhoneInput = input => {
    this.childPhoneRef = input
  }

  phoneBlur = () => {
    const number = this.state.phone.find(i => i.number === '')
    if (number) {
      this.setState({ blurPhone: true })
    } else {
      this.setState({ blurPhone: false })
    }
  }

  getPhoneFromPopup = phone => this.setState({ phone })

  getPhone = e => {
    const id = e.target.id
    const number = e.target.value
    this.setState(prevState => ({
      phone: prevState.phone.map(item => item.id == id ? { id, number } : item),
      blurPhone: false
    }))
  }

  deletePhone = id => {
    this.setState({
      phone: this.state.phone.map(item => item.id == id ? { id, number: '' } : item)
    }, () => {
      document.getElementById(id).focus()
    })
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
    this.setState({ visibleModal: true })
  }

  blurPhoneModal = () => {
    const arrayPhones = this.state.phone.filter(phone => !!phone.number)
    if (arrayPhones.length === 0) this.setState({ visibleModal: true })
  }

  cancelSavePhoneModal = () => {
    this.setState({ visibleModal: false }, () => this.saveAll())
  }

  cancelPhoneModal = () => {
    this.setState({ visibleModal: false })
  }

  handleAddNewPhone = () => {
    const newPhone = {
      id: uid(),
      number: ''
    }
    const emptyNumber = this.state.phone[this.state.phone.length - 1] && this.state.phone[this.state.phone.length - 1].number === ''
    if (emptyNumber) {
      this.setState({
        addingNewPhone: false
      })
    } else {
      this.setState(prevState => ({
        phone: [...prevState.phone, newPhone],
        addingNewPhone: true
      }), () => {
        this.childPhoneRef.focus()
      })
    }
  }

  showPhoneValidateModal = icorrectNumber => {
    this.setState({ phoneValidateModal: true, icorrectNumber })
  }

  hidePhoneValidateModal = () => {
    const incorrectNumber = this.state.phone.find(i => i.number === this.state.icorrectNumber)
    this.setState({ phoneValidateModal: false, loader: false }, () => {
      document.getElementById(incorrectNumber.id).focus()
    })
  }

  //  gender strip

  handleSelectGender = gender => {
    this.setState({ gender })
    setTimeout(() => {
      this.setState({ openGenderStrip: false })
    }, 300)
  }

  handleClearGender = () => this.setState({ gender: null })

  handleOpenCloseGender = () => this.setState({ openGenderStrip: !this.state.openGenderStrip })

  // address strip

  loadMap = (url, location) => {
    const scriptTag = document.createElement('script')
    scriptTag.src = url
    location.appendChild(scriptTag)
  }

  setAddressInput = input => {
    this.childRef = input
  }

  initMap = () => {
    if (window.google) {
      const input = this.childRef
      const searchBox = new window.google.maps.places.SearchBox(input)
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces()
        this.setState({
          address: places[0].formatted_address
        })
      })
    } else {
      setTimeout(() => {
        this.initMap()
      }, 300)
    }
  }

  delAddress = () => {
    this.setState({ address: '' }, () => {
      this.removeElements()
      this.initMap()
      this.childRef.focus()
    })
  }

  removeElements = () => {
    const elem = document.getElementsByClassName('pac-container')
    const addressStyles = document.getElementsByTagName('style')
    while (elem.length > 0) {
      elem[0].parentNode.removeChild(elem[0])
    }
    while (addressStyles.length > 0) {
      addressStyles[0].parentNode.removeChild(addressStyles[0])
    }
  }

  changeAdress = e => {
    const value = e.target.value
    this.setState({ address: value })
  }

  changeAddressEdit = () => {
    this.setState({ profileAddressEdit: true }, () => {
      this.initMap()
      this.childRef.focus()
    })
  }

  // email strip

  deleteEmail = () => {
    this.setState({ email: '' }, () => {
      document.getElementById('email-input').focus()
    })
  }

  emailEditingMode = () => this.setState({ emailEditing: true }, () => {
    document.getElementById('email-input').focus()
  })

  getEmail = email => this.setState({ email })

  changeMail = e => {
    const emailValue = e.target.value
    this.setState({ email: emailValue })
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

  // birthday strip

  setErrorClassBD = () => {
    this.setState({ errorClass: true })
  }

  validateBD = () => {
    const { year, month, day } = this.state
    if ((!isNaN(+month) && !isNaN(+year) && !isNaN(day)) || !isNaN(+month) || (!isNaN(+year) && !isNaN(+month)) || (!isNaN(+month) && !isNaN(day))) {
      if (!isNaN(+month) && isNaN(+year) && isNaN(day)) {
        this.setState({
          errorClass: false,
          bdError: false,
          birthyear: moment().format('YYYY'),
          birthdate: `${this.state.month}-01`
        }, () => {
          config.data.birthyear = moment().format('YYYY')
          config.data.birthdate = `${this.state.month}-01`
        })
      } else if (!isNaN(+month) && isNaN(+year) && !isNaN(day)) {
        this.setState({
          errorClass: false,
          bdError: false,
          birthyear: moment().format('YYYY'),
          birthdate: `${this.state.month}-${this.state.day}`
        }, () => {
          config.data.birthyear = moment().format('YYYY')
          config.data.birthdate = `${this.state.month}-${this.state.day}`
        })
      } else if (!isNaN(+month) && !isNaN(+year) && !isNaN(day)) {
        this.setState({
          errorClass: false,
          bdError: false,
          birthyear: this.state.birthyear,
          birthdate: `${this.state.month}-${this.state.day}`
        }, () => {
          config.data.birthyear = this.state.birthyear
          config.data.birthdate = `${this.state.month}-${this.state.day}`
        })
      } else if (!isNaN(+month) && !isNaN(+year) && isNaN(day)) {
        this.setState({
          errorClass: false,
          bdError: false,
          birthyear: this.state.birthyear,
          birthdate: `${this.state.month}-01`
        }, () => {
          config.data.birthyear = this.state.birthyear
          config.data.birthdate = `${this.state.month}-01`
        })
      }
    } else {
      this.setState({ bdError: true })
    }
  }

  saveBtn = () => {
    if (this.state.bdError) {
      this.setErrorClassBD()
    } else {
      !this.state.name && this.showNameModal()
      const numbers = this.state.phone.filter(phone => phone.number !== '')
      if (this.state.name) {
        if (numbers.length !== 0) {
          this.saveAll()
        } else this.visibleModal()
      }
    }
  }

  handleChangeYear = event => {
    this.setState({
      year: event.target.value,
      birthyear: event.target.value
    }, () => this.validateBD())
  }

  handleChangeMonth = event => {
    this.setState({
      month: event.target.value
    }, () => this.validateBD())
  }

  handleChangeDay = event => {
    this.setState({
      day: event.target.value
    }, () => this.validateBD())
  }

  deleteBirthday = () => this.setState({
    year: config.translations.datepicker.placeholder.year,
    month: config.translations.datepicker.placeholder.month,
    day: config.translations.datepicker.placeholder.day,
    birthdate: null,
    birthyear: null,
    errorClass: false,
    bdError: false
  })

  changeBirth = () => this.setState({ profileBirthEdit: !this.state.profileBirthEdit })

  // permit ads strip

  handleAds = () => {
    this.setState({ permit_ads: !this.state.permit_ads })
  }

  getArgeement = value => this.setState({ permit_ads: value })

  // buttons SAVE and BACK

  saveAll = () => {
    const checkMail = this.state.email && this.validate(this.state.email)
    const filterPhones = this.state.phone.filter(i => !!i.number)
    const arrPhones = filterPhones.map(item => item.number)
    const checkPhones = arrPhones.some(i => this.validatePhone(i))
    if (!checkPhones && (checkMail || !this.state.email)) {
      this.setState({ loader: true })
      this.sendData()
    }
  }

  sendData = () => {
    const fields = ['name', 'address', 'gender', 'email', 'phone', 'birthdate', 'birthyear']
    const body = fields.reduce((accum, field) => {
      let value = field === 'phone' ? this.getPhonesValue(this.state[field]) : `${this.state[field]}`
      if (field === 'address') value = encodeURIComponent(value)
      if (field === 'name') value = encodeURIComponent(value)
      if (field === 'email') value = encodeURIComponent(value)
      if (!value) value = null
      const result = `${field}=${value}`
      return accum + (accum.length ? `&${result}` : result)
    }, '')
    body && clientPutService(body).then(r => {
      if (r.status === 204) {
        const filterPhones = this.state.phone.filter(i => !!i.number)
        const arrPhones = filterPhones.map(item => item.number)
        config.data.birthdate = this.state.birthdate
        config.data.birthyear = this.state.birthyear
        config.data.phone = arrPhones
        config.data.address = this.state.address
        config.data.email = this.state.email
        config.data.name = this.state.name
        config.data.gender = this.state.gender
        clientNewGetService().then(r => {
          // TODO ask about saving all fields from response data
          config.data.profile_image = r.r.profile_image
          let DataObject = r.r
          for (let key in DataObject) {
            if (fields.includes(key)) {
              config.data[key] = DataObject[key]
            }
          }
          if (DataObject.status) {
            config.data.status = DataObject.status
          }
          this.props.getProfilePicture(config.data.profile_image)
          this.setState({
            ...INITIAL_STATE,
            year: config.data.birthyear ? config.data.birthyear : config.translations.datepicker.placeholder.year,
            day: config.data.birthdate ? config.data.birthdate.slice(3) : config.translations.datepicker.placeholder.day,
            month: config.data.birthdate ? config.data.birthdate.slice(0, 2) : config.translations.datepicker.placeholder.month,
            birthdate: config.data.birthdate ? String(config.data.birthdate) : null,
            birthyear: config.data.birthyear ? String(config.data.birthyear) : null,
            phone: normalizePhones(config.data.phone),
            address: config.data.address || null,
            gender: config.data.gender || null,
            email: config.data.email || null,
            name: config.data.name || null
          })
          this.removeElements()
        })
      } else {
        this.setState({ editProfile: true })
      }
    })
  }

  backAll = () => {
    this.setState({
      year: config.data.birthyear ? config.data.birthyear : config.translations.datepicker.placeholder.year,
      day: config.data.birthdate ? config.data.birthdate.slice(3) : config.translations.datepicker.placeholder.day,
      month: config.data.birthdate ? config.data.birthdate.slice(0, 2) : config.translations.datepicker.placeholder.month,
      birthdate: config.data.birthdate ? String(config.data.birthdate) : null,
      birthyear: config.data.birthyear ? String(config.data.birthyear) : null,
      phone: normalizePhones(config.data.phone),
      address: config.data.address || null,
      gender: config.data.gender || null,
      email: config.data.email || null,
      name: config.data.name || null,
      ...INITIAL_STATE
    })
    this.removeElements()
  }

  resetFields = () => {
    this.setState({
      emailEditing: false,
      profileBirthEdit: false,
      profileAddressEdit: false
    })
  }

  editInfo = () => {
    this.setState({ editProfile: true }, () => {
      if (!window.google) {
        addressService().then(r => {
          const key = r.r.api_key
          this.loadMap(`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&language=${config.locale}`, document.body)
        })
      }
      if (this.childRef) {
        this.initMap()
      }
    })
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
        {(this.state.name || this.state.editProfile) && <Name
          name={this.state.name}
          editProfile={this.state.editProfile}
          onChangeName={this.onChangeName}
          onClearName={this.handleClearName}
        />}
        {(this.state.nameModal || this.state.long_name_warning) && <EmptyDataModal
          text={this.state.long_name_warning ? LongNameText : EmptyNameText}
          show={this.state.nameModal || this.state.long_name_warning}
          onHide={this.cancelNameModal}
        />}
        {(this.state.phone || this.state.editProfile) &&
          <Phones
            editProfile={this.state.editProfile}
            onAddNewPhone={this.handleAddNewPhone}
            phoneBlur={this.phoneBlur}
            setPhoneInput={this.setPhoneInput}
            phoneBlurState={this.state.blurPhone}
            getPhone={this.getPhone}
            getPhoneFromPopup={this.getPhoneFromPopup}
            addingNewPhone={this.state.addingNewPhone}
            deletePhone={this.deletePhone}
            visibleModal={this.state.visibleModal}
            cancelSave={this.cancelSavePhoneModal}
            cancel={this.cancelPhoneModal}
            phones={this.state.phone || []}
            rights={this.props.rights}
          />}
        {this.state.phoneValidateModal && <IncorrectPhone
          show={this.state.phoneValidateModal}
          onHide={this.hidePhoneValidateModal}
          phone={this.state.icorrectNumber}
        />}
        {(this.state.email || this.state.editProfile) &&
          <Email
            editProfile={this.state.editProfile}
            emailEditingMode={this.emailEditingMode}
            emailEditing={this.state.emailEditing}
            deleteEmail={this.deleteEmail}
            email={this.state.email}
            changeMail={this.changeMail}
          />}
        {this.state.activateMailModal && <IncorrectMail
          show={this.state.activateMailModal}
          onHide={this.hideMailModal}
          email={this.state.email}
        />}
        {(this.state.editProfile || config.data.address) &&
          <Address
            profileAddressEdit={this.state.profileAddressEdit}
            changeAddressEdit={this.changeAddressEdit}
            editProfile={this.state.editProfile}
            changeAdress={this.changeAdress}
            address={this.state.address}
            delAddress={this.delAddress}
            setAddressInput={this.setAddressInput}
          />}
        {(this.state.gender || this.state.editProfile) &&
          <Gender
            editProfile={this.state.editProfile}
            openGenderStrip={this.state.openGenderStrip}
            onSelectGender={this.handleSelectGender}
            onOpenCloseGender={this.handleOpenCloseGender}
            onClearGender={this.handleClearGender}
            gender={this.state.gender}
          />}
        {((config.data.birthdate || config.data.birthyear) || this.state.editProfile) &&
          <Birthdate
            editProfile={this.state.editProfile}
            deleteBirthday={this.deleteBirthday}
            bdError={this.state.bdError}
            errorClass={this.state.errorClass}
            profileBirthEdit={this.state.profileBirthEdit}
            changeBirth={this.changeBirth}
            birthdate={this.state.birthdate}
            birthyear={this.state.birthyear}
            handleChangeDay={this.handleChangeDay}
            handleChangeMonth={this.handleChangeMonth}
            handleChangeYear={this.handleChangeYear}
            day={this.state.day}
            year={this.state.year}
            month={this.state.month}
          />}
        {/* {config.data.phone && <Sendlink {...this.props} />} */}
        {/* <Agreement
          editProfile={this.state.editProfile}
          getArgeement={this.getArgeement}
          permit_ads={this.state.permit_ads}
          handleAds={this.handleAds}
          {...this.props} /> */}
      </div>
    )
  }
}
