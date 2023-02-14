// My variable for most of the project.
var currentDay = dayjs()
var past = document.getElementsByClassName('past')
var present = document.getElementsByClassName('present')
var future = document.getElementsByClassName('future')

// Function to start once the page is done loading. 
$(document).ready(function () {

  // Select the save button, and add a function to it that save in local storage.
  $('.saveBtn').on('click', function(){
    var timeBlock = $(this).parent().attr('id');
    var textValue = $(this).siblings('.description').val()
    localStorage.setItem(timeBlock, textValue)
  })
  
  var currentHour = dayjs().hour()

  // Logic for class in the time sheet.
  for (var i = 9; i < 18; i++){
    var timeBlockHour = $("#hour-"+i)
    if (currentHour > i){
      timeBlockHour.addClass('past')
    } else if (currentHour === i) {
      timeBlockHour.addClass('present')
    }else {
      timeBlockHour.addClass('future')
    }
  }
  
  // This is where we get the local storage item and put it in its right div.
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))

  //This put the date and time at the top of the page.
  $('#currentDay').text(currentDay.format('ddd MMM D, YYYY HH:mm'))
});

