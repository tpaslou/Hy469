$(document).ready(function() {

    document.getElementById("RemoteUsersBtn").click();
    
    $(".tablinkParticipants").click(function(e) {
      var id = e.target.id;
      console.log(id);
      if (id == "RemoteUsersBtn") {
        $('#MiddlePanelRemoteParticipants').show();
        $('#MiddlePanelLocalParticipants').hide(); 
      } else if (id == "LocalUsersBtn") {
        $('#MiddlePanelRemoteParticipants').hide();
        $('#MiddlePanelLocalParticipants').show(); 
      }
  
      
    });
  });
  


function openPanel(elmnt) {
    var i, tabcontent, tablinks;
    var color= "#383838";
  
    tablinks = document.getElementsByClassName("tablinkParticipants");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    
    elmnt.style.backgroundColor = color;

}