$(document).ready(function(){
  $(".hotel").hover(function(){
    var hovered_element = $(this).attr("id");
    $("."+hovered_element+"-content").toggle();
  });

  $(".hotel").click(function(){
    var hovered_element = $(this).attr("id");
    $("."+hovered_element+"-content").toggle();
  });
});
