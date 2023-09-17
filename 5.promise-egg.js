function fetchEgg(chicken) {
	return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
	return Promise.resolve(`${egg} => 계란`);
}

function getChicken() {
	return Promise.resolve('가든 => 닭');
}

fetchEgg('cc').then((egg) => console.log(egg));

getChicken()
	.then((chicken) => fetchEgg(chicken))
	.then((egg) => fryEgg(egg))
	.then((friedEgg) => console.log(friedEgg));

getChicken().then(fetchEgg).then(fryEgg).then(console.log);
