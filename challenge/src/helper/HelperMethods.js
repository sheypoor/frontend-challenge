export const priceSeparator = (price, shouldConvertToToman = false) => {
  if (`${price}` === '0') {
    return `${price}`
  }

  if (shouldConvertToToman) {
    price = `${price}`.substring(0, `${price}`.length - 1)
  }

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const makeCardsHeight = (index) => {
  return {
    length: 260,
    offset: 260 * index,
    index
  }
}
