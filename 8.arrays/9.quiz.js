// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const changeItem = (array, from, to) => {
	return array.map((item) => (item === from ? to : item));
};

const fruits = ['🍌', '🍓', '🍇', '🍓'];
const newFruits = changeItem(fruits, '🍓', '🥝');

const higherFruits = fruits.map((value, index) => {
	if (value === '🍓') return '🥝';
	else return value;
});

// console.log(fruits);
// console.log(newFruits);
console.log(higherFruits);
console.log(newFruits);

console.clear();
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const fruits2 = ['🍌', '🥝', '🍇', '🥝'];
const countFruits = (array, item) => {
	return array.reduce((count, value) => {
		if (value === item) {
			count++;
		}
		return count;
	}, 0);
};
const count = countFruits(fruits2, '🥝');
console.log(count);
// console.log(count);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const fruits3 = ['🍌', '🥝', '🍇'];
const fruits4 = ['🍌', '🍓', '🍇', '🍓'];

const higherConcat = fruits4.find((value, index, array) => {
	return value === array[index];
});
console.log(higherConcat);
const concatFruits = (array1, array2) => {
	const newFrust = [];
	if (array1.length > array2.length) {
		for (let i = 0; i < array1.length; i++) {
			if (array1[i] === array2[i]) {
				newFruits.push(array1[i]);
			}
		}
	} else {
		for (let i = 0; i < array2.length; i++) {
			if (array1[i] === array2[i]) {
				newFruits.push(array2[i]);
			}
		}
	}
	return newFruits;
};

function match(input, search) {
	return input.filter((item) => search.includes(item));
}
console.log(match(fruits4, fruits3));

// 퀴즈 4

console.clear();
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const fill = nums
	.filter((num) => num > 5)
	.reduce((avg, num) => {
		return (avg += num / 4);
	});
console.log(fill);
