function partition(arr, low, high) {
    let pivot = arr[low];
    let left = low + 1;
    let right = high;
    let done = false;

    while (!done) {
        // Mover left mientras los elementos sean menores o iguales al pivote
        while (left <= right && arr[left] <= pivot) {
            left += 1;
        }
        // Mover right mientras los elementos sean mayores o iguales al pivote
        while (arr[right] >= pivot && right >= left) {
            right -= 1;
        }
        // Si aún no necesitamos terminar, intercambiar left y right
        if (right < left) {
            done = true;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }
    // Intercambiar pivote con right para colocar el pivote en su posición correcta
    [arr[low], arr[right]] = [arr[right], arr[low]];
    return right;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

// Ejemplo de uso:
let arr = [15, 3, 2, 1, 9, 5, 7, 8, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Salida esperada: [1, 2, 3, 5, 6, 7, 8, 9, 15]


/*Respuestas a los Bonus
Elección del pivote: Elegir el primer elemento como pivote es simple, pero puede llevar a un peor rendimiento (O(n^2)) si el arreglo ya está ordenado o inversamente ordenado. Sin embargo, en el caso promedio, su complejidad es O(n log n). Para evitar esto, se pueden usar estrategias como elegir el pivote de manera aleatoria o la mediana de tres (primer, medio y último elemento).
Complejidad Big O: El peor caso es O(n^2) cuando el arreglo está ya ordenado, y el caso promedio es O(n log n), que es muy eficiente.
¿Por qué se llama quicksort?: A pesar de su peor caso, en la práctica y en el caso promedio, quicksort es muy rápido y eficiente, especialmente para grandes volúmenes de datos, gracias a su capacidad de dividir el problema y resolverlo más rápidamente (dividir y conquistar). */