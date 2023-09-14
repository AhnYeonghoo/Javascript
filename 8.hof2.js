// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는
// 변환해서 새로운 배열 생성!

const nums = [1, 2, 3, 4, 5];
let result = nums.map((item) => item * 2);
console.log(result);
console.log(nums);
result = nums.map((item) => {
	if (item % 2 === 0) {
		return item * 2;
	} else {
		return item;
	}
});
console.log(result);

// flatmap: 중첩된 배열을 쫘악 펴줌
result = nums.map((item) => [1, 2]);
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);
result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경!
// 새로운 배열 반환이 아님
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => {
	return a - b;
});
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
	sum += value;
	return sum;
});
console.log(result);
result = numbers.reduce((sum, value) => {
	sum += value;
	return sum;
});
console.log(result);
