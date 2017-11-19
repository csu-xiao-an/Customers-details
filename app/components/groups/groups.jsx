import {Swiper} from 'project-components'
import Line from '../line/line.jsx'
import './groups.styl'

export default class HiddenFields extends React.Component {
  componentWillMount = () => { if (!Array.isArray(config.data.groups)) config.data.groups = [] }
  render () {
    return (
      <div id={config.data.groups.length > 0 ? 'groups' : 'hidden'}>
        <h1 className='groups-label'>{config.translations.group_partner}</h1>
        <Swiper slidesPerView='auto'>
          {config.data.groups.map((i, k) => (
            <div key={k} className='group-wrap'><a href={config.urls.main + config.urls.groups + i.id}>
              <div className='img'><img src={config.urls.groups_img + i.id + '.png'} /></div>
              <h1>{i.name}</h1><h1 className='amount'>{i.amount}</h1>
            </a></div>)
          )}
        </Swiper>
        <Line />
      </div>
    )
  }
}
