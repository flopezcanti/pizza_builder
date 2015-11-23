// Write your Pizza Builder JavaScript in this file.



function changeTotal(toppingPrice) {

	var total = $('.panel.price strong').text().replace('$', '');
	var	totalInt = parseInt(total)
	$('.panel.price strong').text('$' + (totalInt + toppingPrice));
}

$('.btn-pepperonni').on('click', function(event) {
	$('.pep').toggle();
	var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active')

	if (currentElement.hasClass('active')) {
			changeTotal(1)
	} else {
			changeTotal(-1)
	}
});

$('.btn-mushrooms').on('click', function(event) {
	$('.mushroom').toggle();
	var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active')

	if (currentElement.hasClass('active')) {
			changeTotal(1)
	} else {
			changeTotal(-1)
	}
});

$('.btn-green-peppers').on('click', function(event) {
	$('.green-pepper').toggle();
	var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active')

	if (currentElement.hasClass('active')) {
			changeTotal(1)
	} else {
			changeTotal(-1)
	}
});

$('.btn-sauce').on('click',function(event){
  $('.sauce').toggleClass('sauce-white');
  var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active')

	if (currentElement.hasClass('active')) {
			changeTotal(3)
	} else {
			changeTotal(-3)
	}
});

$('.btn-crust').on('click',function(event){
  $('.crust').toggleClass('crust-gluten-free');
  var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active')

	if (currentElement.hasClass('active')) {
			changeTotal(5)
	} else {
			changeTotal(-5)
	}
});