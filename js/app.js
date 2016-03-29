$(document).ready(function() {
  
  $('.ryu').mouseenter(function(){
    // $('.ryu-cool').hide();
    // $('.ryu-still').hide();
    // $('.ryu-throwing').hide();
    // $('.ryu-ready').show();
    showThisImage('ryu-ready', 'ryu2');

  }).mouseleave(function(){
    // $('.ryu-cool').hide();
    // $('.ryu-throwing').hide();
    // $('.ryu-ready').hide();
    // $('.ryu-still').show();
    showThisImage('ryu-still', 'ryu2');
  });

  $('.ryu').mousedown(function(){
    playHadouken();
    // $('.ryu-still').hide();
    // $('.ryu-ready').hide();
    // $('.ryu-throwing').show();
    showThisImage('ryu-throwing', 'ryu2');
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
    // $('.ryu-still').show();
    // $('.ryu-ready').hide();
    // $('.ryu-throwing').hide();
    showThisImage('ryu-still', 'ryu2');
  });

  $(document).keydown(function(e){
    if(e.keyCode === 88) {
      document.body.style.pointerEvents='none';
      // $('.ryu-cool').show();
      // $('.ryu-ready').hide();
      // $('.ryu-still').hide();
      // $('.ryu-throwing').hide();
      showThisImage('ryu-cool', 'ryu2');
    }
  });
  $(document).keyup(function(e){
    if(e.keyCode === 88) {
      document.body.style.pointerEvents='auto';
      // $('.ryu-still').show();
      // $('.ryu-throwing').hide();
      // $('.ryu-cool').hide();
      // $('.ryu-ready').hide();
      showThisImage('ryu-ready', 'ryu2');
    }
  });


});

function playHadouken() {
  document.getElementById('hadouken-sound').volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


function showThisImage(imageClassNameToShow, imageClassNameToHide) {
  // 1) define two variables to capture elements to control
  var hiddenImages = document.getElementsByClassName(imageClassNameToHide);
  var visibleImage = document.getElementsByClassName(imageClassNameToShow);
  // 2) hide all images based on imageClassNameToHide
  $(hiddenImages).hide();
  // 3) show specific image based on imageClassName
  $(visibleImage).show();

}






