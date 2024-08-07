$(document).ready(function(){
    $(".info p").animate({
        opacity:'0%'
      }),
    $(".info p").animate({
    left:'81%',
    transitionDelay:'0.5ms',
    transitionDuration:'2s',
    opacity:'100%',
    transitionTimingFunction:'ease',
   }),
  
  
   //Animate technology html
   $(".container-tech, .tech-html img").animate({
    opacity:'0%',
   
   }),
   $(".container-tech, .tech-html img").animate({
    transitionDuration:'1.5s',
    opacity:'100%'
   }),

  
   //Animate technology css 
   $(".container-tech, .tech-css img").animate({
    opacity:'0%'
   }),

   $(".container-tech, .tech-css img").animate({
    transitionDelay:'0.2s',
    transitionDuration:'2s',
    opacity:'100%'
  }),

  
   //Animate technology js 
   $(".container-tech, .tech-js img").animate({
    opacity:'0%'
   }),

   $(".container-tech, .tech-js img").animate({
    transitionDelay:'0.5s',
    transitionDuration:'2s',
    opacity:'100%'
  }),


  //Animate technology jquerry
  $(".container-tech, .tech-jqerry img").animate({
    opacity:'0%'
   }),

   $(".container-tech, .tech-jqerry img").animate({
    transitionDelay:'1s',
    transitionDuration:'2s',
    opacity:'100%'
  }),
  
  //Animation hover technology
  $(".container-tech, .tech-html, .tech-css, .tech-js ,img").animate({
    transitionDelay:'0.5ms',
    transitionDuration:'1.5s',
    transitionTimingFunction:'ease-in-out'
   }),

   //Animate menu
   $(".menu_icons").click(function(){
        $(".menu").slideToggle("slow");
   });
  });

