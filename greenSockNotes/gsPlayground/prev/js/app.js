$(document).ready(function() {
    startTween();
});
//
// function startTween() {
//     TweenLite.to($('#toolBox'), 1, {
//         rotation: -720,
//         rotationX: 1260
//     }); //rounded to seconds. (numbers are in seconds not ms)
// }
function startTween() {
    TweenLite.to($('#toolBox'), 2.5, {
        x: 300,
        y: 260,
        scale: 1,
        onComplete: originalState
    });
}

function originalState() {
    TweenLite.to($('#toolBox'), 2.5, {
        x: 0,
        y: 0,
        scale: 1
    });
}
