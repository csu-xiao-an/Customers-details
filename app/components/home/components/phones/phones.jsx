import { default as ModalPhoneLib } from 'project-components/ModalPhoneLib/modal-phone-lib.jsx'
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
  render () {
    return this.props.rights.isPhone && (
      <div id='phones'>
        {this.props.phones.map((i, k) => (
          <Phone
            phones={this.props.phones}
            getPhone={this.props.getPhone}
            phone={i}
            editProfile={this.props.editProfile}
            changePhoneEdit={this.props.changePhoneEdit}
            {...this.props}
          />
        ))}
        <ModalPhoneLib
          text={this.text}
          visibleModal={this.props.visibleModal}
          closeModal={this.props.cancel}
          create={this.create}
          cancelEmpty={this.props.cancelEmpty}
          cancel={this.props.cancel}
          getPhone={this.props.getPhone}
        />
      </div>
    )
  }
}
