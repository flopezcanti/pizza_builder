// Write your Pizza Builder JavaScript in this file.


$('.btn-pepperonni').on('click', function(event) {
	$('.pep').toggle();
	$(event.currentTarget).toggleClass('active')
});

$('.btn-mushrooms').on('click', function(event) {
	$('.mushroom').toggle();
	$(event.currentTarget).toggleClass('active')
});

$('.btn-green-peppers').on('click', function(event) {
	$('.green-pepper').toggle();
	$(event.currentTarget).toggleClass('active')
});

$('.btn-sauce').on('click',function(event){
  $('.sauce').toggleClass('sauce-white');
  $(event.currentTarget).toggleClass('active')
});

$('.btn-crust').on('click',function(event){
  $('.crust').toggleClass('crust-gluten-free');
  $(event.currentTarget).toggleClass('active')
});

