const mainRequestService = async (url, options) => {
  let res
  await fetch(url, options).then(response => {
    if (response.status === 503) setTimeout(() => { mainRequestService(url, options) }, response.headers.get('Retry-After') * 1000)
    res = response
  }).catch(err => console.error('Error: ', err))
  return res
}
export default mainRequestService
