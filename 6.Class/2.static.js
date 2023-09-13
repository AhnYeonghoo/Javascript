// static 메서드

class Fruit {
	static MAX_FRUITS = 5;
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	// 인스턴스 레벨의 메서드
	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};

	// 클래스 레벨의 메서드
	static makeRandomFruit = () => {
		return new Fruit('banana', 'bananaEmoji');
	};
}

const banana = Fruit.makeRandomFruit();
console.log(banana.name);
banana.display();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const result = Math.pow(5, 3);
console.log(result);
const boo = Number.isFinite(100);
console.log(boo);
