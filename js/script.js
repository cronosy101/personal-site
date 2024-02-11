document.addEventListener('DOMContentLoaded', function () {
    var circles = document.querySelectorAll('.circle, .circle2, .circle3, .circle4, .circle5');
    let fadeElement = document.getElementById('intro');

    // Set the base delay for the first circle
    var delay = 500;

    circles.forEach(function (circle, index) {
        circle.classList.add('starting-color');
        setTimeout(function () {
            circle.classList.add('color-change');
        }, delay + index * 500); // Add 500 milliseconds of delay for each subsequent circle
    });
    setTimeout(function(){
    fadeElement.classList.add('fade');
    },100);
});




//////loop for continues circles

// document.addEventListener('DOMContentLoaded', function () {
//     var circles = document.querySelectorAll('.circle, .circle2, .circle3, .circle4, .circle5');
//     let fadeElement = document.getElementById('intro');

//     function startAnimation() {
//         // Set the base delay for the first circle
//         var delay = 500;

//         circles.forEach(function (circle, index) {
//             circle.classList.add('starting-color');
//             setTimeout(function () {
//                 circle.classList.add('color-change');
//             }, delay + index * 500); // Add 500 milliseconds of delay for each subsequent circle
//         });

//         setTimeout(function () {
//             fadeElement.classList.add('fade');
//         }, 100);

//         // After animation completes, call the function again for looping
//         setTimeout(function () {
//             circles.forEach(function (circle) {
//                 circle.classList.remove('starting-color', 'color-change');
//             });
//             fadeElement.classList.remove('fade');
//             startAnimation(); // Recursive call
//         }, delay + circles.length * 500 + 100); // Total duration of the animation + 100ms buffer
//     }

//     startAnimation(); // Initial call to start the animation
// });
