import mainRequestService from './request.service'
const client = window._config

const clientUpdateService = async (method, body) => {
  const url = client.urls.main + '/customers-details/clients/' + client.data.id
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
