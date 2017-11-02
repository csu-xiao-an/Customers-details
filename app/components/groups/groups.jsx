import Swiper from 'react-id-swiper'
import './groups.styl'

class Groups extends React.Component {
  render () {
    return (
      <div id='partners'>
        <h1 className='partners-label'>{config.translations.group_partner}</h1>
        <Swiper slidesPerView='auto'>
          {config.data.groups.map((i, k) => (
            <div key={k} className='partners-wrap'><a href={config.urls.main + config.urls.groups + i.id}>
              <div className='img'><img src={config.urls.groups_img + i.id + '.png'} /></div>
              <h1>{i.name}</h1><h1 className='amount'>{i.amount}</h1>
            </a></div>)
          )}
        </Swiper>
      </div>
    )
  }
}
export default Groups
