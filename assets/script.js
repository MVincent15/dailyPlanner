$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  
  var saveButton = $('.saveBtn');
  var timeBlock = $('.time-block');
  var currentTime = dayjs().format('HH');

  saveButton.on('click', function() {
    var hourNumber = $(this).parent().attr('id').split('-')[1];
    var descriptionValue = $(this).parent().find('.description').val();
    localStorage.setItem(hourNumber,descriptionValue);
    //did not add success alert for button, was in example but not in acceptance criteria??
  });

  
  timeBlock.each(function() {
    var hour = $(this).attr("id").split('-')[1];
    var text = $(this).find('.description');
    text.val(localStorage.getItem(hour));
    
    if (hour < currentTime) {
      $(this).addClass('past');
    } else if (hour === currentTime){
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
  
  



  // TODO: add alistener for click events on the save button. This code should
  // use the id in the contning time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
