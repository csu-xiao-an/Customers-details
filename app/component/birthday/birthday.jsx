import React from 'react'
import './birthday.styl'

const ALL_YEARS_IN_MILISEC = 31557600000
const ALL_DAYS_IN_MILISEC = 86400000

class Birthday extends React.Component {
  constructor () {
    super()
    this.state = {
      birthdate: window._config.data.birthdate,
      birthdayStatus: ''
    }
  }
  getBirthdaysStatus (birthdate) {
    const age = Math.round((new Date().getTime() - new Date(birthdate)) / ALL_YEARS_IN_MILISEC) * ALL_YEARS_IN_MILISEC
    const birthday = new Date(birthdate).getTime() + age
    const currentDate = new Date().getTime()
    const dayLeft = Math.ceil((birthday.valueOf() - currentDate.valueOf()) / ALL_DAYS_IN_MILISEC)
    const day = {
      '-1': 'Yesterday',
      '1': 'Tomorrow',
      '0': 'Today'
    }
    let birthdayStatus
    if (day[dayLeft]) {
      birthdayStatus = day[dayLeft]
    } else if (dayLeft < 8 && dayLeft > 1) {
      birthdayStatus = 'In ' + dayLeft + ' days'
    } else if (dayLeft > -8 && dayLeft < -1) {
      birthdayStatus = dayLeft * -1 + ' days ago'
    }
    return birthdayStatus
  }
  componentDidMount () {
    this.setState({birthdayStatus: this.getBirthdaysStatus(this.state.birthdate)})
  }
  render () {
    return (
      <div id={this.state.birthdayStatus === undefined ? 'birthday-wrap-disabled' : 'birthday-wrap'}><h1>{this.state.birthdayStatus}</h1></div>
    )
  }
}
export default Birthday
