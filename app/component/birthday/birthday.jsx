import React from 'react'
import './birthday.styl'

class Birthday extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      birthdate: window._config.data.birthdate,
      birthdayStatus: ''
    }
  }
  componentDidMount () {
    const date = '2017-06-18'
    // const age = ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000))
    // console.log(age * 365.2564)
    // const birthdate = new Date(this.state.birthdate).getTime()
    const birthdate = new Date(date).getTime()
    const curentDate = new Date().getTime()
    const dayLeft = Math.ceil((birthdate.valueOf() - curentDate.valueOf()) / 86400000)
    //  + Math.ceil(Math.round(age) * 365)
    // console.log(Math.ceil((birthdate.valueOf() - curentDate.valueOf()) / 86400000))
    // console.log(Math.ceil(Math.round(age) * 365.2564))
    // console.log(dayLeft)
    if (dayLeft < 8 && dayLeft > 1) {
      this.setState({birthdayStatus: 'In ' + dayLeft + ' days'})
    } else if (dayLeft > -8 && dayLeft < -1) {
      this.setState({birthdayStatus: dayLeft * -1 + ' days ago'})
    } else if (dayLeft === -1) {
      this.setState({birthdayStatus: 'Yesterday'})
    } else if (dayLeft === 1) {
      this.setState({birthdayStatus: 'Tomorrow'})
    } else if (dayLeft === 0) {
      this.setState({birthdayStatus: 'Today'})
    }
  }
  render () {
    return (
      <div id={this.state.birthdayStatus === '' ? 'birthday-wrap-disabled' : 'birthday-wrap'}><h1>{this.state.birthdayStatus}</h1></div>
    )
  }
}
export default Birthday
