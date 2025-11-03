import { Node } from "./node.js";

export class Tree {
   constructor(arr) {
      arr.sort();
      this.root = this.buildTree([...new Set(arr)]);
   }

   buildTree(arr) {
      if (arr.length === 0) return null;
      const midIndex = Math.floor(arr.length / 2);
      const node = new Node(arr[midIndex]);
      node.left = this.buildTree(arr.slice(0, midIndex));
      node.right = this.buildTree(arr.slice(midIndex + 1));
      return node;
   }

   insert(value, node = this.root) {
      if (node === null) return new Node(value);

      if (node.value === value) return null; // Prevents duplicates

      if (node.value < value) {
         node.left = this.insert(value, node.left);
      } else {
         node.right = this.insert(value, node.right);
      }
      return node;
   }

   deleteItem(value, node = this.root) {}

   #getInorderSuccessor(node) {}

   find(value) {}

   levelOrderForEach(callback) {}

   inOrderForEach(callback) {}

   height(value) {}

   depth(value) {}

   isBalanced() {}

   rebalance() {}

   prettyPrint(node = this.root, prefix = "", isLeft = true) {
      if (node === null) {
         return;
      }
      if (node.right !== null) {
         this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
      if (node.left !== null) {
         this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
   }
}
