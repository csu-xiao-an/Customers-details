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
      debt: 0
    }
    this.toogleDebt = this.toogleDebt.bind(this)
    this.submit = this.submit.bind(this)
    this.plus = this.plus.bind(this)
    this.minus = this.minus.bind(this)
  }
  toogleDebt () {
    this.setState({debtEdit: !this.state.debtEdit})
  }
  submit () {
    this.setState({debtEdit: !this.state.debtEdit})
  }
  handleChangeDescription (event) {
    this.setState({description: event.target.value})
  }
  handleChangeDebt (event) {
    this.setState({debt: +event.target.value})
  }
  plus () {
    this.setState({debt: this.state.debt + 10})
  }
  minus () {
    this.setState({debt: this.state.debt - 10})
  }
  render () {
    return (
      <div id='debt'>
        <div onClick={this.toogleDebt} className={this.state.debtEdit ? 'hidden' : 'debt-default'}>
          <img src='./app/components/media/add.svg' />
          <h1>{client.translations.add_debt}</h1>
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className='debt-label'>{client.translations.debt}: <span className='count-debt'>{this.state.total_debt}</span></div>
          <div className='edit'>
            <div className='description'>
              <input className='description-input' type='text' value={this.state.description} onChange={event => this.handleChangeDescription(event)} />
              <h1 className='description-label'>{client.translations.description_debt}</h1>
            </div>
            <div className='count'>
              <button onClick={this.submit}>{client.translations.save}</button>
              <div onClick={this.plus} className='ink'><span >+</span></div>
              <input className='count-input' type='number' value={this.state.debt} onChange={event => this.handleChangeDebt(event)} />
              <div onClick={this.minus} className='ink'><span className='minus'>-</span></div>
              <h3>{client.translations.amount}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Debt
