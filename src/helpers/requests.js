export const ebayRequest = () => {
  return fetch ('https://ebay-list-app-backend.herokuapp.com/api/v1/requests')
  .then(res => res.json())
}
