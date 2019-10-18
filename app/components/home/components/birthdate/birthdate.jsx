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
    if (config.data.birthyear && !config.data.birthdate) {
      return config.data.birthyear
    } else if (config.data.birthyear && config.data.birthdate) {
      return `${config.data.birthyear}-${config.data.birthdate}`
    } else if (!config.data.birthyear && config.data.birthdate) {
      return moment(config.data.birthdate, 'MM-DD').format('MMMM DD')
    }
  }

  render () {
    const { handleChangeYear, handleChangeMonth, handleChangeDay, year, month, day } = this.props
    return (
      <div id='birthdate' className='block'>
        <div className={!this.props.editProfile ? 'wrapBDay' : 'hidden'}>
          <span className='label'>{config.translations.personal_info.birthday_label}:</span>
          <span className='ymd'>
            {
              this.renderBirthDay()
            }
          </span>
        </div>
        {
          (this.props.editProfile && (!config.data.birthdate && !config.data.birthyear))
            ? <div onClick={this.props.changeBirth}
              className={!this.props.profileBirthEdit ? 'add-birth' : 'hidden'}>
              <div className='wrap-birth'>
                <span className='label'>{config.translations.personal_info.birthday_label}:</span>
                <h1>{config.translations.personal_info.add_birth_label}</h1>
              </div>
              <div className='add-info'>
                <div className='add-wrap' onClick={this.delName}>
                  <img src={config.urls.media + 'profile_plus.svg'} />
                </div>
              </div>
            </div> : ''}
        {this.props.editProfile &&
        <div className={(this.props.profileBirthEdit || config.data.birthdate || config.data.birthyear) ? 'birthdate-edit' : 'hidden'}>
          <div className='edit-wrap'>
            {(this.props.profileBirthEdit || (config.data.birthdate || config.data.birthyear)) && 
              <div className='datepicker'>
                <span className='label'>{config.translations.personal_info.birthday_label}:</span>
                <Datepicker
                  handleChangeYear={handleChangeYear}
                  handleChangeMonth={handleChangeMonth}
                  handleChangeDay={handleChangeDay}
                  year={year}
                  month={month}
                  day={day}
                />
              </div>
            }
            <div className='del-info'>
              <div className='del-wrap' onClick={this.props.deleteBirthday}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}
