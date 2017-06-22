import './group-partner.styl'
import React from 'react'

class Partners extends React.Component {
  constructor () {
    super()
    this.state = {
      partner: [
        {
          img: '01',
          label: 'Were born this month',
          count: '72'
        },
        {
          img: '02',
          label: 'Preferred Customers',
          count: '17'
        },
        {
          img: '03',
          label: 'They did not pay',
          count: '8'
        }
      ]
    }
  }
  render () {
    return (
      <div id='partners'>
        <h1 className='partners-label'>Group partner</h1>
        {this.state.partner.map((el, key) => {
          return (
            <div key={key} className='partners-wrap'>
              <div className='img'>
                <img src={'./app/components/media/partners/' + (el.img) + '.png'} />
              </div>
              <h1>{el.label}</h1>
              <h1 className='count'>{el.count}</h1>
            </div>)
        })}
      </div>
    )
  }
}
export default Partners
