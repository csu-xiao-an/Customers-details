import {debtPostService, debtReplaceService, debtDeleteService} from 'project-services'
import {formatDate} from 'project-components'
import Line from '../line/line.jsx'
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
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
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
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}`
    debtReplaceService(body, this.state.debt_id).then(r => {
      if (r.status === 204) {
        config.data.debts[this.state.key].sum = this.state.debt
        config.data.debts[this.state.key].desc = this.state.description
        config.data.debts[this.state.key].date = moment().format('YYYY-MM-DD HH:mm')
        this.setState({debtReplace: !this.state.debtReplace, debtEdit: !this.state.debtEdit, description: '', debt: '0', debt_id: 0})
      }
    })
  }
  delete = (id, k) => {
    debtDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.debts.splice(k, 1)
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
    let sum = 0
    config.data.debts.forEach(i => { sum += i.sum })
    return sum === 0 || isNaN(sum) ? 0 : sum
  }
  componentWillMount = () => { if (!Array.isArray(config.data.debts)) config.data.debts = [] }
  render () {
    return config.plugins_list.includes('debts') && (
      <div id='debts'>
        <div className='debt-header'>
          <label>{config.translations.debts}</label>
        </div>
        <div className='debt-body'>
          {config.data.debts.map((i, k) => (
            <div key={k} className={this.state.debtReplace ? 'hidden' : 'debt-list'}>
              <div className='left-side'>
                <span className='debt-list-date'>{formatDate(i.date)}</span>
                <div className='debt-list-name'>
                  <label className='currency'>{i.sum} {config.data.currency}</label>
                  <span className='debt-list-desc'>{this.checkLength(i.desc)}</span>
                </div>
              </div>
              <div className='right-side'>
                <img src={config.urls.media + 'ic_edit_stroke.svg'} onClick={this.props.rights.debts.edit ? () => this.replace(i, k) : () => {}} />
              </div>
            </div>
          ))}
          <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
            <div className='edit'>
              <div className='description'>
                <input className='description-input' type='text' value={this.state.description}
                  onChange={e => this.setState({description: e.target.value})} placeholder={config.translations.description_debt} />
              </div>
              <div className='count'>
                <div className='ink' onClick={() => this.setState({debt: +this.state.debt + config.data.debt_step})}><span>+</span></div>
                <input className='count-input' type='number'
                  value={this.state.debt} onChange={e => this.setState({debt: +e.target.value})}
                  onFocus={e => { if (toString(e.target.value) === '0') e.target.value = '' }}
                  onBlur={e => { if (toString(e.target.value) === '') e.target.value = '0' }} />
                <div className='ink' onClick={() => {
                  let debt = +this.state.debt - config.data.debt_step
                  if (debt < 0) debt = 0
                  this.setState({debt})
                }}><span className='minus'>-</span>
                </div>
              </div>
              <div className='actions'>
                <button onClick={this.state.debtReplace ? this.update : this.submit}>{config.translations.save}</button>
                {/* {this.props.rights.debts.delete && */}
                {/* <img className='debt-list-delete' src={config.urls.media + 'add.svg'} onClick={() => this.delete(i.id, k)} />} */}
              </div>
            </div>
          </div>
        </div>
        {this.props.rights.debts.edit &&
        <div onClick={() => this.setState({debtEdit: !this.state.debtEdit})} className={this.state.debtEdit ? 'hidden' : 'debt-footer'}>
          <label>{config.translations.add_debt}</label>
          <img src={config.urls.media + 'c_add_stroke.svg'} />
        </div>}
        {/* <Line /> */}
      </div>
    )
  }
}
