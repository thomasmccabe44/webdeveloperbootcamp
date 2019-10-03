console.log("Problem 1");
console.log("Printing All number Between -10 And 19")

for (var i = -10; i <= 19; i += 1) {
    console.log(i);
}

console.log("Problem 2");
console.log("Print All even numbers between 10 and 40")
for (var i = 10; i <= 40; i += 2) {
    console.log(i);
}

// Or
// for (var i = 10; i <= 40; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

console.log("Problem 3");
console.log("Print All even Odd between 300 and 333")
for (var i = 300; i <= 333; i += 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Problem 4");
console.log("Print All Numbers Divisible By 5 And 3 Between 5 And 50")

for (var i = 5; i <= 50; i +=1) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
