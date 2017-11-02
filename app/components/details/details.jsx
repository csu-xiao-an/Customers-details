import {detailsReplaceService} from 'project-services'
import './details.styl'

class Details extends React.Component {
  submit = () =>
    detailsReplaceService().then(r => {
      if (r.status === 204) {
        config.data.details_link_active = true
        this.forceUpdate()
      }
    })
  render () {
    return (
      <div id='details'>
        <div className='details-wrap'>
          <div className={'details-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.completion}</div>
        </div>
        <div className='data-wrap'>
          <button className={'details-button ' + (config.isRtL ? 'left' : 'right')} disabled={config.data.details_link_active}
            onClick={this.submit}>{config.data.details_link_active ? config.translations.sent : config.translations.send}</button>
          <img className={config.data.details_link_active ? '' : 'hidden'} src={config.urls.media + 'ok.png'} />
          <h1 className={config.isRtL ? 'right' : 'left'}>{config.translations.request_to_detail}</h1>
        </div>
      </div>
    )
  }
}
export default Details
