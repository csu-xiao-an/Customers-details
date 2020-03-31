import { default as formatDate } from 'project-components/format-date.js'

const RenderFileInfo = ({ galleryItem, indexItem, multiDel, typeItem}) => {
  return (
    <>
      <div className='img-selected'>
        {typeItem(galleryItem, indexItem)}
        {multiDel && <img className='empty-check' src={config.urls.media + 'checkbox-empty.svg'} />}
      </div>
      <div className='check-box'>
        <img src={config.urls.media + 'checkbox-select.svg'} />
      </div>
      <div className='file-name'>{galleryItem.name}</div>
      <div className='file-date'>
        <div><img className='day-icon' style={config.isRTL ? { transform: 'scale(-1, 1)' } : {}} src={config.urls.media + 'ic_day-2.jpg'} /></div>
        <label className='date'>{formatDate(galleryItem.date)}</label>
      </div>
    </>
  )
}

export default RenderFileInfo
