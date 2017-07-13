import getBirthdaysStatus from '../../components/birthday-status/birthday-status.js'
import getLastAppoinment from '../../components/last-appoinment/last-appoinment.js'
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

describe('Testing lastAppoinment status function', () => {
  it('Expected date In 2 weeks', () => {
    expect(getLastAppoinment(moment().add(17, 'days'))).toBe('In 2 weeks')
  })
  it('Expected date In 1 month', () => {
    expect(getLastAppoinment(moment().add(40, 'days'))).toBe('In 1 month')
  })
  it('Expected date 3 weeks ago', () => {
    expect(getLastAppoinment(moment().subtract(25, 'days'))).toBe('3 weeks ago')
  })
  it('Expected date 2 month ago', () => {
    expect(getLastAppoinment(moment().subtract(50, 'days'))).toBe('2 month ago')
  })
  it('Expected date Last year', () => {
    expect(getLastAppoinment(moment().subtract(1, 'year'))).toBe('Last year')
  })
  it('Expected date Next year', () => {
    expect(getLastAppoinment(moment().add(1, 'year'))).toBe('Next year')
  })
  it('Expected date 3 years ago', () => {
    expect(getLastAppoinment(moment().subtract(3, 'year'))).toBe('3 years ago')
  })
  it('Expected date In 4 years', () => {
    expect(getLastAppoinment(moment().add(4, 'year'))).toBe('In 4 years')
  })
  it('Expected date undefined', () => {
    expect(getBirthdaysStatus('sdfasdf')).toBe(undefined)
  })
})
