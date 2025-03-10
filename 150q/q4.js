// add binary 
var addBinary = function(a, b) {
    let result = "";
    let carry = 0
    let i = a.length - 1 , j = b.length - 1

    while (i>= 0 || j>= 0 || carry > 0) {
        let digit1 = (i>=0) ? +a[i] : 0
        let digit2 = (j>=0) ? +b[j] : 0
        let sum = digit1 + digit2 + carry
        result = ( sum % 2) + result
        carry = Math.floor(sum / 2)
        i--
        j--
    }
    return result
};
console.log(addBinary("11", "1"));  
console.log(addBinary("1010", "1011"));  
// NA BNA BHAI
