import { Tree } from "./tree.js";

let randArr = new Array();
for (let i = 0; i < 100; i++) {
   randArr.push(Math.floor(Math.random() * 100) + 1);
}
const tree = new Tree(randArr);
console.log("Is Balanced?: ", tree.isBalanced());

console.log(
   "Level Order: ",
   tree.levelOrderForEach((node) => node.value)
);
console.log(
   "Pre Order: ",
   tree.preOrderForEach((node) => node.value)
);
console.log(
   "Post Order: ",
   tree.postOrderForEach((node) => node.value)
);
console.log(
   "In Order: ",
   tree.inOrderForEach((node) => node.value)
);

tree.insert(202);
tree.insert(210);
tree.insert(102);
tree.insert(9029);
console.log("Is Balanced?: ", tree.isBalanced());

tree.rebalance();
console.log("Is Balanced?: ", tree.isBalanced());

console.log(
   "Level Order: ",
   tree.levelOrderForEach((node) => node.value)
);
console.log(
   "Pre Order: ",
   tree.preOrderForEach((node) => node.value)
);
console.log(
   "Post Order: ",
   tree.postOrderForEach((node) => node.value)
);
console.log(
   "In Order: ",
   tree.inOrderForEach((node) => node.value)
);
