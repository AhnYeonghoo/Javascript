// 증가 & 감소 연산자 Increment & Decrement Operators

let a = 0;
console.log(a);
a++; //a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);

// 주의!
// a++ 후위 연산자 필요한 연산을 하고, 그 뒤에 값을 증가시킴
// ++a 전위 연산자 값을 먼저 증가하고, 필요한 연산을 함

console.clear();
a = 0;
let b = a++;
console.log(b);
console.log(a);
b = ++a;
console.log(b);
console.log(a);
