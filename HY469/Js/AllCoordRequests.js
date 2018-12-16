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

function ParticipantOptionsRequest(){
    HideAllRequests();
    $('#ParticipantOptionsNotification').show();
}

function HideAllRequests(){
    $('.Notification').hide();
}