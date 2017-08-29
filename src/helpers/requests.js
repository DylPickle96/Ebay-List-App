export const getList = () => {
  return fetch ('http://localhost:3000/api/v1/list')
  .then(res => res.json())
}

export const ebayRequest = () => {
  return fetch ('http://localhost:3000/api/v1/ebay_request')
}

export const postList = (data) => {
  const headers = new Headers({
    'Content-type': 'application/json'
  });
  return fetch('http://localhost:3000/api/v1/list', {
    method: 'POST',
    body: JSON.stringify({list: data}),
    headers
  })
}
// return fetch ('https://ebay-list-app-backend.herokuapp.com/api/v1/requests')
