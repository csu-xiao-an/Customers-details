import moment from 'moment'
import React from 'react'
import './topnav.styl'
import { Language } from 'project-components'

const lang = window._config.language
const client = window._config.data

class Topnav extends React.Component {
  constructor () {
    super()
    this.state = {
      customersEnabled: true
    }
  }
  age (date) {
    return Math.floor(moment.duration(moment() - moment(date)).asYears())
  }
  render () {
    return (
      <div id='topnav'>
        <div className='header'>
          <div className='arrow-wrap'>
            <img className='arrow-back' src='./app/components/media/arrow-back.svg' />
          </div>
          <div className='client-name'>
            <div className='icon-online' />
            <h1>{client.name}</h1>
            <h1>({this.age(client.birthdate)})</h1>
          </div>
          <div className='edit-wrap'>
            <button className='edit'>{Language(lang).edit}</button>
          </div>
        </div>
        <div className='buttons'>
          <div className='customers-wrap'>
            <button className={this.state.customersEnabled ? 'activeCustomers' : ''}>Customer details</button>
          </div>
          <div className='appointments-wrap'>
            <button>149 - Appointments</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Topnav
