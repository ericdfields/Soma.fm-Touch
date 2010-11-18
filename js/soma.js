$('li a').live('click',function(e){
  e.preventDefault();
  if ( $(this).hasClass('active') ) {
    $(this).removeClass('active');                 
    audioElement.pause();
  } else {
    $('li a').removeClass('active');
    $(this).addClass('active');
    audioElement.setAttribute('src',$(this).attr('href'));
    audioElement.play();       
  }                            
});

var audioElement = document.createElement('audio');