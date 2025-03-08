document.addEventListener("DOMContentLoaded", function() {
    VANTA.HALO({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        amplitudeFactor: 0.80,
        xOffset: -0.23,
        yOffset: 0.30,
        size: 0.40
    });
});
