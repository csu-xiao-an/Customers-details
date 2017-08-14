import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import './groups.styl'

class Groups extends Component {
  render () {
    return (
      <div id='partners'>
        <h1 className='partners-label'>{config.translations.group_partner}</h1>
        <Swiper slidesPerView='auto'>
          {config.data.groups.map((el, key) => {
            return (
              <div key={key} className='partners-wrap'>
                <a href={config.urls.main + config.urls.groups + el.id}>
                  <div className='img'>
                    <img src={config.urls.groups_img + el.id + '.png'} />
                  </div>
                  <h1>{el.name}</h1>
                  <h1 className='amount'>{el.amount}</h1>
                </a>
              </div>)
          })}
        </Swiper>
      </div>
    )
  }
}
export default Groups
