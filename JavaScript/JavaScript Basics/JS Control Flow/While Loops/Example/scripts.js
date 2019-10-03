console.log("Printing All number Between -10 And 19")
var counter = -10;

while (counter < 20) {
    console.log(counter);
    counter++;
}

console.log("Print All even numbers between 10 and 40")
var counter = 10;

while (counter <= 40) {
    console.log(counter);
    counter += 2;
}
// Or (best option)
// while(counter <= 40){
//     if(counter % 2 ===0){}
//     console.log(counter);
// }
//     counter+=1;
// }

console.log("Print All even Odd between 300 and 333")
var counter = 300;

while (counter <= 333) {
    if (counter % 2 !== 0) {
        console.log(counter);
    }
    counter += 1;
}

console.log("Print All Numbers Divisible By 5 And 3 Between 5 And 50")
var counter = 5;

while (counter <= 50) {
    if (counter % 5 === 0 && counter % 3 === 0) {
        console.log(counter);
    }
    counter += 1;
}
