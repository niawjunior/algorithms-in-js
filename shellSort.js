function shellSort(arr) {
  var increment = arr.length / 2
  while (increment > 0) {
    for (i = increment; i < arr.length; i++) {
      var j = i
      var temp = arr[i]
      while (j >= increment && arr[j - increment] > temp) {
        arr[j] = arr[j - increment]
        j = j - increment
      }
      arr[j] = temp
    }
    if (increment == 2) {
      increment = 1
    } else {
      increment = parseInt(increment * 5 / 11)
    }
  }
  return arr
}
var a = []
for (var i = 0; i < 10; i++) {
  a[i] = Math.floor(Math.random() * 100 + 1)
}

console.log(shellSort(a))