
$('article.intro > div.button-for-one').on('click', function () {
	$('article.intro').addClass('none');
	$('section.game-for-one').removeClass('none');
		$('section.game-duel').addClass('none');
	$('section.game-for-two').addClass('none');
	
	sliderImg = $('aside.slider div.slider-img').find('img.puzzle-img');
	 $.each(sliderImg, function( k , v ){
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

})


	$('section.game-for-one ul.complexity li').on('touchstart', function(){
		$('ul.complexity').children('li').removeClass('active')
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}else{
			$(this).addClass('active')
			$('div.game-button').removeClass('none')
			$('h1.complexity').empty().append($(this).html() + ' <span>пузелов</span>')
		}

	})


	 once = false;
$('aside.slider div.slider-img').on('click' , function(){
	// if($('aside.slider  div.slider-img  img.puzzle-img').hasClass('active')){return}
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
	$('section.game-one').removeClass('none')
	$('section.game-one').addClass('active')
	numPiece = $('ul.complexity > li.active').html()
	createPuzzle = new CreatePuzzle(parseInt(numPiece),  $('.puzzle-area'),  parseInt($('aside.slider div.slider-img').find('.puzzle-img.active').attr('data-puzzle'))+1);
	createPuzzle.creates()
	

	puzzleEvent = new PuzzleEvent(parseInt(numPiece),$('.puzzle-area'), parseInt($('aside.slider div.slider-img').find('.puzzle-img.active').attr('data-puzzle'))+1)
		puzzleEvent.eventPuzzle()
  
	


var start_time_interval;
  function start_time() { 
    $('#clock').text('00:00')
	    var this_date = new Date();
	     clearInterval(start_time_interval);
	      start_time_interval = setInterval(function(){
	      var new_date = new Date() - this_date;
	      var sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
	      var min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
	      var hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
	      if (sec.toString().length   == 1) sec   = '0' + sec;
	      if (min.toString().length   == 1) min   = '0' + min;
	      if (hours.toString().length == 1) hours = '0' + hours;
	      $('#clock').text(min + ':' + sec);

	    },100);
	}

	start_time()
  });



$('.congrat-duel').find('.img-return').on('click', function () {
	 location.reload();
})


swipe1 = new Swiper($('div.slide-wraper'));
 
 swipe1.hammertime.on('swipeleft swiperight', function(ev) {
  ev.preventDefault();
  swipe1.direction = ev.type;
  if(swipe1.direction == 'swiperight') {
	swipe1.swipeLeft(ev, '-250px')
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

$('.previev').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active')
		$('div.puzzle-area > div.perv').css({'background-image':'none'})
	}else{
		$(this).addClass('active')
		var img = $('aside.slider').find('img.active').attr('data-puzzle')
	$('div.puzzle-area > div.perv').css({'background-image':'url(source/img/puzzle-img/'+img+'.jpg)'})
	}
	
})

$('.shufl').on('click', function(){

	createPuzzle.randomise($('.puzzle-area'))
	
})


$('.all').on('click', function(){
	 $(this).addClass('active')
	$( '.group').removeClass('index')
	$('.show-piece').removeClass('active')
})


$('.center').on('click', function(){
	$( '.group').removeClass('index')
	$.each($('.group > .piece'), function( key , val ){

		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().addClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().addClass('index')
		}else if($('.group').length / $(val).attr('data-column') == $('.group > .piece:last-child').last().attr('data-row')){
			$(this).parent().addClass('index')
		}else if($('.group').length / $(val).attr('data-row') == $('.group > .piece:last-child').last().attr('data-column')){
			$(this).parent().addClass('index')
		}

 })
$('.show-piece').removeClass('active')
})
	

$('.edge').on('click', function(){
	$(this).addClass('active')
	$( '.group').removeClass('index')
	$.each($('.group > .piece'), function( key , val ){
		console.log($('.group').length)
		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().removeClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().removeClass('index')
		}else if($('.group').length / $(val).attr('data-column') == $('.group > .piece:last-child').last().attr('data-row')){
			$(this).parent().removeClass('index')
		}else if($('.group').length / $(val).attr('data-row') == $('.group > .piece:last-child').last().attr('data-column')){
			$(this).parent().removeClass('index')
		}else{
			$(this).parent().addClass('index')
		}

	 })
$('.show-piece').removeClass('active')
})
 $('.show-piece').on('click', function(){
 	if($(this).hasClass('active')){
 	$(this).removeClass('active')
 	}else{
 		$(this).addClass('active')
 	}
 })

