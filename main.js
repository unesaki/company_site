
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle("in");
});


function fadeAnime(){

$('.fadeUpTrigger').each(function(){ 
  var elemPos = $(this).offset().top-50; 
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
  } else {
    $(this).removeClass('fadeUp');
  }
});


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();
});