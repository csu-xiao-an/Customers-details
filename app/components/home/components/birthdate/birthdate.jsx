import { default as Datepicker } from 'project-components/Datepicker/datepicker.jsx'
import './birthdate.styl'
export default class Birthdate extends React.Component {
  state = {
    birthdateEdit: false
  }

  static propTypes = {
    rights: PropTypes.object.isRequired
  }

  renderBirthDay = () => {
    const months = config.translations.dates.months
    const monthVerbal = months[moment(this.props.month).get('month')]
    const day = isNaN(this.props.day) ? '01' : this.props.day

    if (this.props.birthyear && !this.props.birthdate) {
      return this.props.birthyear
    } else if (this.props.birthyear && this.props.birthdate) {
      return config.translations.personal_info.birthdate_format.replace('{month}', monthVerbal).replace('{day}', day).replace('{year}', this.props.birthyear)
    } else if (!this.props.birthyear && this.props.birthdate) {
      return `${monthVerbal} ${day}`
    }
  }

  render () {
    const {editProfile, bdError, errorClass, handleChangeYear, handleChangeMonth, handleChangeDay, year, month, day } = this.props
    return (
      <div id='birthdate' className={errorClass ? ' errorBorder' : ''}>
        {!editProfile && <div className='wrapBDay'>
          <span className='label'>{config.translations.personal_info.birthday_label}</span>
          <span className='ymd'>
            {this.renderBirthDay()}
          </span>
        </div>}
        {
          (editProfile && !this.props.profileBirthEdit && (!config.data.birthdate && !config.data.birthyear))
            ? <div onClick={this.props.changeBirth}
              className='add-birth'>
              <div className='wrap-birth'>
                <span className='label'>{config.translations.personal_info.birthday_label}</span>
                <span className='add-label'>{config.translations.personal_info_editing.add_birth_label}</span>
              </div>
              <div className='add-info'>
                <div className='add-wrap' onClick={this.delName}>
                  <img src={config.urls.media + 'profile_plus.svg'} />
                </div>
              </div>
            </div> : ''}
        {editProfile && (this.props.profileBirthEdit || config.data.birthdate || config.data.birthyear) &&
          <div className='edit-wrap'>
            <div className='datepicker'>
              <span className={'label ' + (errorClass ? 'error-span' : '')}>{errorClass ? config.translations.personal_info_editing.birthday_label_error : config.translations.personal_info.birthday_label}</span>
              <Datepicker
                handleChangeYear={handleChangeYear}
                handleChangeMonth={handleChangeMonth}
                handleChangeDay={handleChangeDay}
                year={year}
                month={month}
                day={day}
              />
            </div>
            <div className='del-info'>
              <div className='del-wrap' onClick={this.props.deleteBirthday}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>
          </div>}
      </div>
    )
  }
}
