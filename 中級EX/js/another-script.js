$(function(){
  AOS.init({
    duration:2000
  });

  
//  modal
$('.reserve-btn').click(function(){
  $('#reserve-modal, .modal-wrapper').fadeIn();
});
$('.close-modal').click(function(){
  $('#reserve-modal, .modal-wrapper').fadeOut();
});

// タブ
$(".newslist-show:eq(1)").css("display","none");
$('.tab').on('click',function(){
  var index = $('.tab').index(this);
  $('.tab').removeClass('active')
  $(this).addClass('active');
  $('.newslist-show').hide().eq(index).fadeIn();
});

//  humberger
$(".humburger").click(function(){
  $(this).toggleClass('active');
  $("#humburger-nav").toggleClass('panelactive')
});

$("#humburger-nav a").click(function(){
  $(".humburger").removeClass('active');
  $("humburger-nav").removeClass('panelactive');
});
 
});