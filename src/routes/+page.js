export async function load() {
	let paradas = await fetch('http://api.ctan.es/v1/Consorcios/3/lineas/926/paradas');
	let mierdon = await paradas.json();

	let pUnicas = console.log(mierdon);
}

function unique(array) {
	return array.reduce((a, b) => {
		let isIn = a.find((element) => {
			return element === b;
		});
		if (!isIn) {
			a.push(b);
		}
		return a;
	}, []);
}
