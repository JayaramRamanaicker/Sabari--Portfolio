$(document).ready(function() {
    let offset = {offset: "50%"}

    $("#wrapper1-img").waypoint(function() {
        $("#wrapper1-img").addClass("animate__animated animate__fadeInRightBig");
    }, offset);

    $("#name").waypoint(function() {
        $("#name").addClass("animate__animated animate__fadeInUp");
    }, offset);


});