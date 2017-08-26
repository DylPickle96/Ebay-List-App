export const ebayRequest = () => {
  return fetch ('http://localhost:3000/api/v1/requests')
  .then(res => res.json())
}
