const apple = {
	name: 'apple',
	display: function () {
		console.log(`${this.name}`);
	},
};

const orange = {
	name: 'orange',
	display: function () {
		console.log(`${this.name}`);
	},
};

apple.display();
orange.display();

// 생성자 함수!
function Fruit(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	this.display = () => {
		console.log(`${this.name}: ${this.emoji}`);
	};
	return this; // 생략 가능
}

const banana = new Fruit('banana', 'bananaEmoji');
const kiwi = new Fruit('kiwi', 'kiwiEmoji');
console.log(banana);
console.log(kiwi);
console.log(banana.name);
banana.display();
kiwi.display();
