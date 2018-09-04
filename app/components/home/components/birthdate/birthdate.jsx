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
      : config.data.birthyear || config.data.birthdate
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  save = () => {
    const { day, month, year } = this.state
    const birthdate = day && month && `birthdate=${month}-${day}`
    const birthyear = `birthyear=${year}`
    if (birthdate || birthyear) {
      clientReplaceService([birthyear, birthdate].filter(i => i).join('&')).then(r => {
        if (r.status === 204) {
          this.setState({
            configValue: `${year}-${day && month && month}-${day && month && day}`,
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
        <div className={this.state.configValue ? this.state.birthdateEdit ? 'hidden' : 'wrapBDay' : 'hidden'}>
          <span className='label'>{config.translations.birthday}:</span>
          <span onClick={this.props.rights.birthdate.edit
            ? () => this.setState({birthdateEdit: !this.state.birthdateEdit})
            : () => {}}>
            {moment(this.state.configValue).format(
              'YYYY-MM-DD'
            )}
          </span>
        </div>
        <div className={this.state.birthdateEdit ? 'birthdate-edit' : 'hidden'}>
          <div className='edit-wrap'>
            <span className='label'>{config.translations.birthday}:</span>
            <ComboDatePicker
              order='ymd'
              placeholder='Year,Month,Date'
              date={this.state.configValue}
              onChange={(e, date) => {
                this.setState({
                  configValue: moment(date).format('YYYY-MM-DD'),
                  day: moment(date).format('DD'),
                  month: moment(date).format('MM'),
                  year: moment(date).format('YYYY')
                })
              }}
            />
          </div>
          <div className='button'><button onClick={this.save}>{config.translations.save}</button></div>
        </div>
      </div>
    )
  }
}
