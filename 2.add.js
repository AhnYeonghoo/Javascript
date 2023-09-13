const fruits = ['banana', 'apple', 'grape'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits.push('pich'));

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식! 똥

fruits[4] = 'kiwi';
console.log(fruits);
console.log(fruits.length - 1);
fruits[fruits.length] = 'kiwi2';
console.log(fruits);

delete fruits[fruits.length];
console.log(fruits);
