// Imperative form

function encontrar_bordes (relieve) {
  var bordes = []

 for (x in relieve){
  x = parseInt(x)
  var filaAnterior = relieve[x - 1]
  var filaSiguiente = relieve[x + 1]
  var localArray = []
  for(y in relieve[x]){
    y = parseInt(y)
    if (!filaAnterior && filaSiguiente){ 
          if (!relieve[x][y-1] && relieve[x][y+1]){ 
              localArray.push((Math.min(relieve[x][y],relieve[x][y+1],relieve[x+1][y],relieve[x+1][y+1]) === relieve[x][y]) ? 1: 0)
           } else if (relieve[x][y-1] && relieve[x][y+1]) {
              localArray.push((Math.min(relieve[x][y-1],relieve[x][y],relieve[x][y+1],relieve[x+1][y-1],relieve[x+1][y],relieve[x+1][y+1]) === relieve[x][y]) ? 1 : 0)
           } else if (relieve[x][y-1] && !relieve[x][y+1]) {
              localArray.push((Math.min(relieve[x][y-1],relieve[x][y],relieve[x+1][y-1],relieve[x+1][y]) === relieve[x][y]) ? 1 : 0)
           }
    } else if (filaAnterior && filaSiguiente) {
            if (!relieve[x][y-1] && relieve[x][y+1]){ 
                localArray.push((Math.min(relieve[x-1][y],relieve[x-1][y+1],relieve[x][y],relieve[x][y+1],relieve[x+1][y],relieve[x+1][y+1]) === relieve[x][y]) ? 1 : 0)
           } else if (relieve[x][y-1] && relieve[x][y+1]) {
                  localArray.push((Math.min(relieve[x-1][y-1],relieve[x-1][y],relieve[x-1][y+1],relieve[x][y-1],relieve[x][y],relieve[x][y+1],relieve[x+1][y-1],relieve[x+1][y],relieve[x+1][y+1]) === relieve[x][y]) ? 1 : 0)
           } else if (relieve[x][y-1] && !relieve[x][y+1]) {
                localArray.push((Math.min(relieve[x-1][y-1],relieve[x-1][y],relieve[x][y-1],relieve[x][y],relieve[x+1][y-1],relieve[x+1][y]) === relieve[x][y]) ? 1 : 0)
           }
    } else if (filaAnterior && !filaSiguiente){
            if (!relieve[x][y-1] && relieve[x][y+1]){ 
              localArray.push((Math.min(relieve[x-1][y],relieve[x-1][y+1],relieve[x][y],relieve[x][y+1]) === relieve[x][y]) ? 1 : 0)
           } else if (relieve[x][y-1] && relieve[x][y+1]) {
              localArray.push((Math.min(relieve[x-1][y-1],relieve[x-1][y],relieve[x-1][y+1],relieve[x][y-1],relieve[x][y],relieve[x][y+1]) === relieve[x][y]) ? 1 : 0)
           } else if (relieve[x][y-1] && !relieve[x][y+1]) {
              localArray.push((Math.min(relieve[x-1][y-1],relieve[x-1][y],relieve[x][y-1],relieve[x][y]) === relieve[x][y]) ? 1 : 0)
           }
    }
  }
  bordes.push(localArray)
 }
return bordes
}