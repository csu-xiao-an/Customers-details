import {debtPostService, debtReplaceService, debtDeleteService} from 'project-services'
import './debts.styl'

export default class Debts extends React.Component {
  state = {
    debtReplace: false,
    description: '',
    debtEdit: false,
    total_debt: 0,
    debt: '0'
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    const d = moment().format('YYYY-MM-DD HH:mm')
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}&added=${d}`
    debtPostService(body).then(r => {
      if (r.status === 201) {
        config.data.debts.unshift({
          sum: this.state.debt,
          desc: this.state.description,
          date: moment().format('YYYY-MM-DD HH:mm')
        })
        r.json().then(id => { config.data.debts[0].id = id })
        this.setState({debtEdit: !this.state.debtEdit, description: '', debt: '0'})
      }
    })
  }
  update = () => {
    const d = moment().format('YYYY-MM-DD HH:mm')
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}&added=${d}`
    debtReplaceService(body, this.state.debt_id).then(r => {
      if (r.status === 204) {
        config.data.debts[this.state.key].sum = this.state.debt
        config.data.debts[this.state.key].desc = this.state.description
        config.data.debts[this.state.key].date = moment().format('YYYY-MM-DD HH:mm')
        this.setState({debtReplace: !this.state.debtReplace, debtEdit: !this.state.debtEdit, description: '', debt: '0', debt_id: 0})
      }
    })
  }
  delete = i => {
    // debugger
    let id = this.state.debt_id
    debtDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.debts.splice(this.state.debt_id, 1)
        // console.log('config.data.debts.id', config.data.debts.id);
        this.setState({
          debtEdit: false,
          debt_id: 0
        })
        this.forceUpdate()
      }
    })
  }
  checkLength (desc) {
    let str = ''
    if (desc.length > 20) {
      str = desc.substr(0, 20) + '...'
    } else {
      str = desc
    }
    return str
  }
  replace = (i, key) => {
    this.setState({
      debtReplace: this.state.debtReplace ? this.state.debtReplace : !this.state.debtReplace,
      debtEdit: this.state.debtEdit ? this.state.debtEdit : !this.state.debtEdit,
      description: i.desc,
      debt: i.sum,
      debt_id: i.id,
      key
    })
  }
  price = () => {
    let arrDebts = config.data.debts.map(i => i.sum)
    let totalDebt = arrDebts.reduce((sum, item) => {
      return sum + item
    })
    return totalDebt
  }
  delDesc = () => {
    this.setState({
      description: ''
    })
  }
  backDesc = () => {
    this.setState({
      sum: this.state.debt,
      desc: this.state.description,
      debtEdit: false
    })
    this.forceUpdate()
  }
  newDateFormat = i => {
    let a = moment(i).format('ddd, DD MMM, Y, HH:mm')
    return a
  }
  componentWillMount = () => { if (!Array.isArray(config.data.debts)) config.data.debts = [] }
  render () {
    console.log('this.state.debt_id', this.state.debt_id);
    let total = this.price()
    const sortDebts = config.data.debts.sort((a, b) => moment(b.date) - moment(a.date))
    return config.plugins_list.includes('debts') && (
      <div id='debts'>
        <div className='debt-header'>
          <div className='header-text'>{config.translations.debts}
            <div className='total-debts-wrap'>{config.translations.currency_debt} {total}</div>
          </div>
          {this.state.debtEdit &&
          <div className='btn-header' onClick={this.backDesc}>
            <div className='btn-header-wrap'><img src={config.urls.media + 'arrow-left.svg'} /></div>
            <p>{config.translations.back}</p>
          </div>}
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className='edit'>
            <div className='edit-debt-head'>
              <label>{config.translations.debt_add_new}</label>
              <div className='count'>
                <div className='ink' onClick={() => {
                  let debt = +this.state.debt - config.data.debt_step
                  if (debt < 0) debt = 0
                  this.setState({ debt })
                }}>
                  <img src={config.urls.media + 'minus.svg'} />
                </div>
                <div className='currency-debt'>{config.translations.currency_debt}</div>
                <input className='count-input' type='number'
                  value={this.state.debt} onChange={e => this.setState({ debt: +e.target.value })}
                  onFocus={e => { if (toString(e.target.value) === '0') e.target.value = '' }}
                  onBlur={e => { if (toString(e.target.value) === '') e.target.value = '0' }} />
                <div className='ink' onClick={() => this.setState({ debt: +this.state.debt + config.data.debt_step })}>
                  <img src={config.urls.media + 'plus.svg'} />
                </div>
              </div>
            </div>
            <label>{config.translations.description_debts}</label>
            <div className='description'>
              <input className='description-input' type='text' value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })} placeholder={config.translations.description_debt} />
              <div className='btn-desc-del' onClick={this.delDesc}>
                <img src={config.urls.media + 'butn-not.svg'} />
              </div>
            </div>
            <div className='actions'>
              {/* <button onClick={this.state.debtReplace ? this.update : this.submit}>{config.translations.save}</button> */}
              {config.data.debts.map((i, k) =>
                <div className='del-debts' onClick={() => this.delete(i.id, k)} >
                  <img src={config.urls.media + 'trash-debts.svg'} />
                  <p>{config.translations.delete}</p>
                </div>)}
              <div className='button-apply' onClick={this.state.debtReplace ? this.update : this.submit}>
                <img src={config.urls.media + 'apply.svg'} />
                <p>{config.translations.done}</p>
              </div>
              {/* {this.props.rights.debts.delete &&
              <img className='debt-list-delete' src={config.urls.media + 'add.svg'} onClick={() => this.delete(i.id, k)} />} */}
            </div>
          </div>
        </div>
        <div className='debt-body'>
          {sortDebts.map((i, k) => (
            <div key={k} className={this.state.debtReplace ? 'debt-list' : 'debt-list'}>
              <div className='left-side'>
                <span className='debt-list-date'>{this.newDateFormat(i.date)}</span>
                <div className='debt-list-name'>
                  <label className='currency'>{i.sum} {config.translations.currency_debt}</label>
                  {i.desc && <span className='debt-list-desc'>{this.checkLength(i.desc)}</span>}
                </div>
              </div>
              <div className='right-side'>
                <img src={config.urls.media + 'ic_edit_stroke.svg'} onClick={this.props.rights.debts.edit ? () => this.replace(i, k) : () => {}} />
              </div>
            </div>
          ))}
        </div>
        {this.props.rights.debts.edit &&
        <div onClick={() => this.setState({debtEdit: !this.state.debtEdit, debt: '0', description: ''})} className={this.state.debtEdit ? 'debt-footer' : 'debt-footer'}>
          <label>{config.translations.add_debt}</label>
          <img src={config.urls.media + 'c_add_stroke.svg'} />
        </div>}
        {/* <Line /> */}
      </div>
    )
  }
}
