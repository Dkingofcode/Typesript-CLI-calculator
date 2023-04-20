"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter the firts number/n");
    console.log(firstStr);
    console.log(readline_sync_1.question);
}
main();
console.log("I am writing typescript");
