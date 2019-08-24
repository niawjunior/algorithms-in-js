function merge(left, right) {
  var result = []
  lLen = left.length
  rLen = right.length
  l = 0
  r = 0
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }
 return result.concat(left.slice(l).concat(right.slice(r)))
}

function mergeSort(arr) {
  var len = arr.length
  if (len < 2) {
    return arr
  }
  var mid = Math.floor(len / 2)
  var left = arr.slice(0, mid)
  var right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
var a = []
for (var i = 0; i < 10; i++) {
  a[i] = Math.floor(Math.random() * 100 + 1)
}

console.log(mergeSort(a))