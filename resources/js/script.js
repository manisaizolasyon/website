$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '+905320511771', //WhatsApp Business phone number International format-
    headerTitle: 'Bizimle Whatsapp üzerinden iletişim kurun!', //Popup Title
    popupMessage: 'Merhaba, nasıl yardımcı olabilirim?', //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right"    
  });
});

// bootstrap

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

// carousel

$('.carousel').carousel({
  interval: 4000
})
