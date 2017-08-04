import React, { Component } from 'react'
import './groups.styl'

class Groups extends Component {
  render () {
    return (
      <div id='partners'>
        <h1 className='partners-label'>{config.translations.group_partner}</h1>
        {config.data.groups.map((el, key) => {
          return (
            <div key={key} className='partners-wrap'>
              <div className='img'>
                <img src={config.urls.groups + el.id + '.png'} />
              </div>
              <h1>{el.name}</h1>
              <h1 className='amount'>{el.amount}</h1>
            </div>)
        })}
      </div>
    )
  }
}
export default Groups
