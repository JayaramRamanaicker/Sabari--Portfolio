$(document).ready(function() {
    let offset = {offset: "80%"}

    $(".wrapper1-txt-sec h1").waypoint(function() {
        $(".wrapper1-txt-sec h1").addClass("animate__animated animate__fadeInUp");
    }, offset);

    $(".contact-left").waypoint(function() {
        $(".contact-left").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    $(".form-sec").waypoint(function() {
        $(".form-sec").addClass("animate__animated animate__fadeInRight");
    }, offset);

});