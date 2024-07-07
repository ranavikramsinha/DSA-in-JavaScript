function insertionSorting(array){

    //* The outer for loop starts with i = 1 because the element at index 0 is already considered sorted
    for(let i = 1; i < array.length; i++){
        let current = array[i]
        let j = i - 1

        while(j >= 0 && array[j] > current){
            array[j+1] = array[j]
            j--
        }

        array[j+1] = current
    }

    return array

}

console.log(insertionSorting([4, 2, 6, 1, 5]))