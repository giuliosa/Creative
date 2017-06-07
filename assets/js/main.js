

$(function(){
 var nav = $('.header-menu');
 var drop = $('.drop');
 $(window).scroll(function () {
   if ($(this).scrollTop() > $('.header-menu').innerHeight()) {
     nav.addClass("menu-fixo");
     drop.addClass("drop-fixo");
   } else {
     nav.removeClass("menu-fixo");
     drop.removeClass("drop-fixo");  
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

// Animação no scroll

debounce = function(func, wait, immediate){
  var timeout;
  return function(){
    var context = this, args = arguments;
    var later = function(){
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function() {
  var $target = $('.anime'),
      animationClass = 'animated fadeInDown',
      offset = $(window).height();

      function animeScroll(){
        var documentTop = $(document).scrollTop();

        $target.each(function(){
          var itemTop = $(this).offset().top;
          if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
          }
        });
      }

      animeScroll();

      $(document).scroll(debounce(function(){
        animeScroll();
      },100))
}());

Visibility.onVisible(function(){
  setTimeout(function(){
    $(".imagem-intro h1").addClass("animated fadeInDown");
  }, 400);
});
