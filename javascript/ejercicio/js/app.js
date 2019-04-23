$(document).ready(function(){
  $('div').on('click', function(){
    $('body').removeClass();
      if ($(this).attr('id') == 1) {
            $('body').addClass('yellow')
      } else if ($(this).attr('id') == 2) {
            $('body').addClass('blue')
      } else if ($(this).attr('id') == 3) {
            $('body').addClass('red')
      }
      console.log(this)
  });
});
