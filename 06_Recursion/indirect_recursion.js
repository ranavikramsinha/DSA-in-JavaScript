//* Indirect recursion

function pN(min, max){
    if(min > max){
        return
    }

    console.log(min) //* this console.log gets executed before calling itself everytime until the base case matched
    min++
    logic(min,max)
}

function logic(min, max){
    if(min > max){
        return
    }

    pN(min,max)
}

pN(11, 15)

console.log("*************************************")

function pn(min, max){
    if(min > max){
        return
    }

    
    min++
    Logic(min,max)
    console.log(min) //* while returing this console.log gets executed
}

function Logic(min, max){
    if(min > max){
        return
    }

    pn(min,max)
}

pn(11, 15)