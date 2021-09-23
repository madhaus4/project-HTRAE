// export const getData = async () => {
//   return fetch(`https://global-warming.org/api/temperature-api`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }


export const getData = async (category) => {
  let response = await fetch(`https://global-warming.org/api/${category}-api`)

  if (!response.ok) {
    throw new Error('this no good')
  }

  return await response.json();
}