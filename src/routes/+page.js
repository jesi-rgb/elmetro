export async function load({ fetch }) {
	let promise = await fetch('http://api.ctan.es/v1/Consorcios/3/lineas/926/paradas');
	let data = await promise.json();

	let paradas = data.paradas.map((p) => p.idParada);

	let urlHorarios = paradas.map(
		(p) => 'http://api.ctan.es/v1/Consorcios/3/paradas/' + p + '/servicios?horaIni='
	);

	let top2horas = urlHorarios.map((url) => {
		// figure out how to fetch lots of urls on a loop or map
		let horaInfo = fetch(url);

		let horas = horaInfo.json();

		return {
			siguiente: horas[0].servicio,
			despues: horas[1].servicio
		};
	});

	console.log(top2horas);

	return data;
}
