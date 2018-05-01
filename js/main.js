
$(document).ready(function() {
$('.secondimage').hide();
$('.thirdimage').hide();
$('.fourthimage').hide();
$('.fithimage').hide();
$('.siximage').hide();
$('.sevenimage').hide();
$('.eightimage').hide();
$('.nineimage').hide();
$('.tenimage').hide();
$('.elevenimage').hide();
$('.twelveimage').hide();
$('.thirteenimage').hide();
$('.helpimage').hide();
$('.aboutimage').hide();
console.log("top");


   $("#button1").click(function(){
       $('.firstimage').hide();
         $('.secondimage').scrollTop(0);
       $('.secondimage').show();
       $('.boxing').hide().fadeIn('slow');

     });

    $("#button2").click(function(){
        $('.secondimage').hide();
        $('.thirdimage').scrollTop(0);
        $('.thirdimage').show();
        $('.boxing').hide().fadeIn('slow');

     });

     $('#button3').click(function(){
     $('.thirdimage').hide();
      $('.fourthimage').scrollTop(0);
       $('.fourthimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button4').click(function(){
       $('.fourthimage').hide();
        $('.fithimage').scrollTop(0);
       $('.fithimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button5').click(function(){
       $('.fithimage').hide();
        $('.siximage').scrollTop(0);
       $('.siximage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button6').click(function(){
       $('.siximage').hide();
        $('.sevenimage').scrollTop(0);
       $('.sevenimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button7').click(function(){
       $('.sevenimage').hide();
        $('.eightimage').scrollTop(0);
       $('.eightimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button8').click(function(){
       $('.eightimage').hide();
        $('.nineimage').scrollTop(0);
       $('.nineimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button9').click(function(){
       $('.nineimage').hide();
        $('.tenimage').scrollTop(0);
       $('.tenimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button10').click(function(){
       $('.tenimage').hide();
        $('.elevenimage').scrollTop(0);
       $('.elevenimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button11').click(function(){
       $('.elevenimage').hide();
        $('.twelveimage').scrollTop(0);
       $('.twelveimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button12').click(function(){
       $('.twelveimage').hide();
        $('.thirteenimage').scrollTop(0);
       $('.thirteenimage').show();
       $('.boxing').hide().fadeIn('slow');
     });

     $('#button13').click(function(){
       $('.thirteenimage').hide();
        $('.firstimage').scrollTop(0);
       $('.firstimage').show();
       $('.boxing').hide().fadeIn('slow');
     });



     $('.helplink').click(function(){
       console.log("help");
       $('.firstimage').hide();
       $('.secondimage').hide();
       $('.thirdimage').hide();
       $('.fourthimage').hide();
       $('.fithimage').hide();
       $('.siximage').hide();
       $('.sevenimage').hide();
       $('.eightimage').hide();
       $('.nineimage').hide();
       $('.tenimage').hide();
       $('.elevenimage').hide();
       $('.twelveimage').hide();
       $('.thirteenimage').hide();
       $('.aboutimage').hide();
       $('.helpimage').show();
       $('.boxing').hide().fadeIn('slow');

     });


     $('.aboutlink').click(function(){
       console.log("about");
       $('.firstimage').hide();
       $('.secondimage').hide();
       $('.thirdimage').hide();
       $('.fourthimage').hide();
       $('.fithimage').hide();
       $('.siximage').hide();
       $('.sevenimage').hide();
       $('.eightimage').hide();
       $('.nineimage').hide();
       $('.tenimage').hide();
       $('.elevenimage').hide();
       $('.twelveimage').hide();
       $('.thirteenimage').hide();
       $('.helpimage').hide();
       $('.aboutimage').show();
       $('.boxing').hide().fadeIn('slow');

     });
     $('.homelink').click(function(){
       console.log("about");
       $('.firstimage').show();
       $('.secondimage').hide();
       $('.thirdimage').hide();
       $('.fourthimage').hide();
       $('.fithimage').hide();
       $('.siximage').hide();
       $('.sevenimage').hide();
       $('.eightimage').hide();
       $('.nineimage').hide();
       $('.tenimage').hide();
       $('.elevenimage').hide();
       $('.twelveimage').hide();
       $('.thirteenimage').hide();
       $('.helpimage').hide();
       $('.aboutimage').hide();

     });
     $('.sourcelink').click(function(){
       console.log("source");
       $('.firstimage').hide();
       $('.secondimage').hide();
       $('.thirdimage').hide();
       $('.fourthimage').hide();
       $('.fithimage').hide();
       $('.siximage').hide();
       $('.sevenimage').hide();
       $('.eightimage').hide();
       $('.nineimage').hide();
       $('.tenimage').hide();
       $('.elevenimage').hide();
       $('.twelveimage').hide();
       $('.thirteenimage').show();
       $('.helpimage').hide();
       $('.aboutimage').hide();
       $('.boxing').hide().fadeIn('slow');

     });

});
