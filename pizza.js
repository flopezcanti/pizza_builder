// Write your Pizza Builder JavaScript in this file.

function changeTotal(toppingPrice) {

	var total = $('.panel.price strong').text().replace('$', '');
	var	totalInt = parseInt(total);
	$('.panel.price strong').text('$' + (totalInt + toppingPrice));
}

$('.btn-pepperonni').on('click', function(event) {
	$('.pep').toggle();
	var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active');

	if (currentElement.hasClass('active')) {
			changeTotal(1);
	} else {
			changeTotal(-1);
	}

	$('.panel.price ul li:nth-child(1)').toggle();
});

$('.btn-mushrooms').on('click', function(event) {
	$('.mushroom').toggle();
	var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active');

	if (currentElement.hasClass('active')) {
			changeTotal(1);
	} else {
			changeTotal(-1);
	}
	$('.panel.price ul li:nth-child(2)').toggle();
});

$('.btn-green-peppers').on('click', function(event) {
	$('.green-pepper').toggle();
	var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active');

	if (currentElement.hasClass('active')) {
			changeTotal(1);
	} else {
			changeTotal(-1);
	}
	$('.panel.price ul li:nth-child(3)').toggle();
});

$('.btn-sauce').on('click',function(event){
  $('.sauce').toggleClass('sauce-white');
  var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active');

	if (currentElement.hasClass('active')) {
			changeTotal(3);
	} else {
			changeTotal(-3);
	}
	$('.panel.price ul li:nth-child(4)').toggle();
});

$('.btn-crust').on('click',function(event){
  $('.crust').toggleClass('crust-gluten-free');
  var currentElement = $(event.currentTarget);
	currentElement.toggleClass('active');

	if (currentElement.hasClass('active')) {
			changeTotal(5);
	} else {
			changeTotal(-5);
	}
	$('.panel.price ul li:nth-child(5)').toggle();
});


$('.btn-mushrooms, .btn-green-peppers, .btn-sauce, .btn-crust').trigger('click');
