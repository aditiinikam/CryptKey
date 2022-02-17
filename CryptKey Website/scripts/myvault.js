$("#eye").click(function(){
  $("#eye").addClass("setInvisible");
  $("#trash").removeClass("setInvisible");
  $("#pass").attr('type','text');
});

$("#trash").click(function(){
  $("#trash").addClass("setInvisible");
  $("#eye").removeClass("setInvisible");
  $("#pass").attr('type','password');
});
