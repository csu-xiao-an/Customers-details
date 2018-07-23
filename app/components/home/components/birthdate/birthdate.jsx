import {clientReplaceService} from 'project-services'
import './birthdate.styl'

export default class Birthdate extends React.Component {
  state = {
    birthdateEdit: false,
    day: '',
    month: '',
    year: '',
    configValue: config.data.birthdate && config.data.birthyear
      ? `${config.data.birthyear}-${config.data.birthdate}`
      : config.data.birthdate || config.data.birthyear
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  save = () => {
    const { day, month, year } = this.state
    const birthdate = day && month && `birthdate=${month}-${day}`
    const birthyear = `birthyear=${(year < 1900 && moment().year()) || year}`
    if (birthdate || birthyear) {
      clientReplaceService([birthyear, birthdate].filter(i => i).join('&')).then(r => {
        if (r.status === 204) {
          this.setState({
            day: day && month && day.padStart(2, '0'),
            month: day && month && month.padStart(2, '0'),
            year: (year < 1900 && moment().year()) || year
          })
          this.setState({birthdateEdit: this.state.birthdateEdit})
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
        <div className={this.state.configValue ? this.state.birthdateEdit ? 'hidden' : 'wrapBDay' : 'hidden'}>
          <span className='label'>{config.translations.birthday}:</span>
          <span>
            {moment(this.state.configValue).format(
              `${config.data.birthyear ? 'YYYY' : ''} ${config.data.birthdate ? 'MMMM Do' : ''}`
            )}
          </span>
        </div>
        {!this.state.configValue && <div className='birthdate-edit'>
          <div className='edit-wrap'>
            <span className='label'>{config.translations.birthday}:</span>
            <div className='input-wrap'>
              <input type='number' placeholder='MM' min={1} max={12} value={this.state.month} onChange={this.changeMonth} />
              <input type='number' placeholder='DD' min={1} max={31} value={this.state.day} onChange={this.changeDay} />
              <input type='number' placeholder='YYYY' min={1900} max={moment().year()} value={this.state.year} onChange={this.changeYear} />
            </div>
          </div>
          <div className='button'><button onClick={this.save}>{config.translations.save}</button></div>
        </div>}
      </div>
    )
  }
}
