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

// Check if a string is a palindrome
let checkPalindrome = (string) => {
  let reverseString = string.split(" ").reverse().join(" ");
  // console.log(string === reverseString);
};
// checkPalindrome("122");

// Print patterns using nested loops
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    // console.log(i, j);
  }
}

// Print a star pattern
for (let i = 0; i < 6; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  // console.log(row);
}

// Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
// console.log(sum);

// Function to count vowels in a string
let vowelCounter = (str) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
// console.log(vowelCounter("aeiou"));

// Find the largest number in an array
let findLargestNumber = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
// console.log(findLargestNumber([1,20,5,2,8,52,4,6,41,5,63]));

// Remove duplicate elements from an array
let removeDuplicateKeys = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
// console.log(removeDuplicateKeys([1,1,2,2,3,3,4,4,5,5,6,6]));

// Find indices of two numbers that sum up to a target
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
// console.log(twoSum([2,7,11,5],16));

// Create a counter function
var createCounter = function(n) {
  return function() {
    return n++;
  };
};
// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Expect function for unit testing
var expect = function (val) {
  return {
    toBe: (expectedVal) => {
      if (val !== expectedVal) throw new Error("Not Equal");
      return true;
    },
    notToBe: (expectedVal) => {
      if (val === expectedVal) throw new Error("Equal");
      return true;
    },
  };
};
// console.log(expect(5).toBe(5));
// console.log(expect(6).notToBe(5));

// Remove duplicates from a sorted array
var removeDuplicates = function(nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
// console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6]));

// Convert Roman numeral to integer
var romanToInt = function(s) {
  let romanMap = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      total -= romanMap[s[i]];
    } else {
      total += romanMap[s[i]];
    }
  }
  return total;
};
// console.log(romanToInt("DC"));

// apply transform in each array
 //arr.forEach(function(e,i){
  //     //  console.log(fn(e + i ))
      
  // });
  var map = function(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
         result.push(fn(arr[i],i))
    } return result
  }
  // console.log(map([1,2,3], function(n) {return n + 1 }))
  // console.log(result)

  // filter element from array
  var filter = function(arr, fn) {
     let result = []
     for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)) {
          result.push(arr[i])
        } 
     } return result
  };
  // console.log(filter([9,5,2,0,5,2,10,20,30], function(n) { return n > 10; }));

  var reduce = function(nums, fn, init) {
    let val = init
    for (let i = 0; i < nums.length; i++) {
          val = fn(val,nums[i])
    } return val
  };
  // console.log(reduce([1,2,3,4], function(accum, curr) { return accum + curr; }, 0));

 
  var compose = function(functions) {
    return function(x) {    
    let result = x
     result = functions.reduceRight((acc,fn)=>{  //  [x => x + 5, x => x * 2, x => x - 3] ye nhi diya jata h to x diract excut ho jayega
        return fn(acc)   // es fnc ka out next fn ka input hoga 
     },x)  // array [] hoga to diract x excut ho jaye ga jo val di 
     return result
    } 
};
// console.log(compose([x=>x+5,x=>x*9,x=>x/5,x=>x-2])(42))
// [x => x + 5, x => x * 2, x => x - 3] ye nhi diya jata h to x diract excut ho jayega
// qki [x => x + 5, x => x * 2, x => x - 3] fn(acc) wo tb chalta jb hm compose ke array ke ander ye deta 
  
// marge two array 
var merge = function(nums1, m, nums2, n) {
    let i = m - 1 
    let j = n - 1
    let k = m + n - 1
    for (;i >= 0 && j>=0; k--) {
        if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i]
          i--
        } else {
          nums1[k] = nums2[j]
          j--
        }
    }
    while(j >= 0){
     nums1[k] = nums2[j]
     j--,k-- 
    }
};
let nums1 = [1, 2, 3, 0, 0, 0]; 
let nums2 = [2, 5, 6]; 
let m = 3, n = 3;

merge(nums1, m, nums2, n);
// console.log(nums1);

var argumentsLength = function(...args) {
        return args.length
     
};
// console.log(argumentsLength(1,2,3,4))

var once = function(fn) {
    let colled = false
  return function(...args){
    if (!colled) {
      colled = true
     return fn(...args)  
       } else {
         return undefined
       }
  }
};
 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
//  console.log(onceFn(1,2,3))
//  console.log(onceFn(2,3,6)) 


 var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "" 
  if (strs.length === 1) return strs[0]
    let sortarr = [...strs].sort()
    let result = "";
     for (let i = 0; i < sortarr[0].length; i++) {
           if (sortarr[0][i]===sortarr[sortarr.length - 1][i]) {
              result += sortarr[0][i]
           } else {
            break
           }
     } return result
 };
//  console.log(longestCommonPrefix(["flower", "flow", "flight"]))  

var isValid = function(s) {
let stack = []
let bracker = {
  ")":"(",
  "}":"{",
  "]":"["
}
for (let i = 0; i < s.length; i++) {
   let chart = s[i]
   if (chart === "(" || chart === "{" || chart === "[") {
      stack.push(chart)
   }
   if (bracker[chart]) {
     if (stack.length === 0 || stack.pop() !== bracker[chart]) {
        return false
     }
   }
} return stack.length === 0
      
};
// console.log(isValid("[]{}("))




var searchInsert = function(nums, target) {
  let low = 0
  let high = nums.length - 1
  while(low <= high){
    let mid = Math.floor((low + high)/2)   
     if (nums[mid] === target) {
      return mid
     } else if (nums[mid] < target) { 
       low = mid + 1
     } else {
      high = mid - 1
     }
  } return low
};
// console.log(searchInsert([1,2,3,4,5],5))


function memoize(fn) {
  let store = {};   // Cache banane ke liye object
  let callCount = 0; // Track karega kitni baar function call hua

  return {
      call: function (...args) { 
          let key = args.toString();  // Unique key generate karna

          if (key in store) {
              return store[key];  // Cache se return karo
          }

          let result = fn(...args);  // Function execute karo
          store[key] = result;  // Cache me store karo
          callCount++;  // Function call count badhao
          return result;
      },
      getCallCount: function () {
          return callCount;  // Function call count return karo
      }
  };
}

// const sum1 = (a, b) => a + b;
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);

// const memoizedSum = memoize(sum1);
// console.log(memoizedSum.call(2, 2)); 
// console.log(memoizedSum.call(2, 2)); 
// console.log(memoizedSum.getCallCount()); 
// console.log(memoizedSum.call(1, 2)); 
// console.log(memoizedSum.getCallCount()); 

// const memoizedFactorial = memoize(factorial);
// console.log(memoizedFactorial.call(2))
// console.log(memoizedFactorial.call(3));
// console.log(memoizedFactorial.call(2)); 
// console.log(memoizedFactorial.getCallCount());
// console.log(memoizedFactorial.call(3)); 
// console.log(memoizedFactorial.getCallCount()); 

// const memoizedFib = memoize(fib);
// console.log(memoizedFib.call(5)); 
// console.log(memoizedFib.getCallCount());



//
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2])
    .then(([val1,val2])=>(val1 + val2))
};
// const promise1 = new Promise(resolve => setTimeout(()=> resolve(2),20))
// const promise2 = new Promise(resolve => setTimeout(()=> resolve(5),20))
// addTwoPromises(promise1,promise2).then(result => console.log(result))

async function sleep(millis) {
    return new Promise((resolve)=>{
      setTimeout(resolve,millis)
    })
}
// let t = Date.now()
// sleep(100).then(()=>{
//   console.log(Date.now() -t)
// })

//===================================================================================
var plusOne = function(digits) {
  for (let i = digits.length - 1; i>=0 ; i--) {
       if (digits[i] < 9) {
          digits[i]++
          return digits
       }
    digits[i] = 0
  }
  digits.unshift(1)
  return digits

};
// console.log(plusOne([1,2,3]));
// console.log(plusOne([4,3,2,1])); 
// console.log(plusOne([9]));
// console.log(plusOne([9,9,9])); 
//======================================================================
var port = function(digit){
  for (let i = digit.length - 1; i>=0 ; i--) {
      if (digit[i] < 9) {
        digit[i]++
        return digit
      }
      digit[i] = 0
  }
  digit.sift(1)
  return digit
}
// console.log(port([1,2,3]))

//===========================================================================
// function cancellable(fn, args, t) {
//    let TimeriID =  setTimeout(()=>{
//     //  console.log(fn(...args))
//    },t)
 
  //  return function cancellable(){
  //   clearTimeout(TimeriID)
  //   // console.log("cencel excution")
  //  }
// }
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, 10);

//===========================================================================
var cancellable = function(fn, args, t) {
        console.log(fn(...args))

      let cencel =  setInterval(()=>{
          fn(...args)
        },t)

        let cencelfnc = function(){
          clearInterval(cencel)
        }

        return cencelfnc
      
};
// const cancelFn = cancellable((x) => x * 2, [5], 35);
// setTimeout(cancelFn, 190);

// fn(...args) ko t = 0ms pe turant call karta hai.
// setInterval se t milliseconds ke har gap pe fn call hota hai.
// cancelFn call hone par clearInterval se execution stop hoti hai.
// "Cancelled at" message print hota hai to confirm ki execution band ho gayi.


// ==========================================================================
function lengthOfLastWord(s) {
    let trinme = s.trim().split(" ") 
     return trinme[trinme.length - 1].length
}

// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));


function isPalindrome(s) {
  let strings = s.toLowerCase().replace(/[^a-z0-9]/g, "")
   let revereString =  strings.split("").reverse().join("")
    return strings === revereString
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car")); 
// console.log(isPalindrome(" "));


// var timeLimit = function(fn, t) {
//   return async function(...args) {
//       return new Promise((resolve, reject) => {
//         const timeout = setTimeout(()=>{
//           reject("time limit exeeted")
//         })
//           let orignalpromis = fn(...args).then(resolve).catch(reject)
//           orignalpromis.finally(()=>{
//             clearTimeout(timeout)
//           })
//       });
//   };
// };
// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log); 

var timeLimit = function(fn, t) {
  return async function(...args) {
      return new Promise((resolve,reject)=>{
        let timeout = setTimeout(()=>{
          reject("Time Limit Exceeded")
        },t)
        let originalpromise = fn(...args).then(resolve).catch(reject)
        originalpromise.finally(()=>{
          clearTimeout(timeout)
        })
      })
  };
};
// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log);


var TimeLimitedCache = function() {
    this.cache = {} // ek cach banaya hai jime key value pIR STORE KRNGE
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
   let exist = key in this.cache && this.cache[key].expiresAt > Date.now()  // chack ki key exist krti h ya nhi date.now time pr
   this.cache[key] = {value, expiresAt : Date.now() + duration}  // usko cach mme dalng 
   setTimeout(()=>{
    if (this.cache[key] && this.cache[key].expiresAt <= Date.now()) {  // ager expire ho gyi to delete krenge cach se
       delete this.cache[key]
    }
   },duration)
   return exist // retun exist 
};

TimeLimitedCache.prototype.get = function(key) {
   if (this.cache[key] && this.cache[key].expiresAt > Date.now()) { // ab hm yha key get kr rhai h ki key h ya nhi es time tk 
    return this.cache[key].value   // or ager h to value btao key active h ya nhi
   }
   return -1  // true false dena hai ager na h oto
};

TimeLimitedCache.prototype.count = function() {
     let count = 0  // key ka count
     for (let key in this.cache) {  // ab key h ya nhi
      if (this.cache[key].expiresAt > Date.now()) {
        count++   // h to couunt bda do
      }
     }
     return count // ount retrn kiya
    }
    // const timeLimitedCache = new TimeLimitedCache();
    // console.log(timeLimitedCache.set(1, 42, 1000));
    // console.log(timeLimitedCache.get(1));
    // console.log(timeLimitedCache.count()); 
    
    // setTimeout(() => {
    //     console.log(timeLimitedCache.get(1)); 
    //     console.log(timeLimitedCache.count());
    // }, 1100); 

    // var isAnagram = function(s, t) {
    //   if (s.length !== t.length)  return false

    //   let obj1 = {}
    //   let obj2 = {}
    //   for (let i = 0; i < s.length; i++) {
    //   obj1[s[i]] = (obj1[s[i]] || 0) + 1
    //   obj2[t[i]] = (obj2[t[i]] || 0) + 1
    //   }

    //   for (const key in obj1) {
    //     if (obj1[key] !== obj2[key]) return false
    //   }

    //   return true

    //     };
 


var debounce = function(fn, t) {
    
  var timeoutid = null 
  return function(...args) {
    clearTimeout(timeoutid)
    timeoutid = setTimeout(() => {
      fn(...args); // `this` issue को avoid करता है
  }, t);
}
}
function logMessage(...args) {
  console.log(`Executed at ${Date.now()} with args:`, args);
}
// const debouncedLog = debounce(logMessage, 1000);
// debouncedLog("Hello 1");
// setTimeout(() => debouncedLog("Hello 2"), 500); 
// setTimeout(() => debouncedLog("Hello 3"), 1500); 




    