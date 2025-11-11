import { Tree } from "./tree.js";

let randArr = new Array();
for (let i = 0; i < 100; i++) {
   randArr.push(Math.floor(Math.random() * 100) + 1);
}
const tree = new Tree(randArr);
console.log(tree.isBalanced());

// Unbalancing tree
tree.insert(202);
tree.insert(210);
tree.insert(102);
tree.insert(9029);
console.log(tree.isBalanced());
