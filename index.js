// the array with strings 
const stringArray = ["1", "2", "3"];

// to create a function which will create a copy of this array, and the convert it 
function convertArray(strings) {
    return parseInt(strings, 10);
}

const numArray = stringArray.map(convertArray); 

console.log(numArray);



