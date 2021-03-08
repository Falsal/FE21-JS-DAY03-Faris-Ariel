// Basic Exercise 1 | Temperature v1.0
// Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

// Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) .


// let temp = prompt('give a temperature');

// function printOut(val,idName){
    //     console.log(val,idName)
    // }
    
    let temp = Math.random()*30 - 5; 

if (temp >= -5 && temp <=10){
    document.getElementById('temp').innerHTML=` Temperature is ${parseInt(temp)} The weather is cold`
} else document.getElementById('temp').innerHTML=` Temperature is ${parseInt(temp)} The weather is moderate`



// Basic Exercise 2 | Highest value in an array
// Create a program to find the highest value in an array. 

// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.

let array1=[1,4000, 7, -3, 9, 12, 200]

let maxNum =-2000;

for(let i=0;i<array1.length;i++){
    if(array1[i] > maxNum){
        maxNum=array1[i];
    }
}
document.getElementById('maxnum').innerHTML=` Maximum Number in Array is.. ${maxNum}`



