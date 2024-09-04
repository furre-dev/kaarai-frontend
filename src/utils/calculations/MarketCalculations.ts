export function avgPrice(listings: ListingsType) {
  let totalPrice = 0
  for (let i = 0; i < listings.length; i++) {
    const price = listings[i].price
    totalPrice += price
  }
  return Math.round(totalPrice / listings.length)
}

export function avgMileage(listings: ListingsType) {
  let totalMileage = 0
  for (let i = 0; i < listings.length; i++) {
    const mileage = listings[i].mileage
    totalMileage += mileage
  }
  return Math.round(totalMileage / listings.length)
}