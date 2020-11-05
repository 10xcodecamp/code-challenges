function StringReduction(str) {
   // code goes here

   const dict = {
      ab: "c",
      ac: "b",
      ba: "c",
      bc: "a",
      ca: "b",
      cb: "a",
   };

   // cab
   // bb

   // bcab
   // aab
   // ac
   // b

   function reduceChars(str, i) {
      console.log("Str at the start: ", str);
      console.log("Index at the start: ", i);

      if (i === str.length - 1) {
         console.log("we have exhausted the str");
         return str;
      }

      if (str[i] === str[i + 1]) {
         console.log("The two chars are equal: ", str);
         return reduceChars(str, i + 1);
      } else {
         // replace the first two chars with their dict value
         const dictChars = str[i] + str[i + 1];
         console.log(`The two chars at index ${i} are NOT equal: `, dictChars);
         console.log("Replace with: ", dict[dictChars]);

         // replace chars[i] with dict[dictChars] in chars
         // remove chars[i+1] from chars

         const newStr = str.replace(dictChars, dict[dictChars]);

         // const newChars = chars.slice(i);
         // newChars[i] = dict[dictChars];
         const newIndex = getIndexOfUniqChars(newStr, 0);
         console.log("New index: ", newIndex);
         return reduceChars(newStr, newIndex);

         //return the index where the unique chars begin
      }

      function getIndexOfUniqChars(str, i) {
         if (str[i] === str[i + 1]) {
            return getIndexOfUniqChars(str, i + 1);
         } else {
            return i;
         }
      }
   }

   return reduceChars(str, 0).length; // return a num
}

// keep this function call here
console.log(StringReduction("bcab"));

// cab
// bb

// bcab
// aab
// ac
// b
