export const getData = async (category) => {
  let response = await fetch(`https://global-warming.org/api/${category}-api`)

  if (!response.ok) {
    throw new Error('this no good')
  }
  return await response.json();
}