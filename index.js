function sortedSquaredArray(array){
  // se crea el arreglo con 0 con la longitud de 'array'
  const sortedSqueres = new Array(array.length - 1).fill(0)
  let smallValueIndex = 0
  let largeValueIndex = array.length - 1 
  for (let idx = array.length - 1; idx >= 0; idx --){
    let smallValue = array[smallValueIndex]
    let largeValue = array[largeValueIndex]
    
    // si el valor de hasta la izq es mayor al de la derecha agregalo al final
    if(Math.abs(smallValue) > Math.abs(largeValue)){
      sortedSqueres[idx] = smallValue * smallValue
      smallValueIndex++
    }else{
      // si es menor entonces agrega el ultimo al final
      sortedSqueres[idx] = largeValue * largeValue
      largeValueIndex--
    }
  }
  return sortedSqueres  
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

console.log(sortedSquaredArray([-7,-1,3,5,8,10]))
// user@ubuntu$: [ 1, 9, 25, 49, 64, 100 ]
