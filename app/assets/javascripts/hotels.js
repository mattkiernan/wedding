$(document).ready(function(){
  $(".hoverable").hover(function(){
    var hovered_element = $(this).attr("id");
    $("."+hovered_element+"-content").toggle();
  });

  $(".hoverable").click(function(){
    var hovered_element = $(this).attr("id");
    $("."+hovered_element+"-content").toggle();
  });
});
