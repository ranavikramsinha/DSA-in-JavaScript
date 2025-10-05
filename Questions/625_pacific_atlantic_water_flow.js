//* https://leetcode.com/problems/pacific-atlantic-water-flow/

//* tc : O(m*n) | sc : O(m*n)

var pacificAtlantic = function(heights) {

    if (!heights || heights.length === 0) {
        return [];
    }
    
    let m =  heights.length;
    let n =  heights[0].length;
    let result = [];

    let isPacReach = Array.from({ length: m }, () => new Array(n).fill(false));
    let isAtlReach = Array.from({ length: m }, () => new Array(n).fill(false));

    function DFS( x, y, ocean){
        
        ocean[x][y]=true;
        let dir = [ [-1,0],[1,0],[0,1],[0,-1]];

        for(let [i,j] of dir){

            if( 0 <= (x+i) && (x+i) < m && 0 <= (y+j) && (y+j) < n &&  heights[x+i][y+j] >= heights[x][y]  && (!ocean[x+i][y+j]) )

                    DFS( x+i, y+j, ocean );
        }
    }

     for (let i = 0; i < m; i++) {
        DFS(i, 0, isPacReach);
        DFS(i, n - 1, isAtlReach);
    }

    for (let j = 0; j < n; j++) {
        DFS(0, j, isPacReach);
        DFS(m - 1, j, isAtlReach);
    }

    for(let i =0;i < m; i++){
        for(let j =0; j <n; j++){
            if( isPacReach[i][j] && isAtlReach[i][j] )
                 result.push([i,j]);   
        }
    }

    return result; 
};