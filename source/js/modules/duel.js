$('article.intro > div.button-duel').on('click', function () {
	$('article.intro').addClass('none');
	$('section.game-duel').removeClass('none');
	$('section.game-for-one').addClass('none');
	$('section.game-for-two').addClass('none');
	
	sliderImg = $('aside.slider-duel div.slider-img').find('img.puzzle-img');
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


	$('section.game-duel ul.complexity li').on('touchstart', function(){
		$('ul.complexity').children('li').removeClass('active')
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}else{
			$(this).addClass('active')
			$('div.game-button-duel').removeClass('none')
			$('h1.complexity').empty().append($(this).html() + ' <span>пузелов</span>')
		}

	})


	 once = false;
$('section.game-duel aside.slider-duel div.slider-img').on('click' , function(){
	$('section.game-duel aside.slider-duel  div.slider-img  img.choise' ).addClass('none')	
	if($('img.choise',this).hasClass('none')){	
		$('img.choise',this).removeClass('none')
	}else{
		$('img.choise',this).addClass('none')	

	}

	$(' section.game-duel aside.slider-duel  div.slider-img  img.puzzle-img').removeClass('active')
	if($('img.puzzle-img',this).hasClass('active')){
	 	$('img.puzzle-img',this).removeClass('active')

	}else{

		$('img.puzzle-img',this).addClass('active')

		var img = $('aside.slider-duel').find('img.active').attr('data-puzzle')
		$('div.img-icon-duel-left > img, div.img-icon-duel-right > img').attr({'src':'source/img/puzzle-img/'+img+'.jpg'})
		
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



$('div.game-button-duel').on('click', function(){
	$('div.line-duel').css({'background':'rgba(58,50,47,1)'})
	 $('section.duel-cont').addClass('none')	
	  $('div.player-duel').removeClass('none')

	var numPieceRight = $('ul.complexity> li.active').html()
	createPuzzle4 = new CreatePuzzle(parseInt(numPieceRight), $('.puzzle-duel-right'),  parseInt($('aside.slider-duel div.slider-img').find('.puzzle-img.active').attr('data-puzzle'))+1);
	createPuzzle4.creates()

	puzzleEvent4 = new PuzzleEvent(parseInt(numPieceRight), $('.puzzle-duel-right'), parseInt($('aside.slider-duel div.slider-img').find('.puzzle-img.active').attr('data-puzzle'))+1)
		puzzleEvent4.eventPuzzle()
		

	createPuzzle5 = new CreatePuzzle(parseInt(numPieceRight), $('.puzzle-duel-left'),  parseInt($('aside.slider-duel div.slider-img').find('.puzzle-img.active').attr('data-puzzle'))+1);
	createPuzzle5.creates()

	puzzleEvent5 = new PuzzleEvent(parseInt(numPieceRight), $('.puzzle-duel-left'), parseInt($('aside.slider-duel div.slider-img').find('.puzzle-img.active').attr('data-puzzle'))+1)
		puzzleEvent5.eventPuzzle()

	var start_time_interval_left;
  function start_time1() { 
    $('#clock-duel-left').text('00:00')
	    var this_date = new Date();
	     clearInterval(start_time_interval_left);
	      start_time_interval_left = setInterval(function(){
	      var new_date = new Date() - this_date;
	      var sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
	      var min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
	      var hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
	      if (sec.toString().length   == 1) sec   = '0' + sec;
	      if (min.toString().length   == 1) min   = '0' + min;
	      if (hours.toString().length == 1) hours = '0' + hours;
	      $('#clock-duel-left').text(min + ':' + sec);

	    },100);
	}

	start_time1()

	var start_time_interval
 function start_time2() { 
    $('#clock-duel-right').text('00:00')
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
	      $('#clock-duel-right').text(min + ':' + sec);

	    },100);
	}
start_time2()
})

$('.previev-duel-left').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active')
		$('div.puzzle-duel-left > div.perv-duel-left').css({'background-image':'none'})
	}else{
		$(this).addClass('active')
		var img = $('aside.slider-duel').find('img.active').attr('data-puzzle')
	$('div.puzzle-duel-left > div.perv-duel-left').css({'background-image':'url(source/img/puzzle-img/'+img+'.jpg)'})
	}
	
})



$('.all-duel-left').on('click', function(){
	 $(this).addClass('active')
	$( 'div.puzzle-duel-left > .group').removeClass('index')
	$('.show-piece-duel-left').removeClass('active')
})


$('.center-duel-left').on('click', function(){
	$( 'div.puzzle-duel-left > .group').removeClass('index')
	$.each($('div.puzzle-duel-left >.group > .piece'), function( key , val ){

		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().addClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().addClass('index')
		}else if($('div.puzzle-duel-left > .group').length / $(val).attr('data-column') == $('div.puzzle-duel-left > .group > .piece:last-child').last().attr('data-row')){
			$(this).parent().addClass('index')
		}else if($('div.puzzle-duel-left > .group').length / $(val).attr('data-row') == $('div.puzzle-duel-left > .group > .piece:last-child').last().attr('data-column')){
			$(this).parent().addClass('index')
		}

 })
$('.show-piece-duel-left').removeClass('active')
})
	

$('.edge-duel-left').on('click', function(){
	$(this).addClass('active')
	$( 'div.puzzle-duel-left > .group').removeClass('index')
	$.each($('div.puzzle-duel-left > .group > .piece'), function( key , val ){
		console.log($('.group').length)
		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().removeClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-duel-left > .group').length / $(val).attr('data-column') == $('div.puzzle-duel-left >.group > .piece:last-child').last().attr('data-row')){
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-duel-left > .group').length / $(val).attr('data-row') == $('div.puzzle-duel-left >.group > .piece:last-child').last().attr('data-column')){
			$(this).parent().removeClass('index')
		}else{
			$(this).parent().addClass('index')
		}

	 })
$('.show-piece-duel-left').removeClass('active')
})
 $('.show-piece-duel-left').on('click', function(){
 	if($(this).hasClass('active')){
 	$(this).removeClass('active')
 	}else{
 		$(this).addClass('active')
 	}
 })

$('.previev-duel-right').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active')
		$('div.puzzle-duel-right > div.perv-duel-right').css({'background-image':'none'})
	}else{
		$(this).addClass('active')
		var img = $('aside.slider-duel').find('img.active').attr('data-puzzle')
	$('div.puzzle-duel-right > div.perv-duel-right').css({'background-image':'url(source/img/puzzle-img/'+img+'.jpg)'})
	}
})



$('.all-duel-right').on('click', function(){
	 $(this).addClass('active')
	$( 'div.puzzle-duel-right > .group').removeClass('index')
	$('.show-piece-duel-right').removeClass('active')
})


$('.center-duel-right').on('click', function(){
	$('div.puzzle-duel-right > .group').removeClass('index')
	$.each($('div.puzzle-duel-right >.group > .piece'), function( key , val ){

		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().addClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().addClass('index')
		}else if($('div.puzzle-duel-right > .group').length / $(val).attr('data-column') == $('div.puzzle-duel-right > .group > .piece:last-child').last().attr('data-row')){
			$(this).parent().addClass('index')
		}else if($('div.puzzle-duel-right > .group').length / $(val).attr('data-row') == $('div.puzzle-duel-right > .group > .piece:last-child').last().attr('data-column')){
			$(this).parent().addClass('index')
		}

 })
$('.show-piece-duel-right').removeClass('active')
})
	

$('.edge-duel-right').on('click', function(){
	$(this).addClass('active')
	$('div.puzzle-duel-right >.group').removeClass('index')
	$.each($(' div.puzzle-duel-right > .group > .piece'), function( key , val ){
		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().removeClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-duel-right > .group').length / $(val).attr('data-column') == $('div.puzzle-duel-right > .group > .piece:last-child').last().attr('data-row')){
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-duel-right > .group').length / $(val).attr('data-row') == $('div.puzzle-duel-right > .group > .piece:last-child').last().attr('data-column')){
			$(this).parent().removeClass('index')
		}else{
			$(this).parent().addClass('index')
		}

	 })
$('.show-piece-duel-right').removeClass('active')
})
 $('.show-piece-duel-right').on('click', function(){
 	if($(this).hasClass('active')){
 	$(this).removeClass('active')
 	}else{
 		$(this).addClass('active')
 	}
 })

$('.congrat-duel').find('.img-return').on('click', function () {
	 location.reload();
})

swipe5 = new Swiper($('.slider-duel div.slide-wraper'));
 
 swipe5.hammertime.on('swipeleft swiperight', function(ev) {
  ev.preventDefault();
  swipe5.direction = ev.type;
  if(swipe5.direction == 'swiperight') {
	swipe5.swipeLeft('-250px', ev)
  }else{
  	swipe5.swipeRight(ev);
  }  

 });

 $('.slider-duel div.arrow-left').on('click', function(){
  	swipe5.swipeLeft('-250px')
  })
$('.slider-duel div.arrow-right').on('click', function(){
  	swipe5.swipeRight();
  })