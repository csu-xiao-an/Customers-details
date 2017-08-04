import mainRequestService from './request.service'

const clientUpdateService = async (method, body) => {
  const url = config.urls.main + '/customers-details/clients/' + config.data.id
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    body
  }
  return await mainRequestService(url, options)
}

export default clientUpdateService
