function init() {
    var name = "Mozilla";
    function displayName() {
      console.log(name); 
    }
    displayName();
  }
  init();

//   /// laxical scoping 


// 1 tarika object create krn ka
// let dev = {
//     name:"devansh"
// }

// 2 trika object create krna ka
// let dev = new Object;
// dev.name = "devansh"
 
// 3 trika object create kkrne ke 
const baseperson = {role:"developer"}
const person = Object.create(baseperson)
person.name = "devanshh"
console.log(person)
  