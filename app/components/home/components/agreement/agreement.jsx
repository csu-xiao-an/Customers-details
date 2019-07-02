import './agreement.styl'

export default class Agreement extends React.Component {
  render () {
    return (
      <div id='agreement'>
        <div className='agreement-wrap'>
          <div className='agreement'>
            <span className='label'>{config.translations.agreement.agreement_label}:</span>
          </div>
          <div className={'check ' + (config.isRTL ? 'right' : 'left')} onClick={this.props.editProfile && this.props.handleAds}>
            <img src={config.urls.media + (this.props.permit_ads ? 'checkbox-unmarked.svg' : 'checkbox-marked.svg')} />
            <img className={`checking ${this.props.permit_ads ? 'show' : ''}`} src={config.urls.media + 'checkbox.svg'} />
          </div>
        </div>
      </div>
    )
  }
}
