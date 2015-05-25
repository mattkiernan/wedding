$(document).ready(function(){

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    var tab_set = $(this).closest('ul');
    var tab_set_li = tab_set.find('li');
    var all_content = tab_set.closest("div").children("div");

    $(tab_set_li).removeClass('current');
    $(all_content).removeClass('current');

    $("#"+tab_id).fadeIn(1000, function(){
      $("#"+tab_id).addClass('current');
      $(".liberty-section-header").fadeOut("fast");
      $(".liberty-tabs").fadeOut("fast");
    });
  });

  $(".x-circle").click(function(){
    var x_tab_id = $(this).attr('data-tab');
    $("#"+x_tab_id).fadeOut(1000, function(){
      $("#"+x_tab_id).removeClass('current');
      $(".liberty-section-header").fadeIn("fast");
      $(".liberty-tabs").fadeIn("fast");
    });
  });
});
