'use strict';
// function squareSum(numbers){
//     let i=0;
//     let sum = 0;

//     for (i=0; i<numbers.length; i++) {
//         sum += numbers[i] * numbers[i];
//     }
    
//     return sum;
    
// }
// console.log(squareSum([5, 1, 5]));
  
// console.log(Math.sqrt(25));


let array1 = [121, 144, 19, 161, 19, 144, 19, 11];
let array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// for ( let i = 0; i < a1.length; i++) {
//         console.log(Math.sqrt(a1[i]));
// }

// for (let i = 0; i<array1.length;i++) {
//     console.log(array1[i]);
// }

function comp(array1, array2) {
    //your code here
    let A = [];

    for (let i = 0; i < array2.length; i++) {
        let b = Math.sqrt(array2[i]);
        A.push(b);
    }
    console.log(A);

    for (let i = 0; i < A.length; i++) {
        //     let c = ;
        
        for (let j = 0; j < A.length; j++) {
            
            if(A[i] == array1[j]) {
                return true; 
            } else {
                j++;
                continue;
            }
        }
    }
}

console.log(comp(array1, array2));