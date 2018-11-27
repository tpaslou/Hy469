/* ---------------------------------------------------- */
//Leap Motion communication 

if (!GlobalConfig.DebugMode) {

    var leapController = new Leap.Controller();

    var leapTimer = 0;
    var leapLastTimeNoHand = 0;
    var cursorOn = false;

    leapController.on('streamingStarted', function() {
        console.log("Leap connected.");

        $('body').css('cursor', 'none');
        Cursor.Show();
      });
      
      leapController.on('streamingStopped', function() {
        console.log("Leap disconnected.");

        $('body').css('cursor', 'default');
        Cursor.Hide();
      });

    leapController.loop(function (frame) {

        // NOOP
        var appWidth = $(window).width();
        var appHeight = $(window).height();

        var iBox = frame.interactionBox;
        var pointable = frame.hands[0];

        if (pointable != undefined) {
            leapTimer = 0;
            var leapPoint = pointable.stabilizedPalmPosition;
            var normalizedPoint = iBox.normalizePoint(leapPoint, true);

            var appX = normalizedPoint[0] * appWidth;
            var appY = (1 - normalizedPoint[1]) * appHeight;
            cursorOn = true;
            MoveCursor(appX, appY);
        } else {
            if (!cursorOn)
                return;

            if (leapLastTimeNoHand > 0)
                leapTimer += performance.now() - leapLastTimeNoHand;
            leapLastTimeNoHand = performance.now();

            if (leapTimer > GlobalConfig.Cursor.HideTimeout) {
                HideCursor();
                cursorOn = false;
            }
        }

    });

}

/* ---------------------------------------------------- */
// Leap Motion Cursor View


function MoveCursor(x, y) {
    //Cursor.Show();
    Cursor.Move(y, x);
}

function HideCursor() {
    //Cursor.Hide();
}