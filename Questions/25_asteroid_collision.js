//* https://leetcode.com/problems/asteroid-collision/description/

var asteroidCollision = function(asteroids) {

    let stack = []

    for(let asteroid of asteroids){
        let explode = false

        while(stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0){
            const rightAsteroid = stack.pop()

            if(Math.abs(asteroid) === rightAsteroid){
                explode = true
                break
            }
            else if(Math.abs(asteroid) < rightAsteroid){
                asteroid = 0
                stack.push(rightAsteroid)
                break
            }
        }

        if(!explode && asteroid !== 0){
            stack.push(asteroid)
        }
    }

    return stack
    
};

console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([10, 2, -5]))

//* 
//* Initial asteroids: [5, 10, -5]
//* Stack: []
//* 
//* 1. Process asteroid 5:
//*    - No collision, push 5 to the stack.
//*    - Stack: [5]
//* 
//* 2. Process asteroid 10:
//*    - No collision, push 10 to the stack.
//*    - Stack: [5, 10]
//* 
//* 3. Process asteroid -5:
//*    - Collision with 10:
//*      - 10 > |-5|, so -5 explodes.
//*      - Stack: [5, 10]
//* 
//* Final stack: [5, 10]
//* 

//* 
//* Initial asteroids: [10, 2, -5]
//* Stack: []
//* 
//* 1. Process asteroid 10:
//*    - No collision, push 10 to the stack.
//*    - Stack: [10]
//* 
//* 2. Process asteroid 2:
//*    - No collision, push 2 to the stack.
//*    - Stack: [10, 2]
//* 
//* 3. Process asteroid -5:
//*    - Collision with 2:
//*      - |-5| > 2, so 2 explodes.
//*      - Continue to check with the next top of stack.
//*    - Collision with 10:
//*      - 10 > |-5|, so -5 explodes.
//*      - Stack: [10]
//* 
//* Final stack: [10]
//* 