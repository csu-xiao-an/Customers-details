import { getBirthdaysStatus } from 'project-components'
import React from 'react'
import './birthday.styl'

class Birthday extends React.Component {
  constructor () {
    super()
    this.state = {
      birthdate: window._config.data.birthdate,
      birthdayStatus: ''
    }
  }
  componentDidMount () {
    this.setState({birthdayStatus: getBirthdaysStatus(this.state.birthdate)})
  }
  render () {
    return (
      <div id={this.state.birthdayStatus === undefined ? 'birthday-wrap-disabled' : 'birthday-wrap'}><h1>{this.state.birthdayStatus}</h1></div>
    )
  }
}
export default Birthday
