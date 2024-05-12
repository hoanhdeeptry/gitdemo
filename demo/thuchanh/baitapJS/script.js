// // Bai 1

// let w = prompt('nhap chieu rong: ');
// let h = prompt('nhap chieu dai: ');

// const areaValue = (w + h) * 2;
// console.log( `chu vu hinh chu nhat la ${areaValue}` );

// const perimeterValue = w * h;
// console.log( `dien tich hinh chu nhat la ${perimeterValue}` );


// // Bai 2

// let S = prompt('Nhap so giay');
// let H = (S - S%3600)/3600;
// let M = ((S %3600)-(S % 3600) % 60)/60;

// console.log(`ket qua la: ${H}h ${M}p`);


// // Bai 3

// let a = prompt('Nhap co so: ');
// let b = prompt('Luy thua: ');

// const c = Math.pow(a,b);
// alert(`ket qua la: ${c}`);

// // 1
// let sum = 0
// for (let i = 0; i < 100; i++) {
// 	sum += i
// }
// console.log(sum)

// // 2
// for ( let i = 0; i < 1000 ; i++) {
//     if (i % 3 == 0 && i % 5 == 0) { 
//           console.log(i)
//     }
// }

// // 3 
// let a = prompt('nhap so:')
// if(!isNaN(a)){
//     let b = 1;
//     for (let index = 1; index <= a; index++) {
//         b *= index;
//     }
//     console.log(b);
// } else {
//     console.log('f5 de nhap lai')
// }

// // 4
// for (let a = 2; a <= 9; a++) {
//   for (let x = 0; x <= 10; x++) {
//     console.log(`${a} * ${x} = ${a * x}`);
//   }
// }

// 5
// let a = prompt('nhap so: ');

// if(!isNaN(a)){
//     let binary = "";
//     if (a == 0) {
//         binary = "0"
//     } else {
//         for (; a > 0 ; a = Math.floor(a / 2)) {
//             let temp = a % 2;
//             binary = binary + temp;
//         }
//     }
//     console.log(binary);
// }

// 6

// let n = 1;
// let result = Math.sqrt(1)

// for (let index = 1; index <= n; index++) {
//     result = Math.sqrt(index + result);
// }
// console.log(result)

// 7



//LS 9

// const products = [
//     { name: "Áo", price: 35 },
//     { name: "Quần", price: 25 },
//     { name: "Giày", price: 15 }
// ];
// console.log (minPrice(products))

// function minPrice(arr){
//     let min = arr[0].price
//     for (let i = 1; i < arr.length; i++) {
//         if (min > arr[i].price) {
//             min = arr[i].price
//         }
    
//     }
//     return min
// }


//7
// const students = [
//     { name: "Alice", age: 20, grades: { math: 90, english: 85, science: 88 } },
//     { name: "Bob", age: 21, grades: { math: 80, english: 75, science: 78 } }
// ];

// console.log(convertArray(students));    

// function convertArray(arr) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         let objGrade = arr[i].grades;

//           for (let sub in objGrade) {
//             if(obj.hasOwnProperty(sub)) 
//             {
//                 obj[sub].push(objGrade[sub]);
//             } else {
//                 obj[sub] = [objGrade[sub]];
//             }
//           }
//     }
//     return obj;
// }

// //LS10

//1

// let arr = [9,5,4,6,7,2,3,1]

// function bubbleSort(arr) {
//     let length = arr.length;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr))

//LS 11
