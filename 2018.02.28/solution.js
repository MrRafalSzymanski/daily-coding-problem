/* 
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. Solve it without using division and in O(n) time.

Example:

inputArr = [1, 2, 3, 4, 5] 
outputArr = [120, 60, 40, 30, 24]. 

or

inputArr = [3, 2, 1],
outputArr = [2, 3, 6]
*/

let numArrayLen = Math.floor(Math.random() * 11),
    numArray = Array.from({length: numArrayLen}, () => Math.floor(Math.random() * 101)),
    fullProduct = numArray.reduce((prev, curr) => {
        if (prev && curr) {
            return prev * curr;
        } else {
            return prev;
        }});

let finalArrray = Array.from({length: numArrayLen}, (val, key) => fullProduct / numArray[key]);
   
console.info(numArray);
console.info(finalArrray);

    
