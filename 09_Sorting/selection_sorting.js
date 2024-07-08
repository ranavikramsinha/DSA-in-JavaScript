function selectionSorting(array){

    const n = array.length

    for(let i = 0; i < n - 1; i++){
        let minIndex = i
        
        for(let j = i + 1; j < n; j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
        }

        if(minIndex !== i){
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }

    return array

}

console.log(selectionSorting([33, 77, 11, 99, 44, 22]))