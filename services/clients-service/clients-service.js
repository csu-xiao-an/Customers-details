import requestService from '../request-service.js'
const clientService = (url, method, body) => {
  url = 'http://localhost:8080'
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    body
  }
  requestService(url, options)
}

export default clientService
