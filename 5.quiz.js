// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const changeItem = (array, value) => {
	let newArray = array.slice(0, array.length);
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			newArray.fill('🥝', i, i + 1);
		}
	}
	return newArray;
};
const fruits = ['🍌', '🍓', '🍇', '🍓'];
const newFruits = changeItem(fruits, '🍓');

console.log(fruits);
console.log(newFruits);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const fruits2 = ['🍌', '🥝', '🍇', '🥝'];
const countFruits = (array, value) => {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			count++;
		}
	}
	return count;
};
const count = countFruits(fruits2, '🥝');
console.log(count);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const fruits3 = ['🍌', '🥝', '🍇'];
const fruits4 = ['🍌', '🍓', '🍇', '🍓'];
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

const concated = concatFruits(fruits3, fruits4);
console.log(concated);
