var currentDate = new Date();
currentDate.setDate(currentDate.getDate());
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var formattedDate = day;
document.getElementById('dateElement').innerHTML = formattedDate;

// **************************************************************************

var current_date = new Date();
current_date.setDate(current_date.getDate() + 1);

var month = new Array(
  'СІЧНЯ',
  'ЛЮТОГО',
  'БЕРЕЗНЯ',
  'КВІТНЯ',
  'ТРАВНЯ',
  'ЧЕРВНЯ',
  'ЛИПНЯ',
  'СЕРПНЯ',
  'ВЕРЕСНЯ',
  'ЖОВТНЯ',
  'ЛИСТОПАДА',
  'ГРУДНЯ'
);
document.getElementById('monthElement').innerHTML =
  month[current_date.getMonth()];
