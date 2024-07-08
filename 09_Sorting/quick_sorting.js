function quickSorting(array, low = 0, high = array.length - 1){

    if(low < high){
        let pivotIndex = partition(array, low, high)

        quickSorting(array, low, pivotIndex - 1)
        quickSorting(array, pivotIndex + 1, high)
    }

}

function partition(array, low, high){

    let pivot = array[high]
    let i = low - 1

    for(let j = low; j < high; j++){
        if(array[j] < pivot){
            i++
            [array[i], array[j]] = [array[j], array[i]]
        }
    }

    i++
    [array[i], array[high]] = [array[high], array[i]]
    console.log(`Partitioned with pivot ${pivot}: ${array}`)
    return i

}

let arr = [10, 7, 8, 9, 1, 5]
quickSorting(arr)
console.log('Sorted array:', arr)