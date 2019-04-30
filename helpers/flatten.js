module.exports = (arr) => {
  var finalArray = [].concat.apply([], arr)
  for (i = 0; i < finalArray.length; i++) {
    if (finalArray[i].length) {
      var finalArray = flattenArray(finalArray)
    }
  }
  return finalArray
}