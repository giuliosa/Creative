

$(function(){
 var nav = $('.header-menu');
 $(window).scroll(function () {
   if ($(this).scrollTop() > $('.header-menu').innerHeight()) {
     nav.addClass("menu-fixo");

   } else {
     nav.removeClass("menu-fixo");
   }
 });
});



/*Identificar o clique no menu
  Verificar o item que foi clicado e fazer a referência com o alvo
  Verificar a distância entre o alvo e o topo
  Animar o scrool até o alvo*/

$('.header-menu ul li a').click(function(e){
  e.preventDefault();

  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top,
      menuHeight = $('.header-menu').innerHeight();

  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);
});


$('.drop ul a').click(function(e){
  e.preventDefault();

  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top,
      menuHeight = $('.drop').innerHeight();

  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);
  $('.drop').hide();
  $('.cross').hide();
  $('.hamburguer').show();
});


//Hamburguer Menu Dropdown
$('.cross').hide();
$('.drop').hide();
$('.hamburguer').click(function(){
  $('.drop').slideToggle("slow", function(){
    $('.hamburguer').hide();
    $('.cross').show();
  });
});

$('.cross').click(function(){
  $('.drop').slideToggle("slow", function(){
    $('.cross').hide();
    $('.hamburguer').show();
  });
});
