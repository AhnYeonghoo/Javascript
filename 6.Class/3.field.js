// 접근제어자 - 캡슐화
// private, public, protected -> 타언어
// js에서는 public이 기본
// private은 #을 붙이면 됨

class Fruit {
	#name;
	#emoji;
	#type = '과일';
	constructor(name, emoji) {
		this.#name = name;
		this.#emoji = emoji;
	}

	display = () => {
		console.log(`${this.#name} : ${this.#emoji}`);
	};
}

const apple = new Fruit('apple', 'appleEmoji');
console.log(apple);
//apple.#name = 'orange; // #을 붙인 private 맴버는 외부에서 접근 불가능
// 접근제어자
