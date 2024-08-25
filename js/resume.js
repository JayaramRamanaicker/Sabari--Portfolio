$(document).ready(function() {
    let offset = {offset: "94%"}

    $(".btn-sec a").waypoint(function() {
        $(".btn-sec a").addClass("animate__animated animate__fadeInUp")
    }, offset);

    $(".img-sec img").waypoint(function() {
        $(".img-sec img").addClass("animate__animated animate__zoomIn")
    }, offset);

    $(".project-txt h2").waypoint(function() {
        $(".project-txt h2").addClass("animate__animated animate__fadeInUp")
    }, offset);
});