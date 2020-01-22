
	let div = $('.header__icon, .nav_mobile');
	let button = $('.header__button');
	let nav = $('.nav_mobile');

	div.click(function(){
		button.toggleClass('open');
		nav.toggleClass('hide');
	});


 (function (d, w, c) {
   (w[c] = w[c] || []).push({formId:116565,host:"formdesigner.ru",formHeight:0, el: "form_116565_1", center: 0});
   var s = d.createElement("script"), g = "getElementsByTagName";
   s.type = "text/javascript"; s.charset="UTF-8"; s.async = true;
   s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.ru/js/iform.js";
   var h=d[g]("head")[0] || d[g]("body")[0];
   h.appendChild(s);
})(document, window, "fdforms")

  
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	$('#up').addClass('show');
	} else {
	$('#up').removeClass('show');
	}
});

$('#up').click(function(e) {
	e.preventDefault();
	$('body, html').animate({scrollTop:0}, '300');
});
  

