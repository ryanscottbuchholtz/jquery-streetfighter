$(document).ready(function() {
  
  $('.ryu').mouseenter(function(){
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  
  }).mouseleave(function(){
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  });

  $('.ryu').mousedown(function(){
    playHadouken();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '2400px'},
      1000,
      function() {
        $(this).hide();
        $(this).css('left', '617px');
      }
    );
  });

  $('.ryu').mouseup(function(){
    $('.ryu-still').show();
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
  });

  $(document).keydown(function(e){
    if(e.keyCode === 88) {
      document.body.style.pointerEvents='none';
      $('.ryu-cool').show();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
    }
  });
  $(document).keyup(function(e){
    if(e.keyCode === 88) {
      document.body.style.pointerEvents='auto';
      $('.ryu-still').show();
      $('.ryu-throwing').hide();
      $('.ryu-cool').hide();
      $('.ryu-ready').hide();
    }
  });


});

function playHadouken() {
  document.getElementById('hadouken-sound').volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}