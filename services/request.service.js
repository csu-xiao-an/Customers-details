const mainRequestService = async (url, options) => {
  // url = 'http://api.bewebmaster.co.il/503'
  let res
  await fetch(url, options).then(response => {
    console.log(response)
    if (response.status === 503) {
      setTimeout(() => { mainRequestService(url, options) }, 1000)
    }
    if (response.status === 400) {
      throw response
    } else {
      res = response
    }
  }).catch(err => {
    console.error('Fetch Error: ', err)
  })
  return res
}
export default mainRequestService
