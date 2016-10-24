PuzzleEvent = function(length,aria, Dataimg) {
 
this.aria = aria;

this.Dataimg = Dataimg;
this.length = length;
var marginX ;
var  marginY;

this.marginX = marginX;
this.marginY = marginY;


this.couplMax_x ;
   this.couplMin_x ;
             
   this.couplMax_y ;
  this.couplMin_y ;

var piece = this.aria.find($('.group >.piece'));
var pieceImg = this.aria.find($('.piece > img'));

this.piece = piece;
this.pieceImg = pieceImg
this.pieceImgLen = this.pieceImg.length



self = this;

  eventHand(this);

  function eventHand(self){
    self.aria.on("touchend", self.piece, function() {
         event.preventDefault();
         event.stopPropagation();
         // console.log(self.piece)
         self.closestToOffset(self.piece);
      });
  }
}



  PuzzleEvent.prototype.eventPuzzle = function(){
 this.pieceImg = self.pieceImg

 
  $.each(self.pieceImg, function(key,val){
   
    if(self.Dataimg == 2 || self.Dataimg == 7){
      switch(self.pieceImgLen) {
        case 12:  
         //--12
         
         this.marginX = 224;
          this.marginY = 223;
          
          if(key == 0 || key == 6 ){
            $(this).addClass('v-l')
          }else if(key == 1 ){
            $(this).addClass('g-up')
          }else if(key == 2 || key == 8 ){
            $(this).addClass('v-r')
          }else if( key == 11 || key == 9){
            $(this).addClass('g-down')
          }
        break;

        case 48:

          //--48
          this.marginX = 112;
          this.marginY = 112;
        if(key == 0 || key == 32 || key == 12 || key == 36 || key == 24){
            $(this).addClass('v-l')
          }else if( key == 31 || key == 47 || key == 11 || key == 35 || key == 23){
            $(this).addClass('v-r')
          }else if( key == 5 || key == 1 || key == 7 || key == 3 || key == 43  ) {
            $(this).addClass('g-up')
          }else if(  key == 46  || key == 44 || key == 42 ){
            $(this).addClass('g-down')
          }
        break;

        case 108:

        //--108
        this.marginX = 74;
        this.marginY = 73;

          if( key == 72 || key == 0 || key == 36 || key == 54 || key == 90 || key == 18){
            $(this).addClass('v-l')
          }else if(  key == 44 || key == 26 || key == 62 || key == 98 || key == 80 | key == 8){
            $(this).addClass('v-r')
          }else if(key == 102 || key == 100 || key == 3 || key == 5 || key == 104 || key == 1 || key == 7) {
            $(this).addClass('g-up')
          }else if(  key == 99  || key == 107 || key == 105 || key == 101 || key == 103 ){
            $(this).addClass('g-down')
          }
        break;
      }
    }else{

      switch(self.pieceImgLen) {
        case 12:  
         //--12
          this.marginX = 224;
          this.marginY = 223;
            // console.log(this.marginX, this.marginY, self.Dataimg, self.pieceImgLen)
          if(key == 0 || key == 8){
            $(this).addClass('v-l')
          }else if(key == 1 || key == 3){
            $(this).addClass('g-up')
          }else if(key == 7){
            $(this).addClass('v-r')
          }else if(key == 9 || key == 11){
            $(this).addClass('g-down')
          }
        break;

        case 48:

          //--48
          this.marginX = 112;
          this.marginY = 112;
        if(key == 0 || key == 16 || key == 32){
            $(this).addClass('v-l')
          }else if(key == 15 || key == 31 || key == 47){
            $(this).addClass('v-r')
          }else if( key == 5 || key == 1 || key == 7 || key == 3 || key == 43 ) {
            $(this).addClass('g-up')
          }else if( key == 40 || key == 46  || key == 44 || key == 42 ){
            $(this).addClass('g-down')
          }
        break;

        case 108:

        //--108
        this.marginX = 74;
        this.marginY = 73;

          if(key == 96 || key == 72 || key == 48 || key == 24 || key == 0){
            $(this).addClass('v-l')
          }else if( key == 95 || key == 47 || key == 71 || key == 23 ){
            $(this).addClass('v-r')
          }else if(key == 102 || key == 100 || key == 3 || key == 5 || key == 104 || key == 1 || key == 11 || key == 9 || key == 7) {
            $(this).addClass('g-up')
          }else if(  key == 99  || key == 107 || key == 105 || key == 101 || key == 103 || key == 97){
            $(this).addClass('g-down')
          }
        break;

      
      } 
    }
    self.marginX = this.marginX;
    self.marginY = this.marginY;
  })
 // console.log(self.marginX, self.marginY, self.Dataimg, self.pieceImgLen)
  this.couplMax_x = self.marginX*1.3;
   this.couplMin_x = self.marginX*0.65;
             
   this.couplMax_y = self.marginY*0.2;
  this.couplMin_y = -(self.marginY*0.09);


  self.couplMax_x = this.couplMax_x;
  self.couplMin_x = this.couplMin_x;

  self.couplMax_y = this.couplMax_y;
  self.couplMin_y = this.couplMin_y;

     self.piece.css({'width':self.marginX+1, 'height':self.marginY+2})
   // -------------------- Функция отвичает за движение пазла------------------------- // 

     // var elements = $(' .group');
     //       elements.each(function(e) {
     //           var element = $(this)
     //           element.bind('touchmove', function(event) {
     //               event.preventDefault();
     //                   var touch = event.targetTouches[0];
     //                   element[0].style.left = touch.pageX  - this.scrollWidth /2  + 'px';
     //                   element[0].style.top = touch.pageY -  this.scrollHeight /2 + 'px';  
     //           });
     //      });    

   this.aria.find($('.group')).each(function(key, val){
        new webkit_draggable(val, {revert : false, scroll : false});
    });

  // -------------------- 
  // console.log('x ' + langGroupLeft, 'y '+langGroupTop)
$('.group').on("touchmove", function() {
    event.preventDefault();
    event.stopPropagation();
    // console.log($(this).position().top, "top");
    var procent_width = $(this).children("div").width() / 25 * 100 ;
     if ($(this).parent("div").attr("class") == "puzzle-area-right" || $(this).parent("div").attr("class") == "puzzle-duel-right") {
        if ($(this).position().top  <= 0) {
            $(this).css({
                "top":0
            });
        }
        if ($(this).position().left  >= 1920 - parseInt($(this).attr('data-with')) ) {
            $(this).css({
                "left": 1920 - parseInt($(this).attr('data-with'))
            });
        }
        if( $(this).position().top >= 950) {
            $(this).css({
                "top": 950
            });
        }
        if( $(this).position().left <= 965 ) {
            $(this).css({
                "left": 963 
            });
        } 
    }
    if($(this).parent("div").attr("class") == "puzzle-area-left" || $(this).parent("div").attr("class") == "puzzle-duel-left"){  //-------
        if ($(this).position().top  <= 0) {
            $(this).css({
                "top": 0
            });
        }
        if ($(this).position().left  <= 0) {
            $(this).css({
               "left": 0
            });
        }
        if ($(this).position().left  >= 930 - parseInt($(this).attr('data-with')) ) {
            $(this).css({
                "left": 930 - parseInt($(this).attr('data-with'))
            });
        }
        if( $(this).position().top >= 950 ) {
            $(this).css({
                 "top": 950
            });
        }  
        
    }
    if ($(this).parent("div").attr("class") == "puzzle-area") {
        if ($(this).position().top  <= 0) {
            $(this).css({
                "top": 0 
            });
        }
        if ($(this).position().left  <= 0) {
            $(this).css({
               "left": 0    
            });
        }
        if ($(this).position().left  >= 1920  -  $(this).children("div").width() ) {
            $(this).css({
                "left": 1920  -  $(this).children("div").width()
            });
        }
        if( $(this).position().top >= 1080  - $(this).children("div").width()) {
            $(this).css({
                "top": 1080 - $(this).children("div").width()
            });
        }  
    }
    
});

}
PuzzleEvent.prototype.closestToOffset = function(offset) {
    self = this;

    var isNear = false,
        coordX = [];
        coordY = [];

        
    offset.each(function() {
        var elOffset = $(this).offset();
        coordX.push(elOffset.left)
        coordY.push(elOffset.top)
    });
    var nearest = '';
 console.time('test');
   $.each(self.piece, function(key, val){
     
      $.each(coordX, function(k, v) {
        if(k != key){
           var diff, diff2;
            diff = $(val).offset().left-v;



            if(Math.abs(diff) > self.couplMin_x && Math.abs(diff) < self.couplMax_x) nearest = [k, 'x', diff];
            if(Math.abs(diff) > self.couplMin_y && Math.abs(diff) < self.couplMax_y) nearest = [k, 'y', diff];
          var isNear;
          if (nearest.length == 3) {

            var s = coordY[nearest[0]];
            diff2 = $(val).offset().top-s;

            if(nearest[1] == 'x'){
             if(Math.abs(diff2) > self.couplMin_y && Math.abs(diff2) < self.couplMax_y) isNear = true
            }else{
              if(Math.abs(diff2) > self.couplMin_x && Math.abs(diff2) < self.couplMax_x) isNear = true
            }
            
          }
          if(!$(val).siblings('.piece') && (diff < 0 || diff2 < 0)) {
            if(isNear) self.isConnect(val, offset[nearest[0]], nearest[1], nearest[2]);
          }else if(diff > 0 || diff2 > 0){
            if(isNear) self.isConnect(val, offset[nearest[0]], nearest[1], nearest[2]);
          }else{
            if(isNear) self.isConnect(offset[nearest[0]], val, nearest[1], nearest[2]);
          }          
          nearest = '';
        }
       
      })
   })
   console.timeEnd('test');
}

