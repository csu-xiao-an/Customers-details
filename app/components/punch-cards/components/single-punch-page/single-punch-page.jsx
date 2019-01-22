import PunchHeader from '../panch-header/panch-header.jsx'
import './single-punch-page.styl'

export default class SinglePunchPage extends React.Component {
  render () {
    console.log(this.props.location.state)
    const { singlePunch, length } = this.props.location.state
    return (
      <div id='single-punch-page'>
        <PunchHeader length={length} />
        <div className='single-punch-wrap'>
          <div className='single-punch'>
            <button className={'delete-btn ' + (config.isRTL ? 'delete-btn-rtl' : 'delete-btn-ltr')}><img src={config.urls.media + 'delete-blue.svg'} />{config.translations.delete}</button>
            <div className='punch-preview'>
              <p className='punch-name'><span style={{backgroundColor: 'black'}} className='service-color' />{singlePunch.service_name}</p>
              <div className='punch'>
                <p className='count'><span>{config.translations.used}</span><span className='uses'>{singlePunch.uses ? singlePunch.uses.length : '0'}</span><span className='of'>{config.translations.of}</span><span className='total' >{singlePunch.service_count}</span></p>
              </div>
              <div className={'sum ' + (config.isRTL && 'sum-rtl')}><p>{singlePunch.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
            <button className='use-btn'>{config.translations.use}<img src={config.urls.media + 'check-circle.svg'} /></button>
          </div>
        </div>
      </div>
    )
  }
}
