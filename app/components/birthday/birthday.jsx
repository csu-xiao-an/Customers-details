import { birthdaysStatus } from 'project-components'
import React from 'react'
import './birthday.styl'

class Birthday extends React.Component {
  constructor () {
    super()
    this.state = {
      birthdate: config.data.birthdate,
      birthdayStatus: ''
    }
  }
  componentDidMount () {
    this.setState({birthdayStatus: birthdaysStatus(this.state.birthdate)})
  }
  render () {
    return (
      <div id={this.state.birthdayStatus === undefined ? 'birthday-wrap-disabled' : 'birthday-wrap'} className={config.isRtL ? 'birthday-wrap-right' : 'birthday-wrap-left'}><h1>{this.state.birthdayStatus}</h1></div>
    )
  }
}
export default Birthday
