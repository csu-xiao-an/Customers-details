import './debt.styl'

export default class Debt extends React.Component {
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='debts-timeline'>
        <img className='img-debt' src={this.props.i.is_deleted ? `${config.urls.media}ic-debt-close.svg` : `${config.urls.media}ic-debt.svg`} />
        <div className='debt-wrap'>
          <p className={`order-in ${this.props.i.is_deleted ? 'deleted' : ''}`}>
            {this.props.i.is_deleted ? config.translations.timeline.debts.debt_closed.replace('{time}', moment(this.props.i.deleted_date).format('HH:hh MMMM DD, YYYY'))
              : this.props.i.modified_date ? config.translations.timeline.debts.debt_edited.replace('{time}', moment(this.props.i.modified_date).format('HH:hh MMMM DD, YYYY'))
                : config.translations.timeline.debts.debt_add.replace('{time}', moment(this.props.i.date).format('HH:hh MMMM DD, YYYY'))}</p>
          <div className={`data ${this.props.i.is_deleted ? 'deleted' : 'normal'}`}>
            <span className='price'>
              {`${this.props.i.sum} ${config.data.currency}`}</span>
            {this.props.i.desc && <p className='desc'>{this.props.i.desc}</p>}
          </div>
        </div>
      </div>
    )
  }
}
