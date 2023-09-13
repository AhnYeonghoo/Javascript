// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
	#number;

	constructor(number) {
		if (number >= 0) {
			this.#number = number;
		} else {
			this.#number = 0;
		}
	}

	get currentNumber() {
		return this.#number;
	}

	addNumber() {
		this.#number++;
	}
}
