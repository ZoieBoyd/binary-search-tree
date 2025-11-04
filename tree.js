import { Node } from "./node.js";

export class Tree {
   constructor(arr) {
      arr.sort((a, b) => a - b);
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

      if (node.value === value) return null;

      if (node.value > value) {
         node.left = this.insert(value, node.left);
      } else {
         node.right = this.insert(value, node.right);
      }
      return node;
   }

   deleteItem(value, node = this.root) {
      if (node == null) return node;

      if (node.value > value) {
         node.left = this.deleteItem(value, node.left);
      } else if (node.value < value) {
         node.right = this.deleteItem(value, node.right);
      } else {
         if (node.left == null) return node.right;
         if (node.right == null) return node.left;

         const successor = this.#getInorderSuccessor(node);
         node.value = successor.value;
         node.right = this.deleteItem(successor.value, node.right);
      }
      return node;
   }

   #getInorderSuccessor(node) {
      node = node.right;
      while (node !== null && node.left !== null) {
         node = node.left;
      }
      return node;
   }

   find(value) {
      let node = this.root;
      while (node.value !== value) {
         if (node.value > value) {
            node = node.left;
         } else {
            node = node.right;
         }
      }
      return node;
   }

   levelOrderForEach(callback) {
      if (!callback) throw new Error("Callback is required");

      const levelOrderList = [];
      const queue = [this.root];

      while (queue.length > 0) {
         const node = queue.shift();
         if (node.left !== null) queue.push(node.left);
         if (node.right !== null) queue.push(node.right);
         levelOrderList.push(callback(node));
      }
      return levelOrderList;
   }

   inOrderForEach(callback) {
      // left subtree -> root -> right subtree
   }

   preOrderForEach(callback) {
      // root -> left subtree -> right subtree
   }

   postOrderForEach(callback) {
      // left subtree -> right subtree -> root
   }

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
