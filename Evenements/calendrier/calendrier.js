
$('.day').click(function(){
  if ($(this).hasClass('future')){
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html("<h2>Naughty, naughty.</h2> <p>You can't look early! Check back on that day to see what I've left for you.</p>");
  }
  if ($(this).hasClass('past')){
    var content = $(this).children('.surprise').html();
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html('');
    $('#modal .wrapper .content .box').html(content);
  }
})

// close modal

$('.close').click(function(){
  var ultimateParent = $(this).parent().parent().parent();
  ultimateParent.addClass('moveOut');
  setTimeout(function(){
    ultimateParent.removeClass('moveOut').removeClass('active');
  },250);
})

// snow effect customizations

$(document).snowfall({flakeCount : 100,collection : '.collectonme',  maxSpeed : 10});

alert('bg');