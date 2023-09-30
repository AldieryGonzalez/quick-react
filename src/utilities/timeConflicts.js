const stringToDays = (str) => {
	const refDays = ["M", "Tu", "W", "Th", "F"];
	let res = [];
	for (const day of refDays) {
		if (str.includes(day)) res.push(day);
	}
	return res;
};

const stringToTime = (str) => {
	let [courseStartTime, courseEndTime] = str
		.replaceAll(":", "")
		.split("-")
		.map((str) => parseInt(str));
	return [courseStartTime, courseEndTime];
};

const daysHaveIntersection = (d1, d2) => {
	d1 = stringToDays(d1);
	d2 = stringToDays(d2);
	const intersection = d1.filter((element) => d2.includes(element));
	return intersection.length > 0;
};

const periodHasIntersection = (a, b) => {
	a = stringToTime(a);
	b = stringToTime(b);
	return a[0] <= b[1] && a[1] >= b[0];
};

const isConflicted = (course, selected) => {
	let res = Object.values(selected)
		.filter((selected) => {
			return selected.term == course.term;
		})
		.reduce((acc, sc) => {
			let [courseDays, courseTime] = course.meets.split(" ");
			let [selectedDays, selectedTime] = sc.meets.split(" ");
			let dayIntersection = daysHaveIntersection(
				courseDays,
				selectedDays
			);
			let timeIntersection = periodHasIntersection(
				courseTime,
				selectedTime
			);

			if (
				!dayIntersection ||
				!timeIntersection ||
				course.number == sc.number
			)
				return acc || false;

			return acc || true;
		}, false);
	return res;
};

export default isConflicted;
