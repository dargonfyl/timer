var timer = 0;
var workStatus = true; // Status is rest or work; true == work
var interval;

var workTime, restTime;

var start = () => {
	workTime = work.value;
	restTime = rest.value;

	timer = work.value;
	console.log(timer);

	countdown.innerHTML = timer;
	status.innerHTML = "Work";
	interval = setInterval(run, 1000);
};

var run = () => {
	if (timer > 0) {
		timer--;
		console.log(timer);
	} else {
		alertSound.play();
		if (workStatus) {
			timer = restTime;
			status.innerHTML = "Rest";
		} else {
			timer = workTime;
			status.innerHTML = "Work";
		}
		workStatus = !workStatus;
	}
	countdown.innerHTML = timer;
};
