//* Determine length of a given string (without using length)

function length(inputString){
    if(inputString === ""){
        return 0
    }

    return 1 + length(inputString.substring(1))
}

console.log(length("Rana"))