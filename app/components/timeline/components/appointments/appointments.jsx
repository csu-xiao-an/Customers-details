import './appointments.styl'

export default class Appoinments extends React.Component {
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    // console.log(this.props.i)
    return (
      <div id='appoinments'>
        <div className='order-in'>{this.props.i.date}</div>
      </div>
    )
  }
}
