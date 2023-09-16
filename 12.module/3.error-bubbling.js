// Bubbling up, Propagating

function a() {
	throw new Error('error!');
}

function b() {
	try {
		a();
	} catch (error) {
		console.log('catched!!');
	}
}

function c() {
	b();
}

try {
	c();
} catch (error) {
	console.log('catched!');
}
console.log('done!');
