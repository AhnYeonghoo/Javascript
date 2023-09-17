let id = Symbol();
id = Symbol('id');
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2);
console.log(id1.toString());
console.log(id2.toString());
console.log(id1.description);
console.log(id2.description);

let user = {
	name: 'John',
};

user[id] = 1;
console.log(user[id]);

id = Symbol('id');
user = {
	name: 'John',
	[id]: 123,
};

for (let key in user) {
	console.log(key);
}

let clone = Object.assign({}, user);
console.log(clone[id]);

id = Symbol.for('id');
let idAgain = Symbol.for('id');
console.log(id === idAgain);

let sym = Symbol.for('name');
let sym2 = Symbol.for('id');
console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

let globalSymbol = Symbol.for('name');
let localSymbol = Symbol('name');

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol));
console.log(localSymbol.description);
