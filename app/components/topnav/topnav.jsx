import React, { Component } from 'react'
import moment from 'moment'
import './topnav.styl'

class Topnav extends Component {
  age (date) {
    return Math.floor(moment.duration(moment() - moment(date)).asYears())
  }
  countAppointment () {
    let count = 0
    config.data.recent_appoinments.forEach(el => {
      el.procedures.forEach(() => { count++ })
    })
    return count
  }
  render () {
    return (
      <div id='topnav'>
        <div className='header'>
          <div className='arrow-wrap'>
            <img className='arrow-back' src='./dist/media/arrow-back.svg' />
          </div>
          <div className='client-name'>
            <div className='icon-online' />
            <h1>{config.data.name}</h1>
            <h1>({this.age(config.data.birthdate)})</h1>
          </div>
          <div className='edit-wrap'>
            <button className='edit'>{config.translations.edit}</button>
          </div>
        </div>
        <div className='buttons'>
          <div className='customers-wrap'>
            <button>{config.translations.customer}</button>
          </div>
          <div className='appointments-wrap'>
            <button >{this.countAppointment()} - {config.translations.appointment}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Topnav
