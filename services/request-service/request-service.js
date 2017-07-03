const requestService = (url, method, body) => {
  url = 'http://localhost:8080'
  const options = {
    mode: 'cors',
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      // 'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      // 'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    body
  }
  fetch(url, options).then(responseObj => {
    console.log(responseObj)
    // debugger
  }).catch(err => {
    console.log('Fetch Error :-S', err)
  })
}

export default requestService
