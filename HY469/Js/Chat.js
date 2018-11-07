



function openChat(ChatName,elmnt) {
    var i, tabcontent, tablinks;
    var color= "#383838";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(ChatName).style.display = "block";
    elmnt.style.backgroundColor = color;

}