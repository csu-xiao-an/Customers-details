import mainRequestService from './request-service'

const updateService = async (url, method, body) => {
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

export default updateService
