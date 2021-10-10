$(function() {
 let header = $('.header-inner');
 let logo = $('.sitelogo');
 let listitem = $('.list-item');
 let logoblack = document.write

 $(window).scroll(function (){
  var height = $(window).height();

   if($(this).scrollTop() >= height ){
      header.css('background','#FFFFFF');
      logo.css('display','none');
      $(".changesitelogo").css('display','block');
      listitem.find('a').css('color','#000000');
      $(".humburger span").css('background','#000');
      $(".fff span").css('background','#000');


   }else{
     header.css('background','none');
     listitem.find('a').css('color','#FFFFFF');
     logo.css('display','block');
     $(".changesitelogo").css('display','none');
     $(".humburger span").css('background','#FFFFFF');
    
   }
 });
 
//  swiper
 var mySwiper = new Swiper('.swiper-container',{
   loop:true,
   effect: 'fade',
   autoplay: {
     delay: 4000,
     stopOnLastSlide:false,
     disableOnInteraction:false,
     reverseDirection:false
   },
  
   });
 
  //  new Swiper(".swiper-continer",swipeOption);

 

//  flatpickr
$("#calendar").flatpickr();
 flatpickr('#calendar',{
   locale: 'ja',
   allowInput:true,   //  手入力
   minDate:"today",   //  今日以前を選択不可
   mode: "range"
  //  日付の範囲入力
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

//aos

 AOS.init({
   duration:3000
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