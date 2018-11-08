$(document).ready(function() {
  $(".btn").click(function(e) {
    var id = e.target.id;
    console.log(id);
    if (id == "chatB") {
      $(MainPanel).show();
      $('#SettingsPanel').hide();
      $('#ParticipantsPanel').hide();

    } else if (id == "partB") {

      $(MainPanel).hide();
      $('#SettingsPanel').hide();
      $('#ParticipantsPanel').show();

    } else if (id == "settB") {
      $(MainPanel).hide();
      $('#SettingsPanel').show();
      $('#ParticipantsPanel').hide();
      
    }
  });


});


function openSection(ChatName, elmnt) {
  var i, tabcontent, tablinks;
  var color = "#383838";
  tablinks = document.getElementsByClassName("FT FooterbuttonHeader");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "transparent";
  }
  //document.getElementById(ChatName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
