"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("> Running TypeScript...");
var status;
(function (status) {
    status[status["resting"] = 0] = "resting";
    status[status["working"] = 1] = "working";
})(status || (status = {}));
var names = ["Dale", "Harry S. Truman", "Hawk"];
var daleCooper = {
    name: "Dale Cooper",
    age: 40,
    hair: "black",
    height: 182,
    weight: 70,
    currentStatus: status.resting
};
function printList(list) {
    for (var index = 0; index < list.length; index++) {
        var element = list[index];
        console.log("".concat(index, ": ").concat(element));
    }
}
function printHuman(human) {
    console.log("".concat(human.name, ", age: ").concat(human.age));
}
printList(names);
printHuman(daleCooper);
