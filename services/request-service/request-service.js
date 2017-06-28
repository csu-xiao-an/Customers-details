const requestService = (url, method, body) => {
  let status
  fetch(url, {
    method: method,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: body
  })
  .then(response => {
    if (response.status === 200) {
      status = true
    } else {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      status = false
    }
  })
  .catch(err => {
    console.log('Fetch Error :-S', err)
  })
  return status
}

export default requestService
