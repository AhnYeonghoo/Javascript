// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 구닥다리 방법 더이상 쓰이지 X)
// 2. 클래스 (ES6에 도입)

class Fruit {
	// 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};
}
// apple은 Fruit 클래스의 Instance이다.
const fruit = new Fruit('fruit', 'fruitEmoji');
const apple = new Fruit('apple', 'appleEmoji');
console.log(fruit);
fruit.display();

// obj는 객체고, 그 어떤 클래스의 인스턴스도 아니다.
const ojb = { name: 'ellie' };
