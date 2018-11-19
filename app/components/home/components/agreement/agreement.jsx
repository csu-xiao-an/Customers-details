import {clientReplaceService} from 'project-services'
import './agreement.styl'

export default class Agreement extends React.Component {
  state = {
    isChecked: false
  }

  // handleAds = () => {
  //   const body = `${config.translations.permit_ads}=${!config.data.permit_ads}`
  //   clientReplaceService(body).then(r => {
  //     if (r.status === 204) {
  //       config.data.permit_ads = !config.data.permit_ads
  //       this.forceUpdate()
  //     }
  //   })
  // }

  render () {
    return (
      <div id='agreement'>
        <div className='agreement-wrap'>
          <div className='agreement'>
            <span className='label'>{config.translations.agreement}:</span>
          </div>
          <div className={'check ' + (config.isRtL ? 'right' : 'left')} onClick={this.handleAds}>
            <img src={config.urls.media + (config.data.permit_ads ? 'checkbox-unmarked.svg' : 'checkbox-marked.svg')} />
            <img className={`checking ${config.data.permit_ads ? 'show' : ''}`} src={config.urls.media + 'checkbox.svg'} />
          </div>
        </div>
      </div>
    )
  }
}
