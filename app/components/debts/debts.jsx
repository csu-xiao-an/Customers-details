import {debtPostService, debtReplaceService, debtDeleteService} from 'project-services'
import {formatDate} from 'project-components'
import React, {Component} from 'react'
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
      debt: '0'
    }
  }
  submit = async () => {
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    const response = await debtPostService(body)
    if (response.status === 201) {
      config.data.debts.unshift({
        id: await response.json().then(id => id),
        sum: this.state.debt,
        desc: this.state.description,
        date: moment().format('YYYY-MM-DD HH:mm')
      })
      this.setState({debtEdit: !this.state.debtEdit, description: '', debt: '0'})
    }
  }
  update = async () => {
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    const response = await debtReplaceService(body, this.state.debt_id)
    if (response.status === 204) {
      config.data.debts[this.state.key].sum = this.state.debt
      config.data.debts[this.state.key].desc = this.state.description
      config.data.debts[this.state.key].date = moment().format('YYYY-MM-DD HH:mm')
      this.setState({debtReplace: !this.state.debtReplace, debtEdit: !this.state.debtEdit, description: '', debt: '0', debt_id: 0})
    }
  }
  delete = async (id, k) => {
    const response = await debtDeleteService(id)
    if (response.status === 204) {
      config.data.debts.splice(k, 1)
      this.forceUpdate()
    }
  }
  replace = (i, key) => {
    this.setState({
      debtReplace: !this.state.debtReplace,
      debtEdit: !this.state.debtEdit,
      description: i.desc,
      debt: i.sum,
      debt_id: i.id,
      key
    })
  }
  price = () => {
    let sum = 0
    config.data.depts && config.data.depts[0] && config.data.depts.forEach(i => { sum += i.sum })
    return sum === 0 || isNaN(sum) ? 0 : sum
  }
  render () {
    return (
      <div id='debt'>
        <div className={config.data.debts && config.data.debts[0] ? 'label-wrap' : 'hidden'}>
          <div className={'debt-label ' + (config.isRtL ? 'left' : 'right')}>
            <span>{config.translations.debt}</span><span>:</span><span className='count-debt'>{this.price()}</span>
          </div>
        </div>
        {config.data.debts && config.data.debts[0] && config.data.debts.map((i, k) => (
          <div key={k} className={this.state.debtReplace ? 'hidden' : 'debt-list'}>
            <div className='debt-list-delete-wrap'>
              <img className='debt-list-delete' src={config.urls.media + 'add.svg'} onClick={() => { this.delete(i.id, k) }} />
            </div>
            <div className='debt-list-data-wrap' onClick={() => { this.replace(i, k) }}>
              <h1 className='debt-list-name'>{i.sum} { config.data.currency}</h1>
              <h1 className='debt-list-desc'>{i.desc}</h1>
              <p className='debt-list-date'>{formatDate(i.date)}</p>
            </div>
          </div>
        ))}
        <div onClick={() => { this.setState({debtEdit: !this.state.debtEdit}) }} className={this.state.debtEdit ? 'hidden' : 'debt-default'}>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{ config.translations.add_debt}</h1>
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className='edit'>
            <div className='description'><input className='description-input' type='text' value={this.state.description}
              onChange={e => { this.setState({description: e.target.value}) }} />
              <h1 className='description-label'>{ config.translations.description_debt}</h1>
            </div>
            <div className='count'>
              <button onClick={this.state.debtReplace ? this.update : this.submit}>{config.translations.save}</button>
              <div className='ink' onClick={() => this.setState({debt: parseInt(this.state.debt) + config.data.debt_step})}><span>+</span></div>
              <input className='count-input' type='number'
                value={this.state.debt} onChange={e => { this.setState({debt: +e.target.value}) }}
                onFocus={e => { toString(e.target.value); if (e.target.value === '0') e.target.value = '' }}
                onBlur={e => { toString(e.target.value); if (e.target.value === '') e.target.value = '0' }} />
              <div className='ink' onClick={() => {
                let debt = parseInt(this.state.debt) - config.data.debt_step
                if (debt < 0) debt = 0
                this.setState({debt: debt})
              }}><span className='minus'>-</span>
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
