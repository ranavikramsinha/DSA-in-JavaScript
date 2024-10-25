//* https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/

//* tc O(n * L * logN) | sc O(1)
var removeSubfolders = function(folder) {

    folder.sort();

    let result = [];

    result.push(folder[0]);

    for(let i = 1; i < folder.length; i++){
        let currentFolder = folder[i];
        let lastFolderWithSlash = result[result.length - 1] + "/";

        if(!currentFolder.startsWith(lastFolderWithSlash)){
            result.push(currentFolder);
        }
    }

    return result;
    
};

//* tc O(n * L) | sc O(n) where L is the length of the longest path
var removeSubfolders = function(folder) {

    let set = new Set(folder);
    let result = [];

    for(let currentFolder of folder){
        let isSubFolder = false;
        let tempFolder = currentFolder;

        while(currentFolder.length > 0){
            let lastSlash = currentFolder.lastIndexOf("/");

            currentFolder = currentFolder.substring(0, lastSlash);

            if(set.has(currentFolder)){
                isSubFolder = true;
                break;
            }
        }

        if(!isSubFolder){
            result.push(tempFolder);
        }
    }

    return result;
    
};