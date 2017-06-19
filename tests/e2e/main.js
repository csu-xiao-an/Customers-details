describe('End to end test', () => {
  browser.waitForAngularEnabled(false)
  it('App opened successfully', () => {
    browser
    .get('http://localhost:3000')
    expect(browser.getTitle()).toEqual('Customers')
  })
  it('test star', () => {
    browser
    .get('http://localhost:3000')
    element(by.css('.fa-star')).click()
  })
  it('test star', () => {
    browser
    .get('http://localhost:3000')
    element(by.css('.input-group-addon')).click()
    element(by.css('.form-control')).sendKeys('testing text')
    element(by.css('.input-group-addon')).click()
  })
})
