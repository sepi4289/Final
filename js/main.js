
$(document).ready(function() {
$('.secondimage').hide();
$('.thirdimage').hide();
$('.fourthimage').hide();
console.log("top");


   $("#button1").click(function(){
       $('.firstimage').hide();
       $('.secondimage').show();
    });

    $("#button2").click(function(){
      console.log("secondimage if");
        $('.secondimage').hide();
        $('.thirdimage').show();

     });

     $('#button3').click(function(){
       console.log("third");
       $('.thirdimage').hide();
       $('.firstimage').show();
     });
     $('.helplink').click(function(){
       console.log("help");
       $('.firstimage').hide();
       $('.secondimage').hide();
       $('.thirdimage').hide();
       $('.fourthimage').show();

     });

});
