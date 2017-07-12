import { requestPutService } from 'project-services'
import React, { Component } from 'react'
import './debts.styl'

const client = window._config

class Debts extends Component {
  constructor () {
    super()
    this.state = {
      debtEdit: false,
      description: '',
      total_debt: 0,
      debt: '0'
    }
    this.submit = this.submit.bind(this)
  }
  async submit () {
    this.setState({debtEdit: !this.state.debtEdit})
    const url = client.urls.main + client.data.id + '/dept'
    const method = 'POST'
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    await requestPutService(url, method, body)
    this.setState({description: '', debt: '0'})
  }
  async update () {
    const url = client.urls.main + client.data.id + '/dept'
    const method = 'PUT'
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    await requestPutService(url, method, body)
    this.setState({description: '', debt: '0'})
  }
  async delete () {
    const url = client.urls.main + client.data.id + '/dept'
    const method = 'DELETE'
    await requestPutService(url, method)
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
  render () {
    return (
      <div id='debt'>
        <div className={client.data.debts.length > 0 ? 'label-wrap' : 'hidden'}>
          <div className='debt-label'>{client.translations.debt}: <span className='count-debt'>{this.price()}</span></div>
        </div>
        {client.data.debts.map((el, key) => {
          return (
            <div key={key} className='debt-list'>
              <h1 className='debt-list-name'>{el.sum} {client.data.currency}</h1>
              <h1 className='debt-list-desc'>{el.desc}</h1>
              <p className='debt-list-date'>{el.date}</p>
            </div>
          )
        })}
        <div onClick={() => { this.setState({debtEdit: !this.state.debtEdit}) }}
          className={this.state.debtEdit ? 'hidden' : 'debt-default'}>
          <img src='./dist/media/add.svg' />
          <h1>{client.translations.add_debt}</h1>
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className={client.data.debts.length > 0 ? 'hidden' : 'label-wrap'}>
            <div className='debt-label'>{client.translations.debt}: <span className='count-debt'>{this.state.total_debt}</span></div>
          </div>
          <div className='edit'>
            <div className='description'>
              <input className='description-input' type='text' value={this.state.description}
                onChange={event => { this.setState({description: event.target.value}) }}
              />
              <h1 className='description-label'>{client.translations.description_debt}</h1>
            </div>
            <div className='count'>
              <button onClick={this.submit}>{client.translations.save}</button>
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
