
CreatePuzzle = function (length, aria, Dataimg){

	this.aria = aria;
	this.Dataimg = Dataimg;
	this.length = length;

	this.b=1;
	this.i=1;
	this.c=1;
// console.log(this.Dataimg)
}

CreatePuzzle.prototype.creates = function(){
	if(this.Dataimg == 2 || this.Dataimg == 7){
		switch(this.length){
		
		
			case 12:
				this.marginX = 224;
         		this.marginY = 223;
				while (this.i <= this.length && this.b <=this.length) {
					if(this.i== 4 || this.i == 7 || this.i == 10){
					this.b = 1 
					this.c = this.c+1
					}
					 var pic =  '<div class="group" data-type="vert" " data-num-vert="'+this.i+'" data-with="'+this.marginX+'" data-haight="'+this.marginY+'"> <div class="piece"  data-row="'+this.c+'" data-column="'+this.b+'" data-connect="false"> <img src="source/img/puzzle/'+this.Dataimg+'_12/'+this.i+'.png"></div> </div>'
						this.i++
						this.b++
					this.aria.append(pic)
				}
			break;

			case 48:
				this.marginX = 112;
         		this.marginY = 112;
				
				while (this.i <= this.length && this.b <=this.length) {
					if(this.i== 7 || this.i == 13 || this.i == 19 || this.i == 25 || this.i == 31 || this.i == 37 || this.i == 43){
					this.b = 1 
					this.c = this.c+1
					}
					var pic =  '<div class="group" data-type="vert" data-num-vert="'+this.i+'" data-with="'+this.marginX+'" data-haight="'+this.marginY+'"> <div class="piece" data-row="'+this.c+'" data-column="'+this.b+'" data-connect="false"> <img src="source/img/puzzle/'+this.Dataimg+'_48/'+this.i+'.png"></div> </div>'
						this.i++
						this.b++
					this.aria.append(pic)
				}
			break;

			case 108:
				this.marginX = 74;
        		this.marginY = 73;
				while (this.i <= this.length && this.b <=this.length) {
					if(this.i== 10 || this.i == 19 || this.i == 28 || this.i == 37 || this.i == 46 || this.i == 55 || this.i == 64 || this.i == 73 || this.i == 82 || this.i == 91 || this.i == 100){
					this.b = 1 
					this.c = this.c+1
					}
					 var pic =  '<div class="group" data-type="vert" data-num-vert="'+this.i+'" data-with="'+this.marginX+'" data-haight="'+this.marginY+'"> <div class="piece" data-row="'+this.c+'" data-column="'+this.b+'" data-connect="false"> <img src="source/img/puzzle/'+this.Dataimg+'_108/'+this.i+'.png"></div> </div>'
						this.i++
						this.b++
					this.aria.append(pic)
				}
		
			break;		
		}

	}else{
		switch(this.length){

			case 12:
				this.marginX = 224;
         		this.marginY = 223;
				while (this.i <= this.length && this.b <=this.length) {
					if(this.i== 5 || this.i == 9){
					this.b = 1 
					this.c = this.c+1
					}
					 var pic =  '<div class="group" data-type="hor" data-num-hor="'+this.i+'" data-with="'+this.marginX+'" data-haight="'+this.marginY+'"> <div class="piece" data-row="'+this.c+'" data-column="'+this.b+'" data-connect="false"> <img src="source/img/puzzle/'+this.Dataimg+'_12/'+this.i+'.png"></div> </div>'
						this.i++
						this.b++
					this.aria.append(pic)
				}
			break;

			case 48:
				this.marginX = 112;
         		this.marginY = 112;
				while (this.i <= this.length && this.b <=this.length) {
					if(this.i== 9 || this.i == 17 || this.i == 25 || this.i == 33 || this.i == 41 ){
					this.b = 1 
					this.c = this.c+1
					}
					var pic =  '<div class="group" data-type="hor" data-num-hor="'+this.i+'" data-with="'+this.marginX+'" data-haight="'+this.marginY+'"> <div class="piece" data-row="'+this.c+'" data-column="'+this.b+'" data-connect="false"> <img src="source/img/puzzle/'+this.Dataimg+'_48/'+this.i+'.png"></div> </div>'
						this.i++
						this.b++
					this.aria.append(pic)
				}
			break;

			case 108:
				this.marginX = 74;
        		this.marginY = 73;
				while (this.i <= this.length && this.b <=this.length) {
					if(this.i== 13 || this.i == 25 || this.i == 37 || this.i == 49 || this.i == 61 || this.i == 73 || this.i == 85 || this.i == 97 ){
					this.b = 1 
					this.c = this.c+1
					}
					 var pic =  '<div class="group" data-type="hor" data-num-hor="'+this.i+'" data-with="'+this.marginX+'" data-haight="'+this.marginY+'"> <div class="piece" data-row="'+this.c+'" data-column="'+this.b+'" data-connect="false"> <img src="source/img/puzzle/'+this.Dataimg+'_108/'+this.i+'.png"></div> </div>'
						this.i++
						this.b++
					this.aria.append(pic)
				}
		
			break;		
		}
		
	}	
	this.randomise(this.aria)
		//puzzleEvent = new PuzzleEvent(this.aria, this.Dataimg);

}

CreatePuzzle.prototype.randomise = function(aria){
	var self = this;
    var containerW = aria.width() ;
    var containerH = aria.height();
    var positions = [];
    var elems = this.aria.find($('.group'));
    elems.each(function(key) {
        // var coords = {
        //     w: $(this).find('.piece').outerWidth(true),
        //     h: $(this).find('.piece').outerHeight(true)
        // };
        var coords = {
            w: containerW / self.b,
            h: containerH / self.c
        };
        var success = false;
        count = 1;
        while (!success)
        {
            coords.x = parseInt(Math.random() * (containerW-coords.w));
            coords.y = parseInt(Math.random() * (containerH-coords.h));
            var success = true;
            count++;
            if(count > 900) return;  
        }

        positions.push(coords);

        var offsetAria = aria.offset()
        $(this).css({
            'display': 'block',
            top: coords.y + offsetAria.top  + 'px',
            left: coords.x + offsetAria.left + 'px'
        });
    });
  }

module.exports = CreatePuzzle;