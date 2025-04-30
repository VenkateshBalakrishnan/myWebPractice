import { log } from "console";
import { MyLinkedList } from "./data-structures/MyCustomLinkedList";

// src/index.ts
log("TypeScript Data Structures and Algorithms Practice");

// You can import and test your implementations here

// create a function for finding prime number
// function findPrime(num: number): boolean {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// log(findPrime(111));

var mylist : MyLinkedList<number> = new MyLinkedList<number>();
log(mylist)