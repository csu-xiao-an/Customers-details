import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import './topnav.styl'

const client = window._config

class Topnav extends Component {
  age (date) {
    return Math.floor(moment.duration(moment() - moment(date)).asYears())
  }
  countAppointment () {
    let count = 0
    client.data.recent_appoinments.forEach(el => {
      el.procedures.forEach(() => { count++ })
    })
    return count
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
            <Link to={client.urls.home} activeClassName='active' >
              <button>{client.translations.customer}</button>
            </Link>
          </div>
          <div className='appointments-wrap'>
            <Link to={client.urls.appointments} activeClassName='active' >
              <button >{this.countAppointment()} - {client.translations.appointment}</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Topnav
