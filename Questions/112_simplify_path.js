//* https://leetcode.com/problems/simplify-path/

var simplifyPath = function(path) {
    let stack = [];
    let locations = path.split("/");

    for(let location of locations){
        
        if(location === "." || !location){
            continue;
        }
        else if(location === ".."){
            if(stack.length > 0){
                stack.pop();
            }
        }
        else{
            stack.push(location);
        }
    }

    return `/${stack.join("/")}`;
};