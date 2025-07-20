//* https://leetcode.com/problems/delete-duplicate-folders-in-system/

//* tc : O(n * m * logn) | sc : O(n)

var deleteDuplicateFolder = function(paths) {

    class Node {
        constructor(val = '') {
            this.val = val;
            this.subFolder = '';
            this.children = new Map();
        }
    }

    const getNode = (val = '') => new Node(val);

    const insert = (root, path) => {
        for (const folder of path) {
            if (!root.children.has(folder)) {
                root.children.set(folder, getNode(folder));
            }
            root = root.children.get(folder);
        }
    };

    const populateNodes = (root, subFolderMap) => {
        const subFolderPaths = [];

        for (const [childName, child] of root.children) {
            const childPath = populateNodes(child, subFolderMap);
            subFolderPaths.push([childName, childPath]);
        }

        subFolderPaths.sort((a, b) => a[0].localeCompare(b[0]));

        let completePath = '';
        for (const [childName, childPath] of subFolderPaths) {
            completePath += `(${childName}${childPath})`;
        }

        root.subFolder = completePath;

        if (completePath !== '') {
            subFolderMap.set(completePath, (subFolderMap.get(completePath) || 0) + 1);
        }

        return completePath;
    };

    const removeDuplicates = (root, subFolderMap) => {
        for (const [name, child] of root.children) {
            if (child.subFolder !== '' && subFolderMap.get(child.subFolder) > 1) {
                root.children.delete(name);
            } else {
                removeDuplicates(child, subFolderMap);
            }
        }
    };

    const constructResult = (root, path, result) => {
        for (const [childName, child] of root.children) {
            path.push(childName);
            result.push([...path]);
            constructResult(child, path, result);
            path.pop();
        }
    };

    const root = getNode('/');

    for (const path of paths) {
        insert(root, path);
    }

    const subFolderMap = new Map();
    populateNodes(root, subFolderMap);

    removeDuplicates(root, subFolderMap);

    const result = [];
    const path = [];
    constructResult(root, path, result);

    return result;
};