import './depts.styl'

export default class Depts extends React.Component {
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='depts-timeline'>
        <div className='order-in'>{config.translations.dept_created.replace('{time}', moment(this.props.i.date).format('HH:hh'))}</div>
        <div className='dept-wrap'>
          <div className='dept'>
            <div className='img-wrap'>
              <img src={config.urls.media + 'dollar.png'} />
            </div>
            <h1>{config.translations.debt}</h1>
          </div>
          <div className='data'>
            <h1 className='desc'>{this.props.i.desc}</h1>
            <h1 className='price'>{this.props.i.sum + ' ' + config.data.currency}</h1>
          </div>
        </div>
      </div>
    )
  }
}
