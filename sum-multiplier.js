function SumMultiplier(arr) {
   // code goes here

   // get sum of all elements in arr
   // sort to get the two highest numbers
   const sum = arr.reduce((a, b) => a + b, 0);
   const sortedArrDesc = arr.sort((a, b) => b - a);
   const num1 = sortedArrDesc[0] || 1; // to handle arrays with only 1 num
   const num2 = sortedArrDesc[1] || 1;

   return String(num1 * num2 > sum * 2);
}

// keep this function call here
console.log(SumMultiplier([2, 5, 6, -6, 16, 2, 3, 6, 5, 3]));
