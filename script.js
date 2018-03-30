$(document).ready(function(){

   $(document).ready(function(){
       $("#btn").hide();
       $("#h1").fadeIn(5000);
       $("#p1").fadeIn(7000);
       $("#btn").fadeIn(8000);
      
       });
  
 

   $(window).scroll(function(){
       if ($(this).scrollTop() > 0){
         $("#h2").fadeIn("slow");
         $("#pic1").fadeIn(2000);
         $("#pic2").fadeIn(3000);
         $("#pic3").fadeIn(4000);
         $("#h3").fadeIn(5000);
         $("#html").fadeIn(5000);
         $("#css").fadeIn(5000);
         $("#javascript").fadeIn(5000);
           
       }
       else {
           
            $("#h2").fadeOut("slow");
           $("#pic1").fadeOut("slow");
           $("#pic2").fadeOut("slow");
           $("#pic3").fadeOut("slow");
           $("#h3").fadeOut();
           $("#html").fadeOut();
           $("#css").fadeOut();
           $("#javascript").fadeOut();
             
       }
   });



});








