Timer = function(selector){
  this.start_time_interval;
  this.selector=selector;

  self=this;
}



Timer.prototype.start_time = function() { 
    self.selector.html()
    var this_date = new Date();
     clearInterval(self.start_time_interval);
      self.start_time_interval = setInterval(function(){
      var new_date = new Date() - this_date;
      var sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
      var min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
      var hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
      if (sec.toString().length   == 1) sec   = '0' + sec;
      if (min.toString().length   == 1) min   = '0' + min;
      if (hours.toString().length == 1) hours = '0' + hours;
      self.selector.html(min + ':' + sec);
      // console.log(hours + ':' + min + ':' + sec);
    },100);
  };

// $( "div" ).click(function() {

//  var this_class = $(this).attr("class");
//     if(this_class == "start"){
//       start_time();
//     }else{
//       clearInterval(start_time_interval);
//     } 

//   });


 module.exports = Timer;
