module.exports = (arr) => {
  let finalArray = [].concat.apply([], arr)
  for (i = 0; i < finalArray.length; i++) {
    if (finalArray[i].length) {
      let finalArray = flattenArray(finalArray)
    }
  }
  return finalArray
}