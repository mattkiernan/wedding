$(document).ready(function(){

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    tab_set = $(this).closest('ul');
    tab_set_li = tab_set.find('li')
    all_content = tab_set.closest("div").children("div");

  $(tab_set_li).removeClass('current');
  $(all_content).removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
  })

})
;
