import { debtPostService, debtReplaceService, debtDeleteService } from 'project-services'
import { formatDate } from 'project-components'
import React, { Component } from 'react'
import moment from 'moment'
import './debts.styl'

class Debts extends Component {
  constructor () {
    super()
    this.state = {
      debtReplace: false,
      description: '',
      debtEdit: false,
      total_debt: 0,
      debt_id: 0,
      debt: '0',
      key: 0
    }
    this.submit = this.submit.bind(this)
    this.update = this.update.bind(this)
  }
  async submit () {
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    const response = await debtPostService(body)
    if (response.status === 201) {
      let id = await response.json().then(id => {
        return id
      })
      config.data.debts.unshift({
        id: id,
        sum: this.state.debt,
        desc: this.state.description,
        date: moment().format('YYYY-MM-DD HH:mm')
      })
      this.setState({debtEdit: !this.state.debtEdit, description: '', debt: '0'})
    }
  }
  async update () {
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    const response = await debtReplaceService(body, this.state.debt_id)
    if (response.status === 204) {
      config.data.debts[this.state.key].sum = this.state.debt
      config.data.debts[this.state.key].desc = this.state.description
      config.data.debts[this.state.key].date = moment().format('YYYY-MM-DD HH:mm')
      this.setState({debtReplace: !this.state.debtReplace, debtEdit: !this.state.debtEdit, description: '', debt: '0', debt_id: 0})
    }
  }
  async delete (id, key) {
    const response = await debtDeleteService(id)
    if (response.status === 204) {
      config.data.debts.splice(key, 1)
      this.forceUpdate()
    }
  }
  replace (el, key) {
    this.setState({
      debtReplace: !this.state.debtReplace,
      debtEdit: !this.state.debtEdit,
      description: el.desc,
      debt: el.sum,
      debt_id: el.id,
      key: key
    })
  }
  price () {
    let sum = 0
    config.data.debts && config.data.debts.forEach(el => {
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
        <div className={config.data.debts && config.data.debts.length > 0 ? 'label-wrap' : 'hidden'}>
          <div className={'debt-label ' + (config.isRtL ? 'left' : 'right')}>
            <span>{config.translations.debt}</span>
            <span>:</span>
            <span className='count-debt'>{this.price()}</span>
          </div>
        </div>
        {config.data.debts && config.data.debts.map((el, key) => (
          <div key={key} className={this.state.debtReplace ? 'hidden' : 'debt-list'}>
            <div className='debt-list-delete-wrap'>
              <img className='debt-list-delete' src={config.urls.media + 'add.svg'} onClick={() => { this.delete(el.id, key) }} />
            </div>
            <div className='debt-list-data-wrap' onClick={() => { this.replace(el, key) }}>
              <h1 className='debt-list-name'>{el.sum} { config.data.currency}</h1>
              <h1 className='debt-list-desc'>{el.desc}</h1>
              <p className='debt-list-date'>{formatDate(el.date)}</p>
            </div>
          </div>
        ))}
        <div onClick={() => { this.setState({debtEdit: !this.state.debtEdit}) }}
          className={this.state.debtEdit ? 'hidden' : 'debt-default'}>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{ config.translations.add_debt}</h1>
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className='edit'>
            <div className='description'>
              <input className='description-input' type='text' value={this.state.description}
                onChange={event => { this.setState({description: event.target.value}) }} />
              <h1 className='description-label'>{ config.translations.description_debt}</h1>
            </div>
            <div className='count'>
              <button onClick={this.state.debtReplace ? this.update : this.submit}>{ config.translations.save}</button>
              <div className='ink' onClick={() => this.setState({debt: parseInt(this.state.debt) + config.data.debt_step})}>
                <span>+</span>
              </div>
              <input className='count-input' type='number'
                value={this.state.debt} onChange={event => { this.setState({debt: +event.target.value}) }}
                onFocus={event => { toString(event.target.value); if (event.target.value === '0') { event.target.value = '' } }}
                onBlur={event => { toString(event.target.value); if (event.target.value === '') { event.target.value = '0' } }} />
              <div className='ink' onClick={() => this.setState({debt: parseInt(this.state.debt) - config.data.debt_step})}>
                <span className='minus'>-</span>
              </div>
              <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.amount}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Debts
