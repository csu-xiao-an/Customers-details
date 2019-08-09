import {
  postService as debtPostService,
  deleteService as debtDeleteService,
  replaceService as debtReplaceService
} from 'project-services/debt.service.js'
import { default as DebtsLib } from 'project-components/DebtsLib/debtslib.jsx'
import './debts.styl'

export default class Debts extends React.Component {
  state = {
    description: '',
    debtEdit: this.props.activateDebt,
    debtReplace: this.props.activateDebt,
    newEditDebt: this.props.activateDebt,
    loader: false,
    loaderDel: false,
    editDebtId: '',
    total_debt: 0,
    debt: 0,
    customersDebts: true
  }
  static propTypes = {
    hiddenEmptyDepts: PropTypes.func.isRequired,
    createNewDebt: PropTypes.func.isRequired,
    activateDebt: PropTypes.bool.isRequired,
    debtsData: PropTypes.array.isRequired,
    deleteDebt: PropTypes.func.isRequired,
    editeDebt: PropTypes.func.isRequired
  }
  cancelActions = () => this.setState({debtEdit: false, debtReplace: false, newEditDebt: false, loader: false, editDebtId: ''})
  allowActions = () => this.setState({debtEdit: true, debtReplace: true, newEditDebt: true})
  editAction = id => this.setState({debtReplace: true, debtEdit: true, editDebtId: id})
  saveDebt = () => {
    this.setState({loader: true})
    const added = moment().format('YYYY-MM-DD HH:mm')
    const body = `sum=${parseInt(this.state.debt)}&desc=${this.state.description ? this.state.description : null}&added=${added}`
    debtPostService(body).then(r => {
      if (r.status === 201) {
        this.props.createNewDebt(this.state.debt, this.state.description, added, r.data)
        this.setState({ debtEdit: false, description: '', debt: '0', debtReplace: false, newEditDebt: false, loader: false })
      }
    })
  }
  updateDebt = (sum, desc, key) => {
    this.setState({loader: true})
    const added = moment().format('YYYY-MM-DD HH:mm')
    let body = `sum=${parseInt(sum)}&added=${added}`
    if (desc) {
      body = body + `&desc=${desc}`
    } else {
      body = body + `&desc=${null}`
    }
    debtReplaceService(body, key).then(r => {
      if (r.status === 204) {
        this.props.editeDebt(sum, desc, added, key)
        this.setState({ debtReplace: false, debtEdit: false, description: '', editDebtId: '', debt: '0', debt_id: '', loader: false })
      }
    })
  }
  deleteDebt = id => {
    this.setState({loaderDel: true})
    debtDeleteService(id).then(r => {
      if (r.status === 204) {
        this.props.deleteDebt(id)
        this.setState({
          loaderDel: false,
          debtEdit: false,
          debtReplace: false,
          debt_id: '',
          editDebtId: ''
        })
      }
    })
  }
  editDebt = value => this.setState({ debtEdit: value })
  replaceDebt = value => this.setState({ debtReplace: value })
  getDebt = value => this.setState({ debt: value })
  getDesc = value => this.setState({ description: value })
  componentWillMount = () => { if (!Array.isArray(config.data.debts)) config.data.debts = [] }
  render () {
    return config.plugins_list.includes('debts') && (
      <DebtsLib
        deleteDebt={this.deleteDebt}
        cancelActions={this.cancelActions}
        allowActions={this.allowActions}
        editAction={this.editAction}
        saveNote={this.saveNote}
        loader={this.state.loader}
        loaderDel={this.state.loaderDel}
        debtEdit={this.state.debtEdit}
        debtReplace={this.state.debtReplace}
        newEditDebt={this.state.newEditDebt}
        editDebtId={this.state.editDebtId}
        customersDebts={this.state.customersDebts}
        activateDebt={this.props.activateDebt}
        editDebt={this.editDebt}
        getDebt={this.getDebt}
        getDesc={this.getDesc}
        submit={this.submit}
        saveDebt={this.saveDebt}
        debtsData={this.props.debtsData}
        replaceDebt={this.replaceDebt}
        updateDebt={this.updateDebt}
        hiddenEmptyDepts={this.props.hiddenEmptyDepts}
      />
    )
  }
}
