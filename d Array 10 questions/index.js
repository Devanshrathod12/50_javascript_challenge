// q 31 create a aray your favrt movi and log it
// let array = ["Mr Robot" , "the Conjuring 2" , "red Room", "the 2 Pandas", "The Last Word"]
// array.forEach(function(value){
    // conso/le.log(value)  ///////  using for each hr elemnt e k ek bar peint ho or aaray me ek ek elemtn jayega
// })

// q 32  print second element of an aaray
// let ary = [1,2,3,4,5]
// console.log(ary[1])

// q 33 add nwe to elemtn using unshift 
// let Array = [1,2,3,4,5,6]
// Array.unshift(7,8)
// console.log(Array)

// q 34 remove lst elemt in aarsy and lg updated aaray
// let arry = [1,2,3,4,5,6,7,8]
// arry.pop()
// console.log(arry)

// q 35 use slice to extract first three elemetn
// let aary = [1,2,3,4,5,6,7,8]

// console.log(aary.slice(0,3))  //.slice ka matchMedia,lub ka 0 se shuru krna h or 3 kha tk ka NIKAL NA HAI

// q 36 specifc index nikal na h indexof() ki helo se
//  let aary = [1,2,3,4,5,6,7,8]
// console.log(arry.indexOf(5))

// q 37 cahck in array value include using .include 
// let araay = [1,2,3,4,5]
// console.log(araay.includes(5))

// q 38 combin 2 aaray to using .concnt
// let array = [1,2,3,4]
// let array1 = [5,6,7,8]
// console.log(array.concat(array1))    /// array me   .concnat use krne se combin ho kste h
// but usko ek e=raay ke sath add kro ( ) coll krke

// q 39 ubble short ke thro u arrange krna h 
let array = [2,65,1,35,8,15,]
for (let j = 0; j < array.length -1   ; j++) {
     for (let i = 0; i < array.length - j - 1; i++) {
        if (array[i] > array[i + 1] ) {
      let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
        
        }
        
     }
}
// console.log(array)

//  q 40 array ke ander vlue dalna h bina manupulate kiye
let a = [1,2,3,4]
let b = []
a.forEach(function(value) {
     b.push(value)
    
}); 
b.pop()
console.log(a,b)