var output = [];
var first = "Fizz";
var second = "Buzz";
var third = "FizzBuzz";
var a = 1;

function fizzBuzz() {

    if (a % 3 == 0 && a % 5 == 0) {
        output.push(third);

    } else if (a % 3 == 0) {
        output.push(first);

    } else if (a % 5 == 0) {
        output.push(second);
        
    } else
        output.push(a); 
        a++

        console.log(output);
          
    
}
   
