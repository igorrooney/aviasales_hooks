export const formatNumber = number => {
  const numberStr = number.toString()
  const secondPart = numberStr.substring(numberStr.length-3)
  const firstPart = numberStr.substring(0, numberStr.length-3)
  return `${firstPart} ${secondPart} P`
}
