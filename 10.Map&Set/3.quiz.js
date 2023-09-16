// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
const set = new Set(fruits);
console.log(set);

function removeDuplication(array) {
	return [...new Set(array)];
}

console.log(removeDuplication(fruits));
// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const set4 = new Set();
set1.forEach((num) => {
	if (set2.has(num)) {
		set4.add(num);
	}
});
function findIntersection(set1, set2) {
	const set = [...set1].filter((item) => set2.has(item));
	return new Set(set);
}
console.log(set4);
console.log(findIntersection(set1, set2));
