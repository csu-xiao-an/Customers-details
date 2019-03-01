import {debtPostService, debtReplaceService, debtDeleteService} from 'project-services'
import {formatDate, dataURLtoFile, Swiper, Resize} from 'project-components'
import './debts.styl'

export default class Debts extends React.Component {
  state = {
    debtReplace: false,
    description: '',
    debtEdit: this.props.activateDebt,
    total_debt: 0,
    debt: 0
  }
  static propTypes = {
    hiddenEmptyDepts: PropTypes.func.isRequired,
    createNewDebt: PropTypes.func.isRequired,
    activateDebt: PropTypes.bool.isRequired,
    debtsData: PropTypes.array.isRequired,
    deleteDebt: PropTypes.func.isRequired,
    editeDebt: PropTypes.func.isRequired,
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    const added = moment().format('YYYY-MM-DD HH:mm')
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description}&added=${added}`
    debtPostService(body).then(r => {
      if (r.status === 201) {
        this.props.createNewDebt(this.state.debt, this.state.description, added, r.data)
        this.setState({debtEdit: !this.state.debtEdit, description: '', debt: '0'})
      }
    })
  }
  update = () => {
    const added = moment().format('YYYY-MM-DD HH:mm')
    const description = this.state.description ? this.state.description : ''
    const body = `sum=${parseInt(this.state.debt)}&desc=${description}&added=${added}`
    debtReplaceService(body, this.state.debt_id).then(r => {
      if (r.status === 204) {
        this.props.editeDebt(this.state.debt, description, added, this.state.debt_id)
        this.setState({debtReplace: !this.state.debtReplace, debtEdit: !this.state.debtEdit, description: '', debt: '0', debt_id: 0})
      }
    })
  }
  delete = () => {
    debtDeleteService(this.state.debt_id).then(r => {
      if (r.status === 204) {
        this.props.deleteDebt(this.state.debt_id)
        this.setState({
          debtEdit: false,
          debt_id: 0,
          debtReplace: false
        })
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
    let arrDebts = this.props.debtsData.map(i => i.sum)
    let totalDebt = (arrDebts.length !== 0) && arrDebts.reduce((sum, item) => {
      return sum + item
    })
    return totalDebt
  }
  delDesc = () => {
    this.setState({
      description: ''
    })
  }
  backButton = () => {
    this.setState({
      sum: this.state.debt,
      desc: this.state.description,
      debtEdit: false
    }, () => this.props.hiddenEmptyDepts())
  }
  addDebt = () => {
    this.setState({
      debtEdit: !this.state.debtEdit,
      debt: '0',
      description: ''
    }, () => this.props.hiddenEmptyDepts())
  }
  handleIncrementDebt = () => {
    this.setState(prevState => ({
      debt: prevState.debt + config.data.debt_step
    }))
  }
  handleDecrementTime = () => {
    if (+this.state.debt > 0) {
      this.setState(prevState => ({
        debt: +prevState.debt - config.data.debt_step
      }))
    }
  }
  componentWillMount = () => { if (!Array.isArray(config.data.debts)) config.data.debts = [] }
  render () {
    let total = this.price()
    const sortDebts = this.props.debtsData.sort((a, b) => moment(b.date) - moment(a.date))
    return config.plugins_list.includes('debts') && (
      <div id='debts'>
        <div className='debt-header'>
          <div className='header-text'>{config.translations.debts}
            <div className='total-debts-wrap'>{total && `${config.translations.currency_debt} ${total}`}</div>
          </div>
          {this.state.debtEdit &&
          <div className='btn-header' onClick={this.backButton}>
            <div className='btn-header-wrap'><img src={config.urls.media + 'arrow-left.svg'} /></div>
            <p>{config.translations.back}</p>
          </div>}
        </div>
        <div className={this.state.debtEdit ? 'debt-active' : 'hidden'}>
          <div className='edit'>
            <div className='edit-debt-head'>
              <label>{config.translations.add_new_debt}</label>
              <div className='count'>
                <div className='ink' onClick={this.handleDecrementTime}>
                  <img src={config.urls.media + 'minus.svg'} />
                </div>
                <div className='currency-debt'>{config.translations.currency_debt}</div>
                <input className='count-input' type='number'
                  value={this.state.debt} onChange={e => this.setState({ debt: +e.target.value })}
                  onFocus={e => { if (toString(e.target.value) === '0') e.target.value = '' }}
                  onBlur={e => { if (toString(e.target.value) === '') e.target.value = '0' }} />
                <div className='ink' onClick={this.handleIncrementDebt}>
                  <img src={config.urls.media + 'plus.svg'} />
                </div>
              </div>
            </div>
            <label>{config.translations.description_debts}</label>
            <div className='description'>
              <input className='description-input' type='text' value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })} placeholder={config.translations.description_debt} autoFocus />
              <div className='btn-desc-del' onClick={this.delDesc}>
                <img src={config.urls.media + 'butn-not.svg'} />
              </div>
            </div>
            <div className='actions'>
              {/* <button onClick={this.state.debtReplace ? this.update : this.submit}>{config.translations.save}</button> */}
              <div className='del-debts' onClick={() => this.delete()} >
                <img src={config.urls.media + 'trash-debts.svg'} />
                <p>{config.translations.delete}</p>
              </div>
              <div className='button-apply' onClick={this.state.debtReplace ? this.update : this.submit}>
                <img src={config.urls.media + 'apply.svg'} />
                <p>{config.translations.success}</p>
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
                <span className='debt-list-date'>{formatDate(i.date)}</span>
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
        <div onClick={this.addDebt} className={this.state.debtEdit ? 'debt-footer' : 'debt-footer'}>
          <label>{config.translations.add_debt}</label>
          <img src={config.urls.media + 'c_add_stroke.svg'} />
        </div>}
        {/* <Line /> */}
      </div>
    )
  }
}