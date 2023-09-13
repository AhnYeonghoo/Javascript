const x = 0;
const y = 0;
const coordinate = { x: x, y: y };
const coordinate2 = { x, y };
console.log(coordinate);
console.log(coordinate['x']);
console.log(coordinate2);

function makeObj(name, age) {
	return {
		name,
		age,
	};
}

const obj = makeObj('name', 'ahn');
console.log(obj);
