let user = {};
console.log(user?.address?.street);
user = {
	address: {
		street: 'dd',
	},
};
console.log(user?.address?.street);

user = null;
let x = 0;
user?.sayHi(x++); // 아무 일도 일어나지 않는다.
console.log(x);
let user1 = {
	admin() {
		console.log(`관리자 계정입니다`);
	},
};
let user2 = {};
user1.admin?.();
user2.admin?.();

user1 = {
	firstName: 'Violet',
};

user2 = null;
let key = 'firstName';
console.log(user1?.[key]);
console.log(user2?.[key]);
console.log(user1?.[key]?.something?.not?.existing);
delete user?.name;
