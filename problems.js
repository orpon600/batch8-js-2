// function sumOfArray(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     sum = sum + item;
//   }
//   return sum;
// }

// const nums = [1, 2, 3, 4, 5];
// const total = sumOfArray(nums);
// console.log(total);

// function sumOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// const nums = [1, 2, 3, 4, 5];
// const total = sumOfArray(nums);
// console.log(total);

// function sumOfOdd(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     if (item % 2 === 1) {
//       sum = sum + item;
//     }
//   }
//   return sum;
// }

// const numbers = [1, 3, 4, 5, 6, 7, 8, 9];
// const total = sumOfOdd(numbers);
// console.log(total);

// function sumOfOdd(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       sum = sum + arr[i];
//       // sum += arr[i];
//     }
//   }
//   return sum;
// }

// const numbers = [1, 3, 4, 5, 6, 7, 8, 9];
// const total = sumOfOdd(numbers);
// console.log(total);

//
// const arr = [1, 2, 3, 4];
// for (var number of arr) {
//   console.log(number);
// }

// objet
//amr nam orpon, amr bari rajshahi, amr boyos 45

// function information(info) {
//   const sentence =
//     "amar nam " +
//     info.name +
//     ", amr bari " +
//     info.address +
//     ", amr boyos " +
//     info.age;
//   return sentence;
// }

// const myInFo = {
//   name: "mehedy",
//   age: 56,
//   address: "rajshahi",
// };
// console.log(information(myInFo));

// factorial

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 1! = 1
// 0! = 1

//

// const number = 6;
// let result = 1;

// for (let i = number; i > 1; i--) {
//   result = result * i;
// }
// console.log(result);

//
// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   }

//   let result = 1;

//   for (let i = number; i > 1; i--) {
//     result = result * i;
//   }

//   return result;
// }

// console.log(factorial(5));
// console.log(factorial(0));

//
//faind the largest number from an array

// function findlargest(x) {
//   let largest = x[0]; //5

//   for (let i = 1; i < x.length; i++) {
//     const currentItem = x[i];

//     if (currentItem > largest) {
//       largest = currentItem;
//     }
//   }
//   return largest;
// }

// const arr = [5, 12, 7, 9, 20, 4, 2, 3];
// console.log(findlargest(arr));

//
// function biggestfriend(friends) {
//   let biggest = friends[0]; //oggy
//   for (let i = 1; i < friends.length; i++) {
//     biggest = friends[i];
//   }

//   return biggest;
// }

// const friends = ["oggy", "jack", "bob", "olley", "bablu", "dhablu"];
// console.log(biggestfriend(friends));
