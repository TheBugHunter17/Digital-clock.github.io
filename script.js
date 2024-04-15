var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();

// Variable to track the time format (12-hour or 24-hour)
var is12HourFormat = true;

// Event listener for the button click
document.getElementById('timeFormatButton').addEventListener('click', toggleTimeFormat);

function updateTime() {
  var cd = new Date();
  var currentTime = formatTime(cd.getHours(), cd.getMinutes(), cd.getSeconds());
  var currentDate = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];

  document.getElementById('currentTime').innerHTML = currentTime;
  document.getElementById('currentDate').innerHTML = currentDate;
}

function formatTime(hours, minutes, seconds) {
  if (is12HourFormat) {
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    return zeroPadding(hours, 2) + ':' + zeroPadding(minutes, 2) + ':' + zeroPadding(seconds, 2) + ' ' + ampm;
  } else {
    return zeroPadding(hours, 2) + ':' + zeroPadding(minutes, 2) + ':' + zeroPadding(seconds, 2);
  }
}

function zeroPadding(num, digit) {
  var zero = '';
  for (var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

function toggleTimeFormat() {
  is12HourFormat = !is12HourFormat;
  updateTime();
}
