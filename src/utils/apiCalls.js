export const getData = () => {
  return fetch('https://global-warming.org/api/temperature-api ')
    .then(res => res.json())
    .then(data => console.log(data))
}