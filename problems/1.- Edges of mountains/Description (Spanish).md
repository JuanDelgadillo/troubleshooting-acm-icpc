# Bordes de las montañas

Problema: El instituto geográfico nacional se encarga de, periódicamente, tomar fotografías aéreas para detectar cambios en el relieve terrestre. Para agilizar esta tarea desean tener una herramienta que, dada una imagen, pueda detectar los bordes de las montañas. Las imágenes son representadas con matrices de números enteros que representan la altura sobre el nivel del mar en metros en una posición determinada. Consideraremos a un estrato como a un conjunto conexo de posiciones de la matriz con misma altura. Para que una parte de la imágen se considere el borde de una montaña debe ser un estrato mínimo local. Esto quiere decir que es un estrato y que no posee ningún estrato vecino con altura menor. Diseñar un algoritmo que, dada una matriz, devuelva otra matriz con 0 en todas sus posiciones excepto en los bordes de las montañas que encuentre.

## Ejemplo:
```javascript
var relieve = [[8, 9, 2, 2, 3, 5], [9, 8, 3, 2, 4, 5], [9, 7, 2, 2, 4, 3], [9, 9, 2, 4, 4, 3], [9, 2, 3, 4, 3, 5]];

// Representación gráfica
// 8 9 2 2 3 5  
// 9 8 3 2 4 5  
// 9 7 2 2 4 3  
// 9 9 2 4 4 3  
// 9 2 3 4 3 5  

function encontrar_bordes(relieve){
  // return [[1, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 1], [0, 0, 1, 0, 0, 1], [0, 1, 0, 0, 1, 0 ]];
}
```