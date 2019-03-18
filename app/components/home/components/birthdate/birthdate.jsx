import {clientReplaceService} from 'project-services'
import {Datepicker} from 'project-components'
import './birthdate.styl'

export default class Birthdate extends React.Component {
  state = {
    birthdateEdit: false,
    birthdate: '',
    birthyear: '',
    day: '',
    month: '',
    year: '',
    del: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  // save = () => {
  //   const { day, month, year } = this.state
  //   const birthdate = day && month && `birthdate=${month}-${day}`
  //   const birthyear = `birthyear=${year}`
  //   if (birthdate || birthyear) {
  //     clientReplaceService([birthyear, birthdate].filter(i => i).join('&')).then(r => {
  //       if (r.status === 204) {
  //         this.setState({
  //           configValue: `${year}-${day && month && month}-${day && month && day}`,
  //           configValue1: `${year}-${day && month && month}-${day && month && day}`,
  //           birthdateEdit: false
  //         })
  //       }
  //     })
  //   }
  // }
  // save1 = () => {
  // const { day, month, year } = this.state
  // const birthdate = day && month && `birthdate=${month}-${day}`
  // const birthyear = `birthyear=${year}`
  // if (birthdate || birthyear) {
  //   this.setState({
  //     configValue1: ''
  //   })
  //   config.data.birthdate = ''
  //   config.data.birthyear = ''
  // }
  validation = (value, max) => (value < 0 && 1) || (value >= max && max) || (+value && `${+value}`.padStart(2, '0')) || ''
  changeDay = ({target}) => {
    target.value = this.validation(target.value, 31)
    this.setState({day: target.value})
  }
  changeMonth = ({target}) => {
    target.value = this.validation(target.value, 12)
    this.setState({month: target.value})
  }
  changeYear = ({target}) => {
    const currentYear = moment().year()
    target.value = (target.value < 0 && 1) || (target.value >= currentYear && currentYear) || (+target.value && target.value) || ''
    this.setState({year: target.value})
  }
  getBirthdate = value => this.setState({birthdate: value}, () => this.props.getBdate(this.state.birthdate))
  getBirthyear = value => this.setState({birthyear: value}, () => this.props.getByear(this.state.birthyear))
  getHandleDay = value => this.setState({day: value})
  getHandleMonth = value => this.setState({month: value})
  getHandleYear = value => this.setState({year: value})
  delInfo = () => {
    this.setState({birthdate: null, birthyear: null, del: true}, () => this.props.getDATE(this.state.birthdate, this.state.birthyear))
  }
  render () {
    let newDays = this.props.changeDays
    return (
      <div id='birthdate' className='block'>
        <div className={!this.props.editProfile ? 'wrapBDay' : 'hidden'}>
          <span className='label'>{config.translations.birthday}:</span>
          <span>
            {(config.data.birthyear ? config.data.birthyear : '') + ((config.data.birthyear && config.data.birthdate) ? '-' : '') + (config.data.birthdate ? config.data.birthdate : '')}
          </span>
        </div>
        {
          (this.props.editProfile && (!config.data.birthdate && !config.data.birthyear)) 
            ? <div onClick={() => this.props.changeBirth()}
              className={!this.props.profileBirthEdit ? 'add-birth' : 'hidden'}>
              <div className='wrap-birth'>
                <span className='label'>{config.translations.birthday}:</span>
                <h1>{config.translations.add_birth}</h1>
              </div>
              <div className='add-info'>
                <div className='add-wrap' onClick={this.delName}>
                  <img src={config.urls.media + 'profile_plus.svg'} />
                </div>
              </div>
              {/* <img src={config.urls.media + 'profile_add_field.svg'} /> */}
            </div> : ''}
        {this.props.editProfile &&
        <div className={(this.props.profileBirthEdit || config.data.birthdate || config.data.birthyear) ? 'birthdate-edit' : 'hidden'}>
          <div className='edit-wrap'>
            <span className='label'>{config.translations.birthday}:</span>
            <Datepicker
              defaultValue={this.state.configValue} 
              defaultValue1={this.state.configValue1} 
              getBirthdate={this.getBirthdate} 
              getBirthyear={this.getBirthyear}
              newDays={newDays}
              birthdate={this.state.birthdate}
              birthyear={this.state.birthyear}
              defaultBirthday
              delInfo={this.delInfo}
              del={this.state.del}
              // delBirth={this.props.delBirth}
              deleteBirthday={this.props.deleteBirthday}
              getHandleDay={this.getHandleDay}
              getHandleMonth={this.getHandleMonth}
              getHandleYear={this.getHandleYear}
            />
          </div>
          <div className='del-info'>
            <div className='del-wrap' onClick={this.delInfo}>
              <img src={config.urls.media + 'plus2.svg'} />
            </div>
          </div>
        </div>}
      </div>
    )
  }
}
