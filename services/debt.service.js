import mainRequestService from './request.service'
const client = window._config

const debtUpdateService = async (method, body) => {
  const url = client.urls.main + '/customers-details/clients/' + client.data.id + '/dept'
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

export default debtUpdateService
