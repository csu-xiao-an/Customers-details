import './panch-header.styl'

const PunchHeader = ({ length }) => {
  const onError = e => {
    if (!e.target.src.endsWith(config.urls.defaultClientImg)) {
      e.target.src = config.urls.defaultPathToClientImg + config.urls.defaultClientImg
    }
  }
  const backBtn = () => window.history.go(-1)
  return (
    <header className='punch-header'>
      <button className={'prev-button ' + (config.isRTL ? 'ltr-btn' : 'rtl-btn')} onClick={backBtn}>
        <img src={config.urls.media + 'arrow-back.svg'} />
      </button>
      <div className='header-wrap'>
        <div>
          <img className='client-img' src={config.urls.client_data + config.data.profile_image} onError={e => { onError(e) }} />
        </div>
        <div className='client-name'>
          <h2>{config.data.name}</h2>
          <div className='punch-label'>
            <p>{config.translations.punch_cards.top_title.replace('{punch_cards_count}', length)}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PunchHeader
