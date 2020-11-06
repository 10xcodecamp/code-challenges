function MovingMedian(arr) {
   // code goes here

   const windowSize = arr[0];
   const nums = arr.slice(1);

   // for each num in nums
   // get its setOfNums (the num and the previous (windowSize - 1) nums)
   // sort and find the median in the setOfNums

   const medians = nums.map((num, i, arr) => {
      let predecessorIndex = Math.max(0, i - (windowSize - 1));
      const setOfNums = arr.slice(predecessorIndex, i + 1);
      return getMedian(setOfNums);
   });
   return medians.join(",");
}

function getMedian(nums) {
   const halfIndex = Math.floor(nums.length / 2);
   const sortedNums = [...nums].sort((a, b) => a - b);
   const isEven = sortedNums.length % 2 === 0;
   if (isEven) {
      return (sortedNums[halfIndex - 1] + sortedNums[halfIndex]) / 2.0;
   } else {
      return sortedNums[halfIndex];
   }
}

// keep this function call here
console.log(MovingMedian([3, 0, 0, -2, 0, 2, 0, -2]));
