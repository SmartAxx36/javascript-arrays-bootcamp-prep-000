var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array = [ 'foo', ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift('foo')
  return array
}
function addElementToEndOfArray(array, element) {
  array = [...array, 'foo']
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
 array.push('foo')
  return array
}
function accessElementInArray(array, index) {
<<<<<<< HEAD
  console.log(array[1, 2, 3], 2);
  return 3
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length -1)
  return array
=======
  return (array[3])
>>>>>>> 126f070cd338ac41452d51e4ed5952dd115ab367
}