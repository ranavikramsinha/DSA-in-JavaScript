//* https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/

//* tc O(n(recipes) + m(ingredients) + S (set size)) | sc O(n + S (set size))

var findAllRecipes = function(recipes, ingredients, supplies) {

    let n = recipes.length;
    let set = new Set(supplies);
    let map = new Map();
    let indegree = new Array(n).fill(0);
    let result = [];

    for(let i = 0; i < n; i++){
        for(let ingredient of ingredients[i]){
            if(!set.has(ingredient)){
                if(!map.has(ingredient)){
                    map.set(ingredient, []);
                }

                map.get(ingredient).push(i);
                indegree[i]++;
            }
        }
    }

    let arr = [];

    for(let i = 0; i < n; i++){
        if(indegree[i] === 0){
            arr.push(i);
        }
    }

    while(arr.length > 0){
        let i = arr.shift();
        let recipe = recipes[i];
        result.push(recipe);

        if(map.has(recipe)){
            for(let index of map.get(recipe)){
                indegree[index]--;

                if(indegree[index] === 0){
                    arr.push(index);
                }
            }
        }
    }

    return result;
    
};