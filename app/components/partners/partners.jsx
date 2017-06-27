import './partners.styl'
import React from 'react'

const client = window._config

class Partners extends React.Component {
  render () {
    return (
      <div id='partners'>
        <h1 className='partners-label'>{client.translations.group_partner}</h1>
        {client.data.groups.map((el, key) => {
          return (
            <div key={key} className='partners-wrap'>
              <div className='img'>
                <img src={'./app/components/media/partners/' + (el.id) + '.png'} />
              </div>
              <h1>{el.name}</h1>
              <h1 className='amount'>{el.amount}</h1>
            </div>)
        })}
      </div>
    )
  }
}
export default Partners
