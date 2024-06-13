//* Direct recursion

function pN(min, max){
    if(min > max){
        return
    }

    pN(min+1,max)
    console.log(min) //* while returing this console.log gets executed
}

pN(5, 10)

console.log("*********************************************")

function pn(min, max){
    if(min > max){
        return
    }

    console.log(min) //* this console.log gets executed before calling itself everytime until the base case matched
    pn(min+1, max)
}

pn(7, 12)