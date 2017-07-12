import React, { Component } from 'react'
import './groups.styl'

const client = window._config

class Groups extends Component {
  render () {
    return (
      <div id='partners'>
        <h1 className='partners-label'>{client.translations.group_partner}</h1>
        {client.data.groups.map((el, key) => {
          return (
            <div key={key} className='partners-wrap'>
              <div className='img'>
                <img src={client.urls.groups + el.id + '.png'} />
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
