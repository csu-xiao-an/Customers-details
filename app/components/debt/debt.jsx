import React, { Component } from 'react'
import './debt.styl'

const client = window._config

class Debt extends Component {
  constructor () {
    super()
    this.state = {
      debtEdit: false,
      description: '',
      total_debt: 0,
      debt: '0',
      arr: [
        {
          debt: 20,
          description: 'mac',
          date: '13:51 | 7 July'
        }
      ]
    }
    this.submit = this.submit.bind(this)
  }
  submit () {
    this.setState({debtEdit: !this.state.debtEdit})
  }
  price () {
    let sum = 0
    this.state.arr.forEach(el => {
      sum += el.debt
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
        <div className={this.state.arr.length > 0 ? 'label-wrap' : 'hidden'}>
          <div className='debt-label'>{client.translations.debt}: <span className='count-debt'>{this.price()}</span></div>
        </div>
        {this.state.arr.map((el, key) => {
          return (
            <div key={key} className='debt-list'>
              <h1 className='debt-list-name'>{el.debt} {client.data.currency}</h1>
              <h1 className='debt-list-desc'>{el.description}</h1>
              <p className='debt-list-date'>{el.date}</p>
            </div>
          )
        })}
        <div onClick={() => { this.setState({debtEdit: !this.state.debtEdit}) }}
          className={this.state.debtEdit ? 'hidden' : 'debt-default'}>
          <img src='./app/components/media/add.svg' />
          <h1>{client.translations.add_debt}</h1>
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className={this.state.arr.length > 0 ? 'hidden' : 'label-wrap'}>
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
export default Debt
