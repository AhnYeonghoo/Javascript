// 퀴즈2
// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
	#name;
	#department;
	#workTime;

	constructor(name, department, workTime) {
		this.#name = name;
		this.#department = department;
		this.#workTime = workTime;
	}

	get getName() {
		return this.#name;
	}

	get getDepartment() {
		return this.#department;
	}

	get getWorkTime() {
		return this.#workTime;
	}

	set setName(name) {
		this.#name = name;
	}

	set setWorkTime(workTime) {
		this.#workTime = workTime;
	}

	set setDepartment(department) {
		this.#department = department;
	}
}

class FulltimeEmployee extends Employee {
	#salary = 10000;

	calculatorSalary() {
		return this.#salary * super.getWorkTime;
	}
}

class ParttimeEmployee extends Employee {
	#salary = 8000;

	calculatorSalary() {
		return this.#salary * super.getWorkTime;
	}
}

const parttime = new ParttimeEmployee('ahn', 'dd', 300);
const fulltime = new FulltimeEmployee('kim', 'dd', 400);
console.log(parttime.calculatorSalary());
console.log(fulltime.calculatorSalary());
