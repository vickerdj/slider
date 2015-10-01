$('document').ready(function(){
	var images = [];
	images[0] = {
		name: 'arch.jpg',
		caption:''
	};
	images[1] = {
		name: 'bike.jpg',
		caption:''
	};
	images[2] = {
		name: 'canyon.jpg',
		caption:''
	};

	var addSlides = function(a){
		for (elt in a) {
			$('.container').append('<div class="slide"><img class="slideImage" src="images/'+images[elt].name+'"></div>')
		};
	};
	addSlides(images);
	

});