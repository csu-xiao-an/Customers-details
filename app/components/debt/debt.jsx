import React from 'react'
import './debt.styl'

const client = window._config

class Debt extends React.Component {
  render () {
    return (
      <div id='debt'>
        <img src='./app/components/media/add.svg' />
        <h1>{client.translations.add_debt}</h1>
      </div>
    )
  }
}
export default Debt
