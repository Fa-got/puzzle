Swiper = function(myElement, myOptions){
	this.myElement = myElement;
	this.myOptions = {
	  preventDefault: true,
	};

	this.hammertime = new Hammer(this.myElement[0])
	this.hammertime.get('swipe')

	this.direction;
	
	this.margin = parseInt(this.myElement.css('left'));
	//this.stopPoint = parseInt(this.myElement.find('div.slide-wraper').css('width'))-parseInt((this.myElement.css('width')));
	this.init();

	//eventHand(this);
	
}
Swiper.prototype.init = function(){
	self = this;

	// sliderImg = $('aside.slider > div.slider-img').find('img.puzzle-img');
	//  $.each(sliderImg, function( k , v ){
	//  	// v.src = 'source/img/puzzle-img/'+k+'.jpg';
	//  	$(v).attr({'src':'source/img/puzzle-img/'+k+'.jpg'});
	//  	$(v).attr({'data-puzzle':k})
	//  	v.onload = function(){
	// 		if(v.height > v.width){
	// 			$(v).css({height: '100%'});
	// 		}else{
	// 			$(v).css({width: '100%'});
	// 		}
	// 	}
	//  })

}

Swiper.prototype.swipeLeft = function(ev){

	// this.margin -= ev.distance;
	// if((this.margin+this.stopPoint) <= 0) this.margin = -(this.stopPoint+200)
	this.myElement.animate({ 'right':'-500px' }, 1000, 'easeOutQuint')
}
Swiper.prototype.swipeRight = function(ev){
	// this.margin += ev.distance;
	// if(this.margin >= 0) this.margin = 0	
	this.myElement.animate({ 'right': '1300px' }, 1000, 'easeOutQuint')
}
// Swiper.prototype.reset = function(){
// 	this.margin = 0;
// 	this.myElement.find('.slide-wraper').animate({ 'margin-left': this.margin+'px' }, 600, 'easeOutQuint');
// }



module.exports = Swiper;





