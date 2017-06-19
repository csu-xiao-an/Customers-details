import getBirthdaysStatus from '../../components/birthday-status/birthday-status.js'

describe('Testing birthday status function', () => {
  it('birthday status 2001-06-26', () => {
    expect(getBirthdaysStatus('2001-06-23')).toBe('In 4 days')
  })
  it('birthday status 2005-06-19', () => {
    expect(getBirthdaysStatus('2002-06-18')).toBe('Yesterday')
  })
  it('birthday status 2001-06-26', () => {
    expect(getBirthdaysStatus('2008-06-19')).toBe('Today')
  })
  it('birthday status 2001-06-26', () => {
    expect(getBirthdaysStatus('1994-06-20')).toBe('Tomorrow')
  })
  it('birthday status 2001-06-26', () => {
    expect(getBirthdaysStatus('1945-06-15')).toBe('4 days ago')
  })
  it('birthday status 2001-06-26', () => {
    expect(getBirthdaysStatus('sdfasdf')).toBe(undefined)
  })
  it('birthday status 2001-06-26', () => {
    expect(getBirthdaysStatus('06-15-1945')).toBe('4 days ago')
  })
})
