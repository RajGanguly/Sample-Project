$("#read_more").click(function(){
    $(this).toggleClass("active");
    $(this).next("div").stop('true','true').slideToggle("slow");
});
  
