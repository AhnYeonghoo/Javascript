class Counter {
	#value;
	constructor(startValue) {
		if (isNaN(startValue) || startValue < 0) {
			this.#value = 0;
		} else {
			this.#value = startValue;
		}
	}

	get value() {
		return this.#value;
	}

	increment = () => {
		this.#value++;
	};
}
