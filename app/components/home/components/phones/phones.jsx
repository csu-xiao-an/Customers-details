import Phone from '../phone/phone.jsx'
import './phones.styl'

export default class Phones extends React.Component {
  constructor (props) {
    super(props)
    this.text = {
      cancel_modal: config.translations.personal_info_editing.skip,
      not_found_title: config.translations.personal_info_editing.not_found_title,
      save: config.translations.personal_info_editing.save,
      enter_phone_number: config.translations.personal_info_editing.enter_phone_number,
      phone_number: config.translations.personal_info_editing.phone_number
    }
  }
  state = {
    phoneEdit: false,
    phone: [],
    phoneValue: '',
    error: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentDidMount = () => {
    this.setState({phone: this.props.phones})
  }
  delInfo = () => {
    this.setState({phone: ''}, () => this.props.deletePhone())
    document.getElementById('phone-input').focus()
  }
  getNumbers = phone => {
    this.props.getPhone(phone)
  }
  focus = value => {
    this.setState({ phoneValue: value })
  }
  render () {
    return this.props.rights.isPhone && (
      <div id='phones'>
        {this.props.phones.map((i, k) => (
          <Phone
            phones={this.props.phones}
            getNumbers={this.getNumbers}
            phone={i}
            editProfile={this.props.editProfile}
            changePhoneEdit={this.props.changePhoneEdit}
            {...this.props}
          />
        ))}
      </div>
    )
  }
}
