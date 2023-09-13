const pizza = { name: 'pizza', price: 2, owner: { name: 'Ahn' } };
const ramen = { name: 'ramen', price: 3 };
const sushi = { name: 'sushi', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log(store1);
console.log(store2);
store2.push(sushi);
console.log(store1);
console.log(store2);

pizza.price = 4;
console.log(store1);
console.log(store2);

// 얕은 복사! - 객체는 메모리 주소가 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign 등.. 모두 얕은 복사
