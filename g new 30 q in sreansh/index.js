// // console.log("devansh")

// let string = "devansh bhai bhot aacha hai"
//  var newstrn = string.split(" ")
//  .map(function(word){
//    return word.split("").reverse().join("")

// })
// console.log(newstrn.join(" "))

// let reverseString = (s) =>{
//       return s.split(" ").reverse().join(" ")
// }
// palandro("devansh")

// chack it is plendrom or not
let chackPlandrom = (string) => {
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// chackPlandrom("122")

// for(let i=0;i<5;i++){
//       for(let j=0;j<5;j++){
//             // console.log(i,j)
//       }
// }
// 0 0 0 0 0,1 1 1 1 1,2 2 2 2 2,3 3 3 3 3
// 0 1 2 3 4,0 1 2 3 4,0 1 2 3 4,0 1 2 3 4

// for (let i = 0; i <3; i++) {
// //    let row = " ";
//    for (let j = 0; j <3; j++) {
//       // row += "* "

// }
// console.log(row)
// for (let i = 0; i < 6; i++) {
//   let Row = ""
//   for (let j = 0; j < i; j++) {
//       Row += "* "
//   }
//   console.log(Row)
// }

// function to sum 1 to 100
// let sum = 0
// for (let i = 1; i <101; i++) {
//     sum += i
//   }
//   console.log(sum)

// let vowels = ["aeiouAEIOU"]
//  let character = vowels.forEach(function(a){
//   let count = 0
//   if (vowels.includes(character)) {
//     if (vowels===character) {
//       count++
//     }
//   }
//   console.log(count)

// })

let vowelcounter = (str) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
// console.log(vowelcounter("aeiou"))

// let findlasgestnumber = (arr) => {
//   let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i]
//       }
//     }
//     return max
//   }
// console.log(findlasgestnumber([1,20,5,2,8,52,4,6,41,5,63]))

// let RemoveDuplicatkey = (arr) => {
//   let unique = []
//   for (let i = 0; i < arr.length; i++) {
//       if (!unique.includes(arr[i])) {
//          unique.push(arr[i])
//       }
//   }
//   return unique

// }
// console.log(RemoveDuplicatkey([1,1,2,2,3,3,4,4,5,5,6,6]))

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i +1; j < nums.length; j++) {
//          if (nums[i]+nums[j]==target) {
//             return [i,j]
//          }
//       }
//     }
// };
// console.log(twoSum([2,7,11,5],16))

// var createCounter = function(n) {
//   return function() {
//     return n++
//   };
// };
// const counter = createCounter(10)
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// var expect = function (val) {
//   return {
//     toBe: (expectedval) => {
//       if (val !== expectedval) {
//         throw new Error("Not Equal");
//       }
//       return true;
//     },
//     notToBe: (expectedval) => {
//       if (val === expectedval) {
//         throw new Error("Equal");
//       }
//       return true;
//     },
//   };
// };
// console.log(expect(5).toBe(5)) // inpt val or tobe val h wo same honi chahiye to true h
// console.log(expect(6).notToBe(5)) // dono expact or nhi not tobe same val aayegi to eeror show hoga ki equal h

// var removeDuplicates = function(nums) {
// let k = 1;
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i]
//       k++
//     }
// }
// return k
// }
// console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6]))

// remove duplicats from shorted array
// var removeElement = function(nums, val) {
//     if (nums.length === 0) return nums
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//           nums[k] = nums[i]
//           k++
//         }
//     }
//     for (let i = k; i < nums.length; i++) {
//       nums[i] = "_"

//    }
//     return k
//     }
// let nums = [1,2,3,3,4,5,6]
// let val = 3
// console.log(removeElement(nums,val))
// console.log(nums)

// var isPalindrome = function(x) {
//    if (x < 0) return false
//    let reverseString = x.toString().split("").reverse().join("")
//    return reverseString === x.toString()
// };
// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(10))

// var createCounter = function (init) {
//   let count = init;
//   return {
//     increment: function () {
//       count = count + 1;
//       return count;
//     },
//     reset: function () {
//       count = init;
//       return count;
//     },
//     decrement: function () {
//       count = count - 1;
//       return count;
//     },
//   };
// };

// // 2 
// var createCounter = function (init) {
//   let count = init;
//   return {
//     increment:() => ++count,
//     reset:() => (count = init),
//     decrement:() => --count
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())


// var twoSum = function(nums, target) {
//    for (let i = 0; i < nums.length; i++) {
//      for (let j = i + 1; j < nums.length; j++) {
//        if (nums[i]+nums[j]==target) {
//              return [i,j]
//        }
      
//      }
    
//    }
// }
// console.log(twoSum([1,2,3,4,5],9))
