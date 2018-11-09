$(document).ready(function() {

    document.getElementById("PresentationOptionsBtn").click();
    
    $(".tablinkSettings").click(function(e) {
      var id = e.target.id;
      console.log(id);
      if (id == "PresentationOptionsBtn") {
        $('#MiddlePanelPresentationOptions').show();
        $('#MiddlePanelMoreOptionsParticipant').hide();
      } else if (id == "MoreOptionsBtn") {
        $('#MiddlePanelPresentationOptions').hide();
        $('#MiddlePanelMoreOptionsParticipant').show();
      }
  
      
    });
  });
  


function openPanelSettings(elmnt) {
    var i, tabcontent, tablinks;
    var color= "#383838";
  
    tablinks = document.getElementsByClassName("tablinkSettings");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    
    elmnt.style.backgroundColor = color;

}