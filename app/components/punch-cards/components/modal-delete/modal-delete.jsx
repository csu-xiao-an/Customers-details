import {punchDeleteService} from 'project-services'
import {Modal} from 'project-components'
import './modal-delete.styl'

export default class Delete extends React.Component {
  static propTypes = {
    isVisibleModalConfirmed: PropTypes.bool.isRequired,
    handleConfirmedModal: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  }
  del = () => punchDeleteService(this.props.id)
    .then(r => r.status === 204 && config.punch_cards.some((i, k) => (i.id === this.props.id && config.punch_cards.splice(k, 1))) && this.cancel())
  cancel = () => this.props.handleConfirmedModal()
  render () {
    return (
      <Modal show={this.props.isVisibleModalConfirmed} onHide={this.cancel}>
        <div className='modal-header'>
          <h1 className={config.isRtL ? 'pd-r' : 'pd-l'} >{config.translations.delete_punch}</h1>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add_bt.svg'} onClick={this.cancel} />
        </div>
        <div className='delete-body'>
          <h1>{config.translations.punch_questions}</h1>
          <button onClick={this.del}>{config.translations.delete}</button>
        </div>
      </Modal>
    )
  }
}
