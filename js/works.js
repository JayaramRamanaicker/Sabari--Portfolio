$(document).ready(function() {
    let offset = {offset: "85%"}

    $(".video-sec1 h4").waypoint(function() {
        $(".video-sec1 h4").addClass("animate__animated animate__fadeInUp");
    },offset );

    $(".video-sec2 h4").waypoint(function() {
        $(".video-sec2 h4").addClass("animate__animated animate__fadeInUp");
    },offset );

    $(".title h1").waypoint(function() {
        $(".title h1").addClass("animate__animated animate__fadeInDown");
    },offset );

    $(".raw video").waypoint(function() {
        $(".raw video").addClass("animate__animated animate__fadeInLeft");
    },offset );

    $(".edited video").waypoint(function() {
        $(".edited video").addClass("animate__animated animate__fadeInRight");
    },offset );

    $(".project-sec h1").waypoint(function() {
        $(".project-sec h1").addClass("animate__animated animate__fadeInDown");
    },offset );

    $(".left-1").waypoint(function() {
        $(".left-1").addClass("animate__animated animate__fadeInLeft");
    },offset );

    $(".left-2").waypoint(function() {
        $(".left-2").addClass("animate__animated animate__fadeInLeft");
    },offset );

    $(".right-1").waypoint(function() {
        $(".right-1").addClass("animate__animated animate__fadeInRight");
    },offset );

    $(".right-2").waypoint(function() {
        $(".right-2").addClass("animate__animated animate__fadeInRight");
    },offset );


    $(".project-txt").waypoint(function() {
        $(".project-txt").addClass("animate__animated animate__fadeInUp");
    },offset );
});