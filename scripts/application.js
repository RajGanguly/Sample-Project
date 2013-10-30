$("#read_more").click(function(){
    // $(this).toggleClass("active");
    $(this).next("div").stop('true','true').slideToggle("slow");   
    $("#read_more_wrapper").toggleClass("hide");
    $("#read_more_wrapper").hasClass("hide") ? $("#read_more").text("Read more about me +") : $("#read_more").text("Read more about me -");
});
  
