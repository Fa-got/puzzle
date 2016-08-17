
createPuzzle = function (img){
		if(img == undefined){
			console.log('картинка не найдена')
			return
		}else{
			var jsaw = new jigsaw.Jigsaw({
			defaultImage: "source/img/puzzle-img/"+img+".jpg",
			spread: .5,
			piecesNumberTmpl: "%d"
			});
			if (jigsaw.GET["image"]) { jsaw.set_image(jigsaw.GET["image"]); }
			setTimeout(function() { 
				clickToComplexity()
			}, 500)
			}
		}

clickToComplexity = function(){

	$('ul.complexity li').on('touchstart', function(){
		$('ul.complexity').children('li').removeClass('active')
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}else{
			$(this).addClass('active')
			$('div.game-button').removeClass('none')
			$('h1.complexity').empty().append($(this).html() + ' <span>пузелов</span>')
		}
	})
}


$('article.intro > div.button:nth-child(4)').on('click', function () {
	$('article.intro').addClass('none');
	$('section.game-for-one').removeClass('none');
	
	sliderImg = $('aside.slider  div.slider-img').find('img.puzzle-img');
	 $.each(sliderImg, function( k , v ){
	 	// v.src = 'source/img/puzzle-img/'+k+'.jpg';
	 	$(v).attr({'src':'source/img/puzzle-img/'+k+'.jpg'});
	 	$(v).attr({'data-puzzle':k})
	 	v.onload = function(){
			if(v.height > v.width){
				$(v).css({height: '100%'});
			}else{
				$(v).css({width: '100%'});
			}
		}
	 })
	
	
	// тут сформируются картинки

})
	 once = false;
$('aside.slider div.slider-img').on('click' , function(){
	
	$('aside.slider  div.slider-img  img.choise' ).addClass('none')	
	if($('img.choise',this).hasClass('none')){	
		$('img.choise',this).removeClass('none')
	}else{
		$('img.choise',this).addClass('none')	
	}

	$('aside.slider  div.slider-img  img.puzzle-img').removeClass('active')
	if($('img.puzzle-img',this).hasClass('active')){
	 	$('img.puzzle-img',this).removeClass('active')
	}else{
		$('img.puzzle-img',this).addClass('active')
		var img = $('aside.slider').find('img.active').attr('data-puzzle')
		$('div.img-icon > img').attr({'src':'source/img/puzzle-img/'+img+'.jpg'})


		//console.log('я тут '+img)
		createPuzzle(img)

	}
	

	if(!once){
		$('ul.complexity').animate({'margin-top': '+=300px' }, 1000, 'easeOutElastic', function () {
			$('ul.complexity').removeClass('none')
			$('section h2').removeClass('none')
			$(this).animate({'margin-top': '-=300px' }, 2000, 'easeOutElastic')
			 once = true;
		})	
	}

})

// Этот костыль запускает работу скрипта после формирования пазла

$('div.game-button').on('click', function(){
	$('section.game-for-one').addClass('none')
	$('section.game').removeClass('none')
	$('body').find('canvas#canvas').css('z-index', '10')
})



$('img.menu').on('click', function () {
	 location.reload();
	//$('article.intro').removeClass('none');
	//$('section.game-for-one').addClass('none');
})


swipe1 = new Swiper($('div.slide-wraper'));
 
 swipe1.hammertime.on('swipeleft swiperight', function(ev) {
 	console.log(ev)
  ev.preventDefault();
  swipe1.direction = ev.type;
  if(swipe1.direction == 'swiperight') {
	swipe1.swipeLeft(ev)
  }else{
  	swipe1.swipeRight(ev);
  }  


 });

 $('div.arrow-left').on('click', function(){
  	swipe1.swipeLeft()
  })
$('div.arrow-right').on('click', function(){
  	swipe1.swipeRight();
  })