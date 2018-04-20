
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
       $('.secondimage').show();
    });

    $("#button2").click(function(){
        $('.secondimage').hide();
        $('.thirdimage').show();

     });

     $('#button3').click(function(){
     $('.thirdimage').hide();
       $('.fourthimage').show();
     });

     $('#button4').click(function(){
       $('.fourthimage').hide();
       $('.fithimage').show();
     });

     $('#button5').click(function(){
       $('.fithimage').hide();
       $('.siximage').show();
     });

     $('#button6').click(function(){
       $('.siximage').hide();
       $('.sevenimage').show();
     });

     $('#button7').click(function(){
       $('.sevenimage').hide();
       $('.eightimage').show();
     });

     $('#button8').click(function(){
       $('.eightimage').hide();
       $('.nineimage').show();
     });

     $('#button9').click(function(){
       $('.nineimage').hide();
       $('.tenimage').show();
     });

     $('#button10').click(function(){
       $('.tenimage').hide();
       $('.elevenimage').show();
     });

     $('#button11').click(function(){
       $('.elevenimage').hide();
       $('.twelveimage').show();
     });

     $('#button12').click(function(){
       $('.twelveimage').hide();
       $('.thirteenimage').show();
     });

     $('#button13').click(function(){
       $('.thirteenimage').hide();
       $('.firstimage').show();
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




});