PuzzleEvent.prototype.isConnect = function(elem1, elem2, diff, diffX){
  if(diffX < 0){
  }else{
    return;
  }
        var bigPZD = false;
    if(($(elem1).attr('data-column') - $(elem2).attr('data-column') == 1 
          && $(elem1).attr('data-row') - $(elem2).attr('data-row') == 0 && diff == 'x')
       || ($(elem1).attr('data-column') - $(elem2).attr('data-column') == 0
          && $(elem1).attr('data-row') - $(elem2).attr('data-row') == 1 && diff == 'y')) bigPZD = true;

 if(bigPZD) this.doConnect(elem2, elem1, diffX)
}


PuzzleEvent.prototype.doConnect = function(elem1, elem2, direction){
  var groupMargin = [parseInt($(elem1).css('margin-top')), parseInt($(elem1).css('margin-left'))]
  var group = $(elem1).parent('.group');
  var elem2Row = $(elem2).attr('data-row');
  var elem2Column = $(elem2).attr('data-column');
  var pieces = $(elem2).parent('.group').find('.piece');


  group.append(pieces);

  
  

  $(elem2).attr({'data-connect':'true'})
  $(elem1).attr({'data-connect':'true'})
  
  var arrayColumn = [], arrayRow = [];

  $.each(group.find('.piece'), function(key, val){
    var row = $(val).attr('data-row');
    var column = $(val).attr('data-column');

    if(arrayColumn.indexOf(column) == -1) {arrayColumn.push(column)}
    if(arrayRow.indexOf(row) == -1) { arrayRow.push(row)}
  })

  $.each(group.find('.piece'), function(key, val){ 
     var margin = [0, 0]


      // console.log(group.length)
      if(direction == 'x'){
        margin = [0, self.marginX]
      }else{
        margin = [self.marginY, 0]
      }
     

      
      
      $(val).css({'margin-top': ((parseInt($(val).attr('data-row'))-arrayRow.min()))*self.marginY+'px'});
      $(val).css({'margin-left': ((parseInt($(val).attr('data-column'))-arrayColumn.min()))*self.marginX+'px'});

      
     langGroupTop  = arrayRow.length*self.marginY+'px';
      langGroupLeft =  arrayColumn.length*self.marginX+'px';

    var pieceLen = group.find('.piece').length;
      group.attr('data-with', langGroupLeft)
      group.attr('data-haight',langGroupTop)
      group.attr('data-lan',pieceLen)

      // console.log(group.attr('data-lan'), self.length)

      if(group.attr('data-lan') == self.length ){
          $(group).addClass('done')
      }


    if($(group).hasClass('done')){
       $(group).parent().parent().addClass('none')
       // console.log('DONE -----------------------')
       $(group).parents('.player-duel').find('.congrat-duel').removeClass('none');
       if($('.div-left').hasClass('none') && $('.div-right').hasClass('none')){
  $('.img-return').removeClass('none')

}
       if($('.game-duel-right').hasClass('none')){
          $('.congrat-duel').removeClass('none')
          $('span.duel-winner').html('Справа')

        }else if($('.game-duel-left').hasClass('none')){
          $('.congrat-duel').removeClass('none')
          $('span.duel-winner').html('Слева')
        
        }
      }

  })
 
  // console.log(groupMargin, $(elem1).css('margin-top'))
  if (groupMargin[0] != parseInt($(elem1).css('margin-top'))){

    $(group).css({'top': parseInt($(group).css('top'))-parseInt($(elem1).css('margin-top'))+'px'})

  }

  if (groupMargin[1] != parseInt($(elem1).css('margin-left'))){
    $(group).css({'left': parseInt($(group).css('left'))-parseInt($(elem1).css('margin-left'))+'px'})
   
  }

  this.aria.find($('.piece[data-row="'+elem2Row+'"]')).filter('[data-column="'+elem2Column+'"]').filter('[data-connect="false"]').parent().remove()
  

}

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};




 


module.exports = PuzzleEvent;