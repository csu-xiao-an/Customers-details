import React, { Component } from 'react'
import moment from 'moment'
import './topnav.styl'

const client = window._config

class Topnav extends Component {
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
            <h1>{client.data.name}</h1>
            <h1>({this.age(client.data.birthdate)})</h1>
          </div>
          <div className='edit-wrap'>
            <button className='edit'>{client.translations.edit}</button>
          </div>
        </div>
        <div className='buttons'>
          <div className='customers-wrap'>
            <button className={this.state.customersEnabled ? 'activeCustomers' : ''}>{client.translations.customer}</button>
          </div>
          <div className='appointments-wrap'>
            <button>149 - {client.translations.appointment}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Topnav
