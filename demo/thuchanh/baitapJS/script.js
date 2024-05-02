// Bai 1

// let w = prompt('nhap chieu rong: ');
// let h = prompt('nhap chieu dai: ');

// const areaValue = (w + h) * 2;
// console.log( `chu vu hinh chu nhat la ${areaValue}` );

// const perimeterValue = w * h;
// console.log( `dien tich hinh chu nhat la ${perimeterValue}` );


// Bai 2

// let S = prompt('Nhap so giay');
// let H = (S - S%3600)/3600;
// let M = ((S %3600)-(S % 3600) % 60)/60;

// console.log(`ket qua la: ${H}h ${M}p`);


// Bai 3

// let a = prompt('Nhap co so: ');
// let b = prompt('Luy thua: ');

// const c = Math.pow(a,b);
// alert(`ket qua la: ${c}`);

//1
// let sum = 0
// for (let i = 0; i < 100; i++) {
// 	sum += i
// }
// console.log(sum)

//2
// for ( let i = 0; i < 1000 ; i++) {
//     if (i % 3 == 0 && i % 5 == 0) { 
//           console.log(i)
//     }
// }

//3 
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

// 4
// for (let a = 2; a <= 9; a++) {
//   for (let x = 0; x <= 10; x++) {
//     console.log(`${a} * ${x} = ${a * x}`);
//   }
// }

//5
function convertDecimalToBinary(decimalNumber) { 
    if (decimalNumber === 0) { 
        return "0"; 
    } else { 
        return convertDecimalToBinary( 
            Math.floor(decimalNumber / 2)) + (decimalNumber % 2); 
  
    } 
} 
  
const num = prompt('number:'); 
const result = convertDecimalToBinary(num); 
console.log(result);
alert(`to Binary is: ${result}`);

//6