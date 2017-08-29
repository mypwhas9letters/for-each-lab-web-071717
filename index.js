function iterativeLog(array){
  array.forEach(function(i){
    callback(array, i)
  })
}

function iterate(callback){
  array = [1,244,5,3]
  array.forEach(function(i){
  callback(array, i)
  })
  return array
}

function doToArray(array, callback){
  array.forEach(function(i){
    callback(array, i)
})
}


function callback(arr, i) {
  console.log(`${arr.indexOf(i)}: ${i}`)
}
