export function dateFromHour(timeHours) {
	let hours = timeHours.split(':')[0];
	let minutes = timeHours.split(':')[1];
	let date = new Date();

	date.setHours(hours);
	date.setMinutes(minutes);
	return date;
}
