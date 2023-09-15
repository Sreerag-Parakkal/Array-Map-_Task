const r = require("readline-sync");

 var expenses = [2000,3000,3000,5000];
 let sum = 0;

 expenses.forEach((ele)=>{
     {
     sum += ele;
     }
 });

 console.log(`sum of array is: [${sum}]`);

  let arr1=[];
  console.log("enter array elements");
  for (let i=0;i<5;i++){
    arr1[i] = r.questionInt()
  }
  let res1 = arr1.map((num )=> num*num);
  console.log(`array element you are entered [${arr1}]`)
  console.log(`square of each array elements [${res1}]`)

 let users1 = ["arun", "sujith","nevin"];
 console.log("your array" , users1);
 let res2 = users.pop()
 console.log("removed element :--",res2);
 console.log("array after removal",users1);

  let arr2 = [10,20,30];
  let res3 = arr2.shift()
  console.log(res3);
  console.log(arr2);

 let arr3 = [2,3,5];
 let res4 = arr3.unshift(10)
 console.log(res4);
 console.log(arr3);

 let users2 = ['arun', 'sujith', 'nevin'];
 let res5 = users2.shift();
 console.log(` Removed element : [${res5}]`);
 console.log(`array after removing : [${users2}]`);

 let users3 = ["arun", "sujith","nevin"];
 let res6= users3.unshift("varun" );
 console.log(res6);
 console.log(users3);

 let users4 = ['arun', 'sujith', 'nevin'];
 let res7 = users4.includes('arun'); true
 console.log(res7);
