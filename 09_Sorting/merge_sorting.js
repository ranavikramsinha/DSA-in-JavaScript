function mergeSorting(array){

    if(array.length === 1){
        return array
    }

    const middle = Math.floor(array.length / 2)

    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSorting(left), mergeSorting(right))

}

function merge(left, right){

    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }
        else if(left[leftIndex] > right[rightIndex]){
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    //* Handle remaining elements in left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    //* Handle remaining elements in right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

     return result
 
}
 
console.log(mergeSorting([38, 27, 43, 3, 9, 82, 10]))
 
//* mergeSorting([38, 27, 43, 3, 9, 82, 10])
//* |
//* |-- mergeSorting([38, 27, 43])
//* |   |
//* |   |-- mergeSorting([38])
//* |   |   |-- [38]
//* |   |
//* |   |-- mergeSorting([27, 43])
//* |       |
//* |       |-- mergeSorting([27])
//* |       |   |-- [27]
//* |       |
//* |       |-- mergeSorting([43])
//* |           |-- [43]
//* |
//* |   |-- merge([27], [43])
//* |       |-- [27, 43]
//* |
//* |-- merge([38], [27, 43])
//* |   |-- [27, 38, 43]
//* |
//* |-- mergeSorting([3, 9, 82, 10])
//*     |
//*     |-- mergeSorting([3, 9])
//*     |   |
//*     |   |-- mergeSorting([3])
//*     |   |   |-- [3]
//*     |   |
//*     |   |-- mergeSorting([9])
//*     |       |-- [9]
//*     |
//*     |   |-- merge([3], [9])
//*     |       |-- [3, 9]
//*     |
//*     |-- mergeSorting([82, 10])
//*         |
//*         |-- mergeSorting([82])
//*         |   |-- [82]
//*         |
//*         |-- mergeSorting([10])
//*             |-- [10]
//* 
//*     |-- merge([82], [10])
//*         |-- [10, 82]
//* 
//* |-- merge([3, 9], [10, 82])
//*     |-- [3, 9, 10, 82]
//* 
//* merge([27, 38, 43], [3, 9, 10, 82])
//* |-- [3, 9, 10, 27, 38, 43, 82]
//* 