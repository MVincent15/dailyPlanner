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
});
