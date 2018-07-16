import mainRequestService from './request.service'

export const replaceService = () => {
  const url = config.urls.main + config.urls.fill + `?phone=${config.data.phone}`
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT'
  }
  return mainRequestService(url, options)
}
