import {clientReplaceService} from 'project-services'
import {Datepicker} from 'project-components'
import './birthdate.styl'

export default class Birthdate extends React.Component {
  state = {
    birthdateEdit: false,
    day: '',
    month: '',
    year: '',
    configValue: config.data.birthdate && config.data.birthyear
      ? `${config.data.birthyear}-${config.data.birthdate}`
      : ((!!config.data.birthyear) ? (`${config.data.birthyear}-${!!config.data.birthdate ? config.data.birthdate : moment().format('MM-DD')}`)
        : `${moment().format('YYYY')}-${!!config.data.birthdate ? config.data.birthdate : moment().format('MM-DD')}`),
    configValue1: config.data.birthdate && config.data.birthyear
      ? `${config.data.birthyear}${config.data.birthdate}`
      : ((!!config.data.birthyear) ? (`${config.data.birthyear}${!!config.data.birthdate ? config.data.birthdate : ''}`)
        : `${''}${!!config.data.birthdate ? config.data.birthdate : ''}`)
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  getBirthdate = value => this.setState({birthdate: value})
  getBirthyear = value => this.setState({birthyear: value})
  getHandleDay = value => this.setState({day: value})
  getHandleMonth = value => this.setState({month: value})
  getHandleYear = value => this.setState({year: value})
  save = () => {
    const { day, month, year } = this.state
    const birthdate = day && month && `birthdate=${month}-${day}`
    const birthyear = `birthyear=${year}`
    if (birthdate || birthyear) {
      clientReplaceService([birthyear, birthdate].filter(i => i).join('&')).then(r => {
        if (r.status === 204) {
          this.setState({
            configValue: `${year}-${day && month && month}-${day && month && day}`,
            configValue1: `${year}-${day && month && month}-${day && month && day}`,
            birthdateEdit: false
          })
        }
      })
    }
  }
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
  render () {
    return (
      <div id='birthdate' className='block'>
        <div className={this.state.configValue1 ? this.state.birthdateEdit ? 'hidden' : 'wrapBDay' : 'hidden'}>
          <span className='label'>{config.translations.birthday}:</span>
          <span>
            {this.state.configValue}
          </span>
        </div>
        {
          !this.state.birthdateEdit && !this.state.configValue1 &&
          <div onClick={() => this.setState({birthdateEdit: !this.state.birthdateEdit})}
            className={!this.state.configValue1 || this.state.birthdateEdit ? 'add-birth' : 'hidden'}>
            <div className='wrap-birth'>
              <span className='label'>{config.translations.birthday}:</span>
              <h1>{config.translations.add_birth}</h1>
            </div>
            <img src={config.urls.media + 'add.svg'} />
          </div>
        }
        <div className={this.state.birthdateEdit ? 'birthdate-edit' : 'hidden'}>
          <div className='edit-wrap'>
            <span className='label'>{config.translations.birthday}:</span>
            <Datepicker defaultValue={this.state.configValue} 
              defaultValue1={this.state.configValue1} 
              getBirthdate={this.getBirthdate} 
              getBirthyear={this.getBirthyear}
              getHandleDay={this.getHandleDay}
              getHandleMonth={this.getHandleMonth}
              getHandleYear={this.getHandleYear}
            />
          </div>
          {/* <div className='button'><button onClick={this.save}>{config.translations.save}</button></div> */}
        </div>
      </div>
    )
  }
}
