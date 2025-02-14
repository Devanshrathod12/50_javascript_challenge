// question 41 chack num even or odd function
// function evod(value){
//     if (value%2===0) return "even"
//     else return "ood"
// }
// // console.log(evod(11))

// // q 42 aria of reducs circule 
// function area(r){
//     return Math.round(Math.PI * r * r)
// }
// console.log(area(12))

// q 43 function accsert krega array  or return sum of aaray
function sumofarr(arr){
    var sum = 0
    arr.forEach(function(v){
        sum = sum + v
    })
    return sum
}
// console.log(sumofarr([1,2,3,4])) 

// q 44 chack string starts with a character
function chacker(str,char){
    return str.toLowerCase().startsWith(char.toLowerCase())    /// startswith ye ek js prorty hai
}
// console.log(chacker("hevansh","H"))


// q 45 fucnction to find maximuxm of to numbers
// function Max(a,b){
//     if (a>b) return a;
//     else if (a<b) return b;
//     else return "equals"
// }
// console.log(Max(4,6));

// q 46 take a number jo return ek factoriyyal ko 
// function getfact(num){   //5
//     let fact = 1
//     for (var i = 1; i <=num; i++) {  
//         fact = fact * i 
//     }
//     return fact
// }
// console.log(getfact(5)) 

// q 47 function retun a string 
function string(str){
    return str.split("").reverse().join("")
}
// console.log(string("devansh"))

// q 48 creae krna h ek function j oreturn krega kagest number 
function FIndBig(arr){
   let max = 0
   for (let i = 1; i <arr.length; i++) {
   if (arr[i] > arr[max]) {
      max = i
   }
}
return arr[max]
}
// console.log(FIndBig([1,2,3,4,45,566,32,]))

// q 49 kabbakb number
function kabal(str){
    return str.replaceAll("","_")
} 
// console.log(kabal("heyy bro"))

// q 50     functin print hello world
function hy(){
    console.log("hello world")
}
hy()
hy()
hy()