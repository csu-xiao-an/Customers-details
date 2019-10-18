import { default as Datepicker } from 'project-components/Datepicker/datepicker.jsx'
import './birthdate.styl'
export default class Birthdate extends React.Component {
  state = {
    birthdateEdit: false,
    min: '1930',
    max: moment().format('YYYY')
  }

  static propTypes = {
    rights: PropTypes.object.isRequired
  }

  renderOptionsYear = () => {
    const arr = []
    for (let i = this.state.min; i <= this.state.max; i++) {
      arr.push(i)
    }
    return (
      arr.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))
    )
  }

  renderOptionsMonth = () => {
    moment.locale(config.locale)
    let arr = []
    for (let index = 0; index < 12; index++) {
      let months = moment().set('month', index).format('MMMM')
      arr.push(months.charAt(0).toUpperCase() + months.slice(1))
    }
    let res = arr.map((opt, index) => {
      let indexStr = (index + 1) + ''
      if (indexStr.length < 2) indexStr = 0 + indexStr
      return (
        <option key={opt} value={indexStr}>
          {opt}
        </option>
      )
    }
    )
    return res
  }

  renderOptionsDay = () => {
    let arr = []
    let month = this.props.month && !isNaN(+this.props.month) ? this.props.month : '01'
    for (let i = 0; i < moment(month, 'MM').daysInMonth(); i++) {
      let day = (i + 1) + ''
      if (day.length < 2) day = 0 + day
      arr.push(day)
    }
    let res = arr.map((opt, index) => {
      let indexStr = (index + 1) + ''
      if (indexStr.length < 2) indexStr = 0 + indexStr
      return (
        <option key={opt} value={indexStr}>
          {opt}
        </option>
      )
    }
    )
    return res
  }

  render () {
    return (
      <div id='birthdate' className='block'>
        <div className={!this.props.editProfile ? 'wrapBDay' : 'hidden'}>
          <span className='label'>{config.translations.personal_info.birthday_label}:</span>
          <span className='ymd'>
            {(config.data.birthyear ? config.data.birthyear : '') + ((config.data.birthyear && config.data.birthdate) ? '-' : '') + (config.data.birthdate ? config.data.birthdate : '')}
          </span>
        </div>
        {
          (this.props.editProfile && (!config.data.birthdate && !config.data.birthyear)) 
            ? <div onClick={() => this.props.changeBirth()}
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
            // <Datepicker
            //   defaultValue={this.state.configValue} 
            //   defaultValue1={this.state.configValue1} 
            //   getBirthdate={this.getBirthdate} 
            //   getBirthyear={this.getBirthyear}
            //   birthdate={this.state.birthdate}
            //   birthyear={this.state.birthyear}
            //   defaultBirthday
            //   getHandleDay={this.getHandleDay}
            //   getHandleMonth={this.getHandleMonth}
            //   getHandleYear={this.getHandleYear}
            // />
            <div className='datepicker'>
                <span className='label'>{config.translations.personal_info.birthday_label}:</span>
                <div className='picker-wrap'>
                  <select className='year' value={this.props.year} onChange={this.props.handleChangeYear}>
                    <option value={config.translations.datepicker.placeholder.year} disabled>{config.translations.datepicker.placeholder.year}</option>
                    {
                      this.renderOptionsYear()
                    }
                  </select>

                  <select className='month' value={this.props.month} onChange={this.props.handleChangeMonth}>
                    <option value={config.translations.datepicker.placeholder.month} disabled>{config.translations.datepicker.placeholder.month}</option>
                    {
                      this.renderOptionsMonth()
                    }
                  </select>
                  <select className='day' value={this.props.day} onChange={this.props.handleChangeDay}>
                    <option value={config.translations.datepicker.placeholder.day} disabled>{config.translations.datepicker.placeholder.day}</option>
                    {
                      this.renderOptionsDay()
                    }
                  </select>
                </div>
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
