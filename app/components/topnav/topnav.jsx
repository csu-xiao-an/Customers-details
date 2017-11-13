import './topnav.styl'

const Topnav = () => {
  const age = d => Math.floor(moment.duration(moment() - moment(d)).asYears())
  const countAppointment = () => {
    let c = 0
    config.data.recent_appoinments && config.data.recent_appoinments[0] &&
    config.data.recent_appoinments.forEach(i => i.procedures.forEach(() => c++))
    return c
  }
  return (
    <div id='topnav'>
      <div className='header'>
        <div className='arrow-wrap' onClick={() => { window.history.go(-1) }}><img className='arrow-back' src={config.urls.media + 'arrow-back.svg'} /></div>
        <div className='client-name'><div className='icon-online' /><h1>{config.data.name}</h1><h1>({age(config.data.birthdate)})</h1></div>
        <div className='edit-wrap'><button className='edit'>{config.translations.edit}</button></div>
      </div>
      <div className='buttons'>
        <div className='customers-wrap'><button>{config.translations.customer}</button></div>
        <div className='appointments-wrap'><button >{countAppointment()} - {config.translations.appointment}</button></div>
      </div>
    </div>
  )
}
export default Topnav
