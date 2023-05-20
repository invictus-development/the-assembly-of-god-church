'use strict'

$(document).ready(function () {
    //save boolean
    var pause = false;
    //save items that with number
    var item=  $('.select-item');
    //save blocks
    var block=  $('.image-1-icon');
    //variable for counter
    var k =0;
    
    
     //interval function works only when pause is false
      setInterval(function () {
          if (!pause) {
              var $this = item.eq(k);
            
            if (item.hasClass('selected'))  {
              item.removeClass('selected');
            };
             block.removeClass('selected').eq(k).addClass('selected');
              $this.addClass('selected');
            //increase k every 1.5 sec
              k++;
            //if k more then number of blocks on page
              if (k >= block.length ) {
                //rewrite variable to start over
                  k = 0;
              }
          }
        //every 1.5 sec
      }, 3000);
  
  
    item.hover(function () {
      //remove selected class from all except this
          $(this).siblings().removeClass("selected");
         $(this).addClass('selected');
        //remove selected class from all
        block.removeClass('selected');
      //add selected class to block item which is accounted as index cliked item
        block.eq($(this).index()).addClass('selected');
      //on hover stop interval function
          pause = true;
      }, function () {
      
      //when hover event ends, start interval function
          pause = false;
      });
  
  });