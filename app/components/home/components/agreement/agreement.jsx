import './agreement.styl'

export default class Agreement extends React.Component {
  render () {
    return (
      <div className='block'>
        <div className='agreement'>
          <span className='label'>{config.translations.agreement}:</span>
        </div>
        <div id='agreement'>
          <img src={config.urls.media + 'ic_check_box.svg'} />
        </div>
      </div>
    )
  }
}
