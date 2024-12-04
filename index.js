// the array with strings 
// const stringArray = ["1", "2", "3"];

// to create a function which will create a copy of this array, and the convert it 
function convertArray(strings) {
    return strings.map(str => {
        if (parseFloat(str) === parseInt(str, 10)) {
            return parseInt(str, 10);
            } else {
            return parseFloat(str);
            }
    });
}

console.log(convertArray(["1.5", "2.8", "3.0"]));
console.log(convertArray(["0", "-10", "3.14"]));




//function convertStringsToNumbers(arr) {
    //if(!arr.every((str) => !isNaN(parseFloat(str)))) {
       // return undefined;
  //  }

//return arr.map((str) => parseFloat(str));
//}

//console.log(convertStringsToNumbers(["1", "2", "3"]));
