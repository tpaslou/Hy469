$(document).ready(function() {
  $(".btn").click(function(e) {
    var id = e.target.id;
    console.log(id);
  });
});

function openSection(ChatName,elmnt) {
  var i, tabcontent, tablinks;
  var color= "#383838";
  tablinks = document.getElementsByClassName("FT FooterbuttonHeader");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "transparent";
  }
  //document.getElementById(ChatName).style.display = "block";
  elmnt.style.backgroundColor = color;

}