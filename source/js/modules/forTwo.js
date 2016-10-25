$('article.intro > div.button-for-two').on('click', function () {
	$('article.intro').addClass('none');
	$('section.game-for-one').addClass('none');
	$('section.game-duel').addClass('none');
	$('section.game-for-two').removeClass('none');




sliderImgLeft = $('aside.slider-left div.slider-img-left').find('img.puzzle-img-left');
	$.each(sliderImgLeft, function( n , z ){
	 	$(z).attr({'src':'source/img/puzzle-img/'+n+'.jpg'});
	 	$(z).attr({'data-puzzle':n})
	 	z.onload = function(){
			if(z.height > z.width){
				$(z).css({height: '100%'});
			}else{
				$(z).css({width: '100%'});
			}
		}
	})	


sliderImgRight = $('aside.slider-right div.slider-img-right').find('img.puzzle-img-right');
	 $.each(sliderImgRight, function( key , val ){
	 	$(val).attr({'src':'source/img/puzzle-img/'+key+'.jpg'});
	 	$(val).attr({'data-puzzle':key})
	 	val.onload = function(){
			if(val.height > val.width){
				$(val).css({height: '100%'});
			}else{
				$(val).css({width: '100%'});
			}
		}
	 })
})


	$('ul.complexity-left li').on('touchstart', function(){
		$('ul.complexity-left').children('li').removeClass('active')
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}else{
			$(this).addClass('active')
			$('div.game-button-left').removeClass('none')
			$('h1.complexity-left').empty().append($(this).html() + ' <span>пузелов</span>')
		}
	})



	$(' ul.complexity-right li').on('touchstart', function(){
		$('ul.complexity-right').children('li').removeClass('active')
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}else{
			$(this).addClass('active')
			$('div.game-button-right').removeClass('none')
			$('h1.complexity-right').empty().append($(this).html() + ' <span>пузелов</span>')
		}
	})




$('div.game-button-right').on('click', function(){
	$('section.player-right-cont').addClass('none')
	$('div.line').css({'background':'rgba(58,50,47,1)'})
	 $('section.game-two-right').addClass('active')
	 $('section.game-two-right').removeClass('none')
	var numPieceRight = $('ul.complexity-right > li.active').html()
	createPuzzle2 = new CreatePuzzle(parseInt(numPieceRight),  $('.puzzle-area-right'),  parseInt($('aside.slider-right div.slider-img-right').find('.puzzle-img-right.active').attr('data-puzzle'))+1);
	createPuzzle2.creates()

	puzzleEvent2 = new PuzzleEvent(parseInt(numPieceRight), $('.puzzle-area-right'), parseInt($('aside.slider-right div.slider-img-right').find('.puzzle-img-right.active').attr('data-puzzle'))+1)
		puzzleEvent2.eventPuzzle()
			var start_time_interval
 function start_time2() { 
    $('#clock-right').text('00:00')
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
	      $('#clock-right').text(min + ':' + sec);

	    },100);
	}
start_time2()	
	
})

$('div.game-button-left').on('click', function(){
	$('section.player-left-cont').addClass('none')
	$('div.line').css({'background':'rgba(58,50,47,1)'})
$('section.game-two-left').addClass('active')
$('section.game-two-left').removeClass('none')
	var numPieceLeft = $('ul.complexity-left > li.active').html()
	createPuzzle1 = new CreatePuzzle(parseInt(numPieceLeft),  $('.puzzle-area-left'),parseInt( $('aside.slider-left div.slider-img-left ').find('.puzzle-img-left.active').attr('data-puzzle'))+1);
	createPuzzle1.creates()

	puzzleEvent1 = new PuzzleEvent(parseInt(numPieceLeft), $('.puzzle-area-left'), parseInt($('aside.slider-left div.slider-img-left').find('.puzzle-img-left.active').attr('data-puzzle'))+1)
		puzzleEvent1.eventPuzzle()


		var start_time_interval_left;
  function start_time1() { 
    $('#clock-left').text('00:00')
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
	      $('#clock-left').text(min + ':' + sec);

	    },100);
	}

	start_time1()

})


 once1 = false;

$('aside.slider-left div.slider-img-left').on('click' , function(){
	$('aside.slider-left  div.slider-img-left  img.choise-left' ).addClass('none')	
	if($('img.choise-left',this).hasClass('none')){	
		$('img.choise-left',this).removeClass('none')
	}else{
		$('img.choise-left',this).addClass('none')	
	}

	$('aside.slider-left  div.slider-img  img.puzzle-img').removeClass('active')
	if($('img.puzzle-img-left',this).hasClass('active')){
	 	$('img.puzzle-img-left',this).removeClass('active')
	}else{

		$('img.puzzle-img-left',this).addClass('active')

		var imgLeft = $('aside.slider-left').find('img.active').attr('data-puzzle')
		$('div.img-icon-left > img').attr({'src':'source/img/puzzle-img/'+imgLeft+'.jpg'})

	}

	if(!once1){
		$('ul.complexity-left').animate({'margin-top': '+=300px' }, 1000, 'easeOutElastic', function () {
			$('ul.complexity-left').removeClass('none')
			$('section.player-left-cont h2').removeClass('none')
			$(this).animate({'margin-top': '-=300px' }, 2000, 'easeOutElastic')
			 once1 = true;
		})	
	}
})
 	once2 = false;

	$('aside.slider-right div.slider-img-right').on('click' , function(){
	$('aside.slider-right  div.slider-img-right  img.choise-right' ).addClass('none')	
	if($('img.choise-right',this).hasClass('none')){	
		$('img.choise-right',this).removeClass('none')
	}else{
		$('img.choise-right',this).addClass('none')	
	}

	$('aside.slider-right  div.slider-img  img.puzzle-img').removeClass('active')
	if($('img.puzzle-img-right',this).hasClass('active')){
	 	$('img.puzzle-img-right',this).removeClass('active')
	}else{

		$('img.puzzle-img-right',this).addClass('active')

		var imgRight = $('aside.slider-right').find('img.active').attr('data-puzzle')
		$('div.img-icon-right > img').attr({'src':'source/img/puzzle-img/'+imgRight+'.jpg'})

	}



	if(!once2){
		$('ul.complexity-right').animate({'margin-top': '+=300px' }, 1000, 'easeOutElastic', function () {
			$('ul.complexity-right').removeClass('none')
			$('section.player-right-cont h2').removeClass('none')
			$(this).animate({'margin-top': '-=300px' }, 2000, 'easeOutElastic')
			 once2 = true;
		})	
	}
})
swipe2 = new Swiper($('.slide-wraper-left'));
 
 swipe2.hammertime.on('swipeleft swiperight', function(ev) {
 	console.log(ev)
  ev.preventDefault();
  swipe2.direction = ev.type;
  if(swipe2.direction == 'swiperight') {
	swipe2.swipeLeft(ev, '-50px')
  }else{
  	swipe2.swipeRight(ev);
  }  


 });

 $('div#puzzle > section.game-for-two > div.player-right section.player-right-cont > aside.slider-right > div.arrow-left').on('click', function(){
  	swipe3.swipeLeft()
  })
$('div#puzzle > section.game-for-two > div.player-right section.player-right-cont > aside.slider-right > div.arrow-right').on('click', function(){
  	swipe3.swipeRight();
  })


swipe3 = new Swiper($('.slide-wraper-right')); 
 
swipe3.hammertime.on('swipeleft swiperight', function(ev) {
     setTimeout(function() {
 	console.log(ev)
  ev.preventDefault();
  swipe3.direction = ev.type;
  if(swipe3.direction == 'swiperight') {
	swipe3.swipeLeft(ev, '-50px')
  }else{
  	swipe3.swipeRight(ev);
  }  

 }, 200)
 });
      
 $('div#puzzle > section.game-for-two > div.player-left section.player-left-cont > aside.slider-left > div.arrow-left').on('click', function(){
  	swipe2.swipeLeft()
  })
$('div#puzzle > section.game-for-two  > div.player-left section.player-left-cont > aside.slider-left > div.arrow-right').on('click', function(){
  	swipe2.swipeRight();
  })

$('.shufl-left').on('click', function(){

	createPuzzle1.randomise($('.puzzle-area-left'))
	
})
$('.shufl-right').on('click', function(){

	createPuzzle2.randomise($('.puzzle-area-right'))
	
})



$('.previev-left').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active')
		$('div.puzzle-area-left > div.perv-left').css({'background-image':'none'})
	}else{
		$(this).addClass('active')
		var img = $('aside.slider-left').find('img.active').attr('data-puzzle')
	$('div.puzzle-area-left > div.perv-left').css({'background-image':'url(source/img/puzzle-img/'+img+'.jpg)'})
	}
	
})



$('.all-left').on('click', function(){
	 $(this).addClass('active')
	$( 'div.puzzle-area-left > .group').removeClass('index')
	$('.show-piece-left').removeClass('active')
})


$('.center-left').on('click', function(){
	$( 'div.puzzle-area-left > .group').removeClass('index')
	$.each($('div.puzzle-area-left >.group > .piece'), function( key , val ){

		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().addClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().addClass('index')
		}else if($('div.puzzle-area-left > .group').length / $(val).attr('data-column') == $('div.puzzle-area-left > .group > .piece:last-child').last().attr('data-row')){
			$(this).parent().addClass('index')
		}else if($('div.puzzle-area-left > .group').length / $(val).attr('data-row') == $('div.puzzle-area-left > .group > .piece:last-child').last().attr('data-column')){
			$(this).parent().addClass('index')
		}

 })
$('.show-piece-left').removeClass('active')
})
	

$('.edge-left').on('click', function(){
	$(this).addClass('active')
	$( 'div.puzzle-area-left > .group').removeClass('index')
	$.each($('div.puzzle-area-left > .group > .piece'), function( key , val ){
		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().removeClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-area-left > .group').length / $(val).attr('data-column') == $('div.puzzle-area-left >.group > .piece:last-child').last().attr('data-row')){
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-area-left > .group').length / $(val).attr('data-row') == $('div.puzzle-area-left >.group > .piece:last-child').last().attr('data-column')){
			$(this).parent().removeClass('index')
		}else{
			$(this).parent().addClass('index')
		}

	 })
$('.show-piece-left').removeClass('active')
})
 $('.show-piece-left').on('click', function(){
 	if($(this).hasClass('active')){
 	$(this).removeClass('active')
 	}else{
 		$(this).addClass('active')
 	}
 })

$('.previev-right').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active')
		$('div.puzzle-area-right > div.perv-right').css({'background-image':'none'})
	}else{
		$(this).addClass('active')
		var img = $('aside.slider-right').find('img.active').attr('data-puzzle')
	$('div.puzzle-area-right > div.perv-right').css({'background-image':'url(source/img/puzzle-img/'+img+'.jpg)'})
	}
})



$('.all-right').on('click', function(){
	 $(this).addClass('active')
	$( 'div.puzzle-area-right > .group').removeClass('index')
	$('.show-piece-right').removeClass('active')
})


$('.center-right').on('click', function(){
	$('div.puzzle-area-right > .group').removeClass('index')
	$.each($('div.puzzle-area-right >.group > .piece'), function( key , val ){

		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().addClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().addClass('index')
		}else if($('div.puzzle-area-right > .group').length / $(val).attr('data-column') == $('div.puzzle-area-right > .group > .piece:last-child').last().attr('data-row')){
			$(this).parent().addClass('index')
		}else if($('div.puzzle-area-right > .group').length / $(val).attr('data-row') == $('div.puzzle-area-right > .group > .piece:last-child').last().attr('data-column')){
			$(this).parent().addClass('index')
		}

 })
$('.show-piece-right').removeClass('active')
})
	

$('.edge-right').on('click', function(){
	$(this).addClass('active')
	$('div.puzzle-area-right >.group').removeClass('index')
	$.each($(' div.puzzle-area-right > .group > .piece'), function( key , val ){
		if($(val).attr('data-row') == 1){ //первую строчку
			$(this).parent().removeClass('index')
		}else if($(val).attr('data-column') == 1){ //первый столбик
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-area-right > .group').length / $(val).attr('data-column') == $('div.puzzle-area-right > .group > .piece:last-child').last().attr('data-row')){
			$(this).parent().removeClass('index')
		}else if($('div.puzzle-area-right > .group').length / $(val).attr('data-row') == $('div.puzzle-area-right > .group > .piece:last-child').last().attr('data-column')){
			$(this).parent().removeClass('index')
		}else{
			$(this).parent().addClass('index')
		}

	 })
$('.show-piece-right').removeClass('active')
})
 $('.show-piece-right').on('click', function(){
 	if($(this).hasClass('active')){
 	$(this).removeClass('active')
 	}else{
 		$(this).addClass('active')
 	}
 })

 $('.game-two-right').bind('touchstart', function(){
if($('.div-left').hasClass('none') && $('.div-right').hasClass('none')){
	$('.img-return').removeClass('none')

}


 })

$('.congrat-left, .congrat-right').find('.img-return').on('click', function () {
	 location.reload();
	
})
