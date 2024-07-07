//* function bubbleSorting(array){

//*     let isSwap;

//*     do{

//*         isSwap = false

//*         for(let i = 0; i < array.length - 1; i++){
//*             if(array[i] > array[i+1]){
//*                 const temp = array[i]
//*                 array[i] = array[i+1]
//*                 array[i+1] = temp
//*                 isSwap = true
//*             }
//*         }

//*     }while(isSwap)

//*     return array

//* }

//*  optimized Bubble sort code

function bubbleSorting(array){

    let n = array.length
    let isSwap;

    do{

        isSwap = false

        for(let i = 0; i < n - 1; i++){
            if(array[i] > array[i+1]){
                const temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                isSwap = true
            }
        }

        n--

    }while(isSwap)

    return array

}

console.log(bubbleSorting([4, 3, 2, 1]))