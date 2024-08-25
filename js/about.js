$(document).ready(function() {
let offset = {offset: "94%"}

    $(".skills-txt").waypoint(function() {
        $(".skills-txt").addClass("animate__animated animate__fadeInUp");
    },offset );

    $(".card-img-top").waypoint(function() {
        $(".card-img-top").addClass("animate__animated animate__zoomIn");
    },offset );

    $(".card-title").waypoint(function() {
        $(".card-title").addClass("animate__animated animate__slideInUp");
    },offset );

    $(".wrapper-3-title h2").waypoint(function() {
        $(".wrapper-3-title h2").addClass("animate__animated animate__slideInLeft");
    },offset );

    $(".wrapper-3-content p").waypoint(function() {
        $(".wrapper-3-content p").addClass("animate__animated animate__slideInRight");
    },offset );

    $(".project-txt").waypoint(function() {
        $(".project-txt").addClass("animate__animated animate__fadeInUp");
    },offset );


});