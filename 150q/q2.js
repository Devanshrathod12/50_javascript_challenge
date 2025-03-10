// contails duplicat
// Input: nums = [1, 2, 3, 3]

// Output: true
// Input: nums = [1, 2, 3, 4]

// Output: false

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([2,14,18,22,22]))
console.log(containsDuplicate([1,2,3,4,5,6,7,8,1]))

var containsDuplicate = function(nums) {
    let numsset = new Set()
   for (let num of nums) {
     if (numsset.has(num)) {
        return true
     }
     numsset.add(num)
   }
   return false
}
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([2,14,18,22,22]))
console.log(containsDuplicate([1,2,3,4,5,6,7,8,1]))
