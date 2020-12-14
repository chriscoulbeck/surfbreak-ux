// NAV TOGGLE ------------------------------------
$(document).ready(function () {
  $(":checkbox").change(function () {
    $('.menu').toggleClass('is-hidden');
    $('.close').toggleClass('is-hidden');
    $('#site-navigation').toggleClass('is-hidden');
  });
});

const images = document.getElementsByClassName('img');
let sliderIndex = 0;