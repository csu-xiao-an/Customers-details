import getBirthdaysStatus from '../../components/birthday-status/birthday-status.js'
import moment from 'moment'

describe('Testing birthday status function', () => {
  it('Expected date 2 days ago', () => {
    expect(getBirthdaysStatus(moment().subtract(2, 'days'))).toBe('2 days ago')
  })
  it('Expected date Yesterday', () => {
    expect(getBirthdaysStatus(moment().subtract(1, 'days'))).toBe('Yesterday')
  })
  it('Expected date Today', () => {
    expect(getBirthdaysStatus(moment())).toBe('Today')
  })
  it('Expected date Tomorrow', () => {
    expect(getBirthdaysStatus(moment().add(1, 'days'))).toBe('Tomorrow')
  })
  it('Expected date In 4 days', () => {
    expect(getBirthdaysStatus(moment().add(4, 'days'))).toBe('In 4 days')
  })
  it('Expected date undefined', () => {
    expect(getBirthdaysStatus('sdfasdf')).toBe(undefined)
  })
})
