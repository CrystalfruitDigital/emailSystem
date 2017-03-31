/* The Services Buttons */
$('.info-box-media').on('click', function() {
  $(this).toggleClass('close-media');
  $('.text').toggleClass('open-media')
});

$('.info-box-red').on('click', function() {
  $(this).toggleClass('close-red');
  $('.text').toggleClass('open-red')
});

$('.info-box-mill').on('click', function() {
  $(this).toggleClass('close-mill');
  $('.text').toggleClass('open-mill')
});

$('.info-box-social').on('click', function() {
  $(this).toggleClass('close-social');
  $('.text').toggleClass('open-social')
});

$('.info-box-market').on('click', function() {
  $(this).toggleClass('close-market');
  $('.text').toggleClass('open-market')
});

$('.info-box-ad').on('click', function() {
  $(this).toggleClass('close-ad');
  $('.text').toggleClass('open-ad')
});

$('.info-box-crisis').on('click', function() {
  $(this).toggleClass('close-crisis');
  $('.text').toggleClass('open-crisis')
});
