//* https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/

//* tc : O(nlogn) | sc : O(n)

var removeSubfolders = function(folder) {

    folder.sort();

    let result = [];
    result.push(folder[0]);

    for(let i = 1; i < folder.length; i++){
        let currentFolder = folder[i];
        let lastFolderWithSlashForSearchingCorrectly = result[result.length - 1] + "/";

        if(!currentFolder.startsWith(lastFolderWithSlashForSearchingCorrectly)){
            result.push(currentFolder);
        }
    }

    return result;
    
};