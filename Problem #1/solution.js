/* 
Given an array of numbers, return whether any two sum to K
Example:
Array = [10, 15, 3, 7]
K = 17

Expected result:
TRUE as Array[0] + Array[3] = K
*/

let K = Math.floor(Math.random() * 101),
    numArrayLen = Math.floor(Math.random() * 101),
    numArray = Array.from({length: numArrayLen}, () => Math.floor(Math.random() * 101)),
    tempValue = 0,
    tempArray = [],
    sumsUp = false;
    
for (let idx = 0; idx < numArrayLen; idx++) {
    tempValue = K - numArray[idx];
    tempArray = numArray.filter((item, index) => index != idx);
    sumsUp = tempArray.indexOf(tempValue) >= 0;

    if (sumsUp) {
        break;
    }
}

console.info("Given K equal to: " + K);

console.info("and an array:");
console.info(numArray);

console.info("check whether any two numbers from array sum up to K.");

console.info("Two numbers from array sum up to K: " + sumsUp);

return sumsUp;
    