import { updateService } from 'project-services'
import React, { Component } from 'react'
import './debts.styl'
import moment from 'moment'

const client = window._config

class Debts extends Component {
  constructor () {
    super()
    this.state = {
      debtReplace: false,
      description: '',
      debtEdit: false,
      total_debt: 0,
      debt: '0',
      debt_id: 0
    }
    this.submit = this.submit.bind(this)
    this.update = this.update.bind(this)
  }
  async submit () {
    const url = client.urls.main + client.data.id + '/dept'
    const method = 'POST'
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    await updateService(url, method, body)
    this.setState({debtEdit: !this.state.debtEdit, description: '', debt: '0'})
  }
  async update () {
    const url = client.urls.main + client.data.id + '/dept/' + this.state.debt_id
    const method = 'PUT'
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    await updateService(url, method, body)
    this.setState({debtReplace: !this.state.debtReplace, debtEdit: !this.state.debtEdit, description: '', debt: '0', debt_id: 0})
  }
  async delete (id) {
    const url = client.urls.main + client.data.id + '/dept/' + id
    const method = 'DELETE'
    await updateService(url, method)
  }
  price () {
    let sum = 0
    client.data.debts.forEach(el => {
      sum += el.sum
    })
    if (sum === 0 || isNaN(sum)) {
      return 0
    } else {
      return sum
    }
  }
  viewDate (date) {
    const months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    }
    return (moment(date).hours() + ':' + moment(date).format('mm') + ' | ' +
      moment(date).date() + ' ' + months[moment(date).month()]
    )
  }
  render () {
    return (
      <div id='debt'>
        <div className={client.data.debts.length > 0 ? 'label-wrap' : 'hidden'}>
          <div className='debt-label'>{client.translations.debt}: <span className='count-debt'>{this.price()}</span></div>
        </div>
        {client.data.debts.map((el, key) => {
          return (
            <div key={key} className={this.state.debtReplace ? 'hidden' : 'debt-list'}>
              <div className='debt-list-delete-wrap'>
                <img className='debt-list-delete' src={client.urls.media + 'add.svg'} onClick={() => { this.delete(el.id) }} />
              </div>
              <div className='debt-list-data-wrap' onClick={() => {
                this.setState({
                  debtReplace: !this.state.debtReplace,
                  debtEdit: !this.state.debtEdit,
                  description: el.desc,
                  debt: el.sum,
                  debt_id: el.id
                })
              }}>
                <h1 className='debt-list-name'>{el.sum} {client.data.currency}</h1>
                <h1 className='debt-list-desc'>{el.desc}</h1>
                <p className='debt-list-date'>{this.viewDate(el.date)}</p>
              </div>
            </div>
          )
        })}
        <div onClick={() => { this.setState({debtEdit: !this.state.debtEdit}) }}
          className={this.state.debtEdit ? 'hidden' : 'debt-default'}>
          <img src={client.urls.media + 'add.svg'} />
          <h1>{client.translations.add_debt}</h1>
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className={client.data.debts.length > 0 ? 'hidden' : 'label-wrap'}>
            <div className='debt-label'>{client.translations.debt}: <span className='count-debt'>{this.state.total_debt}</span></div>
          </div>
          <div className='edit'>
            <div className='description'>.
              <input className='description-input' type='text' value={this.state.description}
                onChange={event => { this.setState({description: event.target.value}) }}
              />
              <h1 className='description-label'>{client.translations.description_debt}</h1>
            </div>
            <div className='count'>
              <button onClick={this.state.debtReplace ? this.update : this.submit}>{client.translations.save}</button>
              <div className='ink' onClick={() => this.setState({debt: parseInt(this.state.debt) + client.data.debt_step})}>
                <span>+</span>
              </div>
              <input className='count-input' type='number'
                value={this.state.debt} onChange={event => { this.setState({debt: +event.target.value}) }}
                onFocus={event => { toString(event.target.value); if (event.target.value === '0') { event.target.value = '' } }}
                onBlur={event => { toString(event.target.value); if (event.target.value === '') { event.target.value = '0' } }}
              />
              <div className='ink' onClick={() => this.setState({debt: parseInt(this.state.debt) - client.data.debt_step})}>
                <span className='minus'>-</span>
              </div>
              <h3>{client.translations.amount}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Debts
