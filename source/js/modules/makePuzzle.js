
createPuzzle = function (length){

	var aria;
	var Dataimg = $('aside.slider div.slider-img').find('.puzzle-img.active').attr('data-puzzle')
		Dataimg = parseInt(Dataimg)+1

	var DataimgLeft = $('aside.slider-left div.slider-img-left ').find('.puzzle-img-left.active').attr('data-puzzle')
	DataimgLeft = parseInt(DataimgLeft)+1

	var DataimgRight = $('aside.slider-right div.slider-img-right').find('.puzzle-img-right.active').attr('data-puzzle')
	DataimgRight = parseInt(DataimgRight)+1

	if($('section.game-one').hasClass('active')){
		Dataimg = Dataimg
		aria = $('.puzzle-area')
	}else if( $('section.game-two-right').hasClass('active')){
		Dataimg = DataimgRight
		aria = $('.puzzle-area-right')
	}else if($('section.game-two-left').hasClass('active')){
		Dataimg = DataimgLeft
		aria = $('.puzzle-area-left')
	}

	console.log(Dataimg)


	var	b=1 
	var	i=1
	var c=1
	if(Dataimg == 2 || Dataimg == 7){
		switch(length){

			case 12:
				while (i <= length && b <=length) {
					if(i== 4 || i == 7 || i == 10){
					b = 1 
					c = c+1
					}
					 var pic =  '<div class="group "> <div class="piece" data-row="'+c+'" data-column="'+b+'" data-connect="false"> <img src="source/img/puzzle/'+Dataimg+'_12/'+i+'.png"></div> </div>'
						i++
						b++
					aria.append(pic)
				}
			break;

			case 48:
				while (i <= length && b <=length) {
					if(i== 7 || i == 13 || i == 19 || i == 25 || i == 31 || i == 37 || i == 43){
					b = 1 
					c = c+1
					}
					var pic =  '<div class="group "> <div class="piece" data-row="'+c+'" data-column="'+b+'" data-connect="false"> <img src="source/img/puzzle/'+Dataimg+'_48/'+i+'.png"></div> </div>'
						i++
						b++
					aria.append(pic)
				}
			break;

			case 108:
				while (i <= length && b <=length) {
					if(i== 10 || i == 19 || i == 28 || i == 37 || i == 46 || i == 55 || i == 64 || i == 73 || i == 82 || i == 91 || i == 100){
					b = 1 
					c = c+1
					}
					 var pic =  '<div class="group "> <div class="piece" data-row="'+c+'" data-column="'+b+'" data-connect="false"> <img src="source/img/puzzle/'+Dataimg+'_108/'+i+'.png"></div> </div>'
						i++
						b++
					aria.append(pic)
				}
		
			break;		
		}

	}else{
		switch(length){

			case 12:
				while (i <= length && b <=length) {
					if(i== 5 || i == 9){
					b = 1 
					c = c+1
					}
					 var pic =  '<div class="group "> <div class="piece" data-row="'+c+'" data-column="'+b+'" data-connect="false"> <img src="source/img/puzzle/'+Dataimg+'_12/'+i+'.png"></div> </div>'
						i++
						b++
					aria.append(pic)
				}
			break;

			case 48:
				while (i <= length && b <=length) {
					if(i== 9 || i == 17 || i == 25 || i == 33 || i == 41 ){
					b = 1 
					c = c+1
					}
					var pic =  '<div class="group "> <div class="piece" data-row="'+c+'" data-column="'+b+'" data-connect="false"> <img src="source/img/puzzle/'+Dataimg+'_48/'+i+'.png"></div> </div>'
						i++
						b++
					aria.append(pic)
				}
			break;

			case 108:
				while (i <= length && b <=length) {
					if(i== 13 || i == 25 || i == 37 || i == 49 || i == 61 || i == 73 || i == 85 || i == 96 ){
					b = 1 
					c = c+1
					}
					 var pic =  '<div class="group "> <div class="piece" data-row="'+c+'" data-column="'+b+'" data-connect="false"> <img src="source/img/puzzle/'+Dataimg+'_108/'+i+'.png"></div> </div>'
						i++
						b++
					aria.append(pic)
				}
		
			break;		
		}
	}

	

	function randomise(){
    var containerW = aria.width() - 200 ;
    var containerH = aria.height();
    var positions = [];
    var elems = $('.group');
    elems.each(function(key) {
        var coords = {
            w: $(this).outerWidth(true),
            h: $(this).outerHeight(true)
        };
        var success = false;
        count = 1;
        while (!success)
        {
            coords.x = parseInt(Math.random() * (containerW-coords.w));
            coords.y = parseInt(Math.random() * (containerH-coords.h));
            var success = true;
            $.each(positions, function(){ 
                if (coords.x <= (this.x + this.w) &&
                   (coords.x + coords.w) >= this.x &&
                   coords.y <= (this.y + this.h) &&
                   (coords.y + coords.h) >= this.y)
                {
                    success = false;
                }
            });
            count++;
            if(count > 900) return;  
        }

        positions.push(coords);
        $(this).css({
            'display': 'block',
            top: coords.y + 'px',
            left: coords.x + 'px'
        });
    });
  }

    randomise();

  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
puzzleEvent()

}

