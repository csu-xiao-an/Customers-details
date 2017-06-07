describe('End to end test', () => {
  browser.waitForAngularEnabled(false)
  it('App opened successfully', () => {
    browser.get('http://localhost:3000')
    expect(browser.getTitle()).toEqual('Customers')
  })
  // it('test', () => {
  //   return browser
  //   .get('http://localhost:3000')
  //   .element('.form control').setValue('some text')
  // })
})
