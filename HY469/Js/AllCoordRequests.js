function AnnotationRequest(){
    //HideAllRequests();
    console.log("YASS");
    $('#AnnotationsNotification').show();
}

function ChangeFileRequest(){
    HideAllRequests();
    $('#PresentationNotification').show();
}

function CoordinatorRequest(){
    HideAllRequests();
    $('#CoordinatorNotification').show();
}

function JoinRequest(){
    HideAllRequests();
    $('#JoinNotification').show();
}

function AcceptJoinRequest(){
    HideAllRequests();
    $('#JoinNotification').show();
}

function ParticipantOptionsRequest(){
    HideAllRequests();
    $('#ParticipantOptionsNotification').show();
}

function HideAllRequests(){
    $('.Notification').hide();
}

function AcceptCoordinatorRequest(){
    HideAllRequests();
    if(window.location.pathname == PartTablet)
        window.location.href='../Html/Coordinator.html'
}

function HideParticipantPendingRequests(){
    if(window.location.pathname == PartTablet)
        $('.Notification').hide();
    else if(window.location.pathname == PartLaptop)
        $('.PerOptionsPanel').hide();
}

function ParticipantJoin(){
    console.log(window.location.pathname);
    if(window.location.pathname == LoginTablet)
        window.location.href='../Html/Participant.html'
    else if(window.location.pathname == LoginLaptop)
        window.location.href='../Html/Laptop_Participant.html'
    else if(window.location.pathname == Coord)
        LastUserStatus(true);
}

function LastUserStatus(joined){
    if(joined == true)
        $('#RemoteUserIconNewJoinedParticipant').show();
    else
        $('#RemoteUserIconNewJoinedParticipant').hide();
}

function RemoveParticipant(){
    if(window.location.pathname == PartTablet)
        window.location.href='../Html/LoginScreen.html'
}