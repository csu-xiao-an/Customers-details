import mainRequestService from './request-service'

const requestPut = async (url, method, body) => {
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    body
  }
  // url = 'http://localhost:8080'
  return await mainRequestService(url, options)
}

export default requestPut
