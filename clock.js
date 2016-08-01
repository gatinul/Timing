window.onload = function() {

	var deadline = '2016-12-31';

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / 1000 / 60 / 60) % 24);
		var days = Math.floor((t / 1000 / 60 / 60 / 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};

	}

	function initializeClock(id, endtime) {
		var clock = document.getElementById('clockdiv')
		function updateClock(){
			var t = getTimeRemaining(endtime);
			clock.innerHTML = 'days' + t.days + '&lt;br&gt;' + 'hours' + t.hours + '&lt;br&gt;' + 'minutes' + t.minutes + '&lt;br&gt;' + 'seconds' + t.seconds;
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
		updateClock();
		var timeinterval = setInterval(updateClock,1000);
	}
	initializeClock('clockdiv', deadline);
};