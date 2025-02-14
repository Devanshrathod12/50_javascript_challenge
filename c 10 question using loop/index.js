//q 21 priint using loop 1 to 50
 for (let i = 1; i < 50; i++) {
    // console.log(i)
    
}

// q22 sum the num er using while loop
let aa = 1
let sum = 0
while (aa < 11) {
    sum = sum + aa
    aa++
}

// console.log(sum)


// q 23 for of loof to help to pprint javascrit on string 
// itratable value vhaihiye hoti hai esko hmesha      ===================     for-of loop ko
// let srn = "javascript"
// for (const charcter of srn) {    ///  const ==== {charcter}  ===== of srn   is charcter element ke ander srn ki value ek ek kr ke aayegi
//     // console.log(charcter)
// }

// q 24 loop for loop skip weven number 1 to 20 
for (let i = 0; i <21; i++) {
    if (i%2) {
        // console.log(i)
    }
    
}

// q 25 do whil.e loop by dfault ek bAar chalta hai
let bb = 5
do{
    // console.log(bb)
    bb--
}
while(bb>0)

// q 26 factoriyal of 5 
let fact = 1;
for (let i = 5; i >0; i--) {
    fact = fact * i
    
}
// console.log(fact) 

// q27 create nested loop to print 3*3 grid of number
var hold = 1;
// for (var i = 1; i <4 ; i++) {
//     var str = ""
//     for (var j = 1; j <4; j++) {
//        str += `${hold}`
//        hold++
//     }

    // console.log(str)
// }

// q 28 reverse the aaray
let array = [1,2,3,4,5,]  // arrsy
for (let i = 0; i < Math.floor(array.length/2); i++) { // 0 se yani 1 se start hua Math,.flor dwo 0.00 m aatah to 1 esliye use kiya hai
    let temp = array[i]      // temp ke index 0 yamni 1 value milgyi h
    array[i] = array[array.length - 1 - i] //  [1,2,3,4,5]  ye data h arraty [me]
    array[array.length - i - 1] = temp 
}
console.log(array)

// q 29  while loop hlp se divisible bunmbe r ptont kro 5 se e divisible ho
let num = 1
while (num<101) {
    if (num%5===0) console.log(num)
        num++
}

// q 30 for in loop to itrat a object key and print it
let objectData = {
    name:"devansh",
    surname:"rathod",
    age:26
}

for (const key in objectData) {
     console.log(key)
}






