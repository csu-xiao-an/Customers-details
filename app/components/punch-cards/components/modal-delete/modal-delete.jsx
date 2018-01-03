import {punchDeleteService, punchDeleteServiceUse} from 'project-services'
import {Modal} from 'project-components'
import './modal-delete.styl'

export default class Delete extends React.Component {
  static propTypes = {
    isVisibleModalConfirmed: PropTypes.bool.isRequired,
    handleConfirmedModal: PropTypes.func.isRequired,
    updateSingle: PropTypes.func.isRequired,
    use: PropTypes.number.isRequired,
    id: PropTypes.any.isRequired
  }
  del = () => punchDeleteService(this.props.id)
    .then(r => r.status === 204 && config.punch_cards.some((i, k) => (i.id === this.props.id &&
      config.punch_cards.splice(k, 1))) && this.cancelSingle())
  delUse = () => punchDeleteServiceUse(this.props.id, this.props.use)
    .then(r => r.status === 204 && config.punch_cards.some(item => (item.id === this.props.id &&
      item.uses.some((i, k) => i.id === this.props.use && item.uses.splice(k, 1)))) && this.cancel())
  cancelSingle = () => {
    this.props.handleConfirmedModal()
    this.props.updateSingle()
  }
  cancel = () => this.props.handleConfirmedModal()
  render () {
    return (
      <Modal show={this.props.isVisibleModalConfirmed} onHide={this.cancel}>
        <div className='modal-header' id='punch_cards_media'>
          <h1 className={config.isRtL ? 'pd-r' : 'pd-l'} >{this.props.use ? config.translations.delete_use : config.translations.delete_punch}</h1>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add_bt.svg'} onClick={this.cancel} />
        </div>
        <div className='delete-body'>
          <h1>{this.props.use ? config.translations.use_questions : config.translations.punch_questions}</h1>
          <button onClick={this.props.use ? this.delUse : this.del}>{config.translations.delete}</button>
        </div>
      </Modal>
    )
  }
}
