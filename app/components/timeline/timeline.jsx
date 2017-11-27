import Topnav from '../topnav/topnav.jsx'
import './timeline.styl'

export default class Timeline extends React.Component {
  componentWillMount = () => { if (config.data.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl' }
  render () {
    return (
      <div id='timeline'>
        <Topnav />
        <div className='test' />
      </div>
    )
  }
}
