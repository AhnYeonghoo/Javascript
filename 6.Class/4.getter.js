// 접근자 프로퍼티(Accessor Property)
// Getter and Setter
class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// getter
	get fullName() {
		return `${this.lastName} ${this.firstName}`;
	}

	// setter
	set fullName(value) {
		console.log(value);
	}
}

const student = new Student('Yeonghoo', 'ahn');
console.log(student.fullName);
console.log(student.firstName);
student.fullName = 'kimyeonahoo';
