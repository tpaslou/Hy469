/**
 * 
 * Here you can define all the different types of messages that you will send from the server to the clients (wep pages)
 */
module.exports = {
    HELLOWORLD: 'helloWorld',
	
    NEXT_SLIDE: "nextSlide",
	PREVIOUS_SLIDE: "previousSlide",
	PLAY_VIDEO: "playVideo",
	PAUSE_VIDEO: "pauseVideo",
	ANNOTATION_ON: "annotationON",
	ANNOTATION_OFF: "annotationOFF",
	ANNOTATION_ACCEPT: "annotationAccept",
	COORD_ACCEPT: "coordAccept",
	COORD_REJECT: "coordReject",
};