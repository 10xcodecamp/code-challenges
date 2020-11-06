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
   const middleIndex = (nums.length + 1) / 2;
   const sortedNums = [...nums].sort((a, b) => a - b);
   const isEven = sortedNums.length % 2 === 0;
   if (isEven) {
      return (
         (sortedNums[middleIndex - 1.5] + sortedNums[middleIndex - 0.5]) / 2
      );
   } else {
      return sortedNums[middleIndex - 1];
   }
}

// keep this function call here
console.log(MovingMedian([3, 1, 3, 5, 10, 6, 4, 3, 1]));
