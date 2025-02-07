document.addEventListener("DOMContentLoaded", function () {
    var aesthetics = document.getElementById("aesthetics");
    var hoverImage = document.getElementById("hover-image-01");

    aesthetics.addEventListener("mouseenter", function (event) {
        hoverImage.style.display = "block";
        hoverImage.style.left = event.pageX + 0 + "px";
        hoverImage.style.top = event.pageY + 0 + "px";
    });

    aesthetics.addEventListener("mousemove", function (event) {
        hoverImage.style.left = event.pageX + 0 + "px";
        hoverImage.style.top = event.pageY + 0 + "px";
    });

    aesthetics.addEventListener("mouseleave", function () {
        hoverImage.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var functionality = document.getElementById("functionality");
    var hoverImage = document.getElementById("hover-image-02");

    functionality.addEventListener("mouseenter", function (event) {
        hoverImage.style.display = "block";
        hoverImage.style.left = event.pageX + 0 + "px";
        hoverImage.style.top = event.pageY + 0 + "px";
    });

    functionality.addEventListener("mousemove", function (event) {
        hoverImage.style.left = event.pageX + 0 + "px";
        hoverImage.style.top = event.pageY + 0 + "px";
    });

    functionality.addEventListener("mouseleave", function () {
        hoverImage.style.display = "none";
    });
});