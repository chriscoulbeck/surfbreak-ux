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


// Open Modal on Click
$(document).ready(function() {
  $('.img').on("click", function() {
    $('.gallery-modal').css('display', 'flex');
    let imgUrl = $(this).data('img');
    $('.modal-image').css('background-image', `url(${imgUrl})`);
    $('html').css('overflow-y', "hidden");
  });
})

// Close Modal on Click
$(document).ready(function() {
  $('.icon-cross').on('click', function() {
    $('.gallery-modal').css('display', 'none');
    $('html').css('overflow-y', "auto");
  });
})

$(document).ready(function() {
  $('.image-num').text('CHRIST IS KING');
})