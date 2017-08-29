export const getList = () => {
  return fetch ('https://ebay-list-app-backend.herokuapp.com/api/v1/list')
  .then(res => res.json())
}

export const ebayRequest = () => {
  return fetch ('https://ebay-list-app-backend.herokuapp.com/api/v1/ebay_request')
}

export const postList = (data) => {
  const headers = new Headers({
    'Content-type': 'application/json'
  });
  return fetch('https://ebay-list-app-backend.herokuapp.com/api/v1/list', {
    method: 'POST',
    body: JSON.stringify({list: data}),
    headers
  })
}
// return fetch ('https://ebay-list-app-backend.herokuapp.com/api/v1/requests')
