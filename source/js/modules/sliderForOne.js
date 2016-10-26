Swiper = function(myElement, myOptions){
	this.myElement = myElement;
	this.myOptions = {
	  preventDefault: true,
	};

	this.hammertime = new Hammer(this.myElement[0])
	this.hammertime.get('swipe')

	this.direction;
	
	this.margin = parseInt(this.myElement.css('left'));
	
	this.init();
    this.c = 0;
	
}
Swiper.prototype.init = function(){
	self = this;
}


Swiper.prototype.swipeLeft = function(z, ev){
    this.c--;
    if(this.c == 1){
      this.myElement.animate({ 'right':'800px' }, 1000, 'easeOutQuint')   
    }else if(this.c == 0){
        this.myElement.animate({ 'right':''+z+'' }, 1000, 'easeOutQuint')
    }
     if(this.c <=0){
       this.c = 0; 
    }
    
}
Swiper.prototype.swipeRight = function(ev){
    this.c++;
    if(this.c == 1){
      this.myElement.animate({ 'right':'800px' }, 1000, 'easeOutQuint')   
    }else if(this.c == 2){
      this.myElement.animate({ 'right':'1800px' }, 1000, 'easeOutQuint')     
    }
    if(this.c >=2){
       this.c = 2; 
    }
    
}



module.exports = Swiper;





