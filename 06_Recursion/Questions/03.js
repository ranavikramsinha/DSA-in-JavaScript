//* Palindrome => LOL , MOM , DAD , MADAM , etc (writing these words backward, give the same word)

function p(inputString){

    let string = inputString.toLowerCase()
    
    if(string.length <= 1){
        return true
    }

    if(string[0] === string[string.length - 1]){
        return p(string.substring(1, string.length - 1))
    }

    else {
        return false
    }
}

console.log(p("MOM")) //* true
console.log(p("LoL")) //* true
console.log(p("False")) //* false