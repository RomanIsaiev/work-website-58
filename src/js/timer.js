function getTimeRemaining(endtime) {
  var t = endtime - new Date().getTime();
  var milliseconds = Math.floor((t % 1000) / 10);
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    total: t,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var millisecondsSpan = clock.querySelector('.milliseconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    millisecondsSpan.innerHTML = ('0' + t.milliseconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      minutesSpan.innerHTML = '00';
      secondsSpan.innerHTML = '00';
      millisecondsSpan.innerHTML = '00';
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 10);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 60 * 1000);
initializeClock('countdown-one', deadline);
initializeClock('countdown-two', deadline);
