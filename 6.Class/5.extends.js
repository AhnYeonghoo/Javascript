class Animal {
	constructor(color) {
		this.color = color;
	}

	eat() {
		console.log('먹자!');
	}

	sleep() {
		console.log('잔다!');
	}
}

class Tiger extends Animal {}

class Dog extends Animal {
	constructor(color, ownerName) {
		super(color);
		this.ownerName = ownerName;
	}

	// overriding
	eat() {
		super.eat(); // 부모의 eat을 호출하고 오버라이딩한다.
		console.log(`${this.ownerName}이 먹이를 준다.`);
	}

	play() {
		console.log('놀자아~');
	}
}

const animal = new Animal('animalColor');
animal.eat();
const tiger = new Tiger('tigerColor');
tiger.sleep();
console.log(animal);
console.log(tiger);
const dog = new Dog('dogColor', 'ahnyeonghoo');
console.log(dog);
dog.eat();
