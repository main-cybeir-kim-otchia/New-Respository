document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) { // Only enable Vanta.js on larger screens
        VANTA.HALO({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            amplitudeFactor: 0.8,
            xOffset: -0.23,
            yOffset: 0.3,
            size: 0.4,
        });
    } else {
        document.getElementById("vanta-bg").style.backgroundColor = "#1a1a1a"; // Fallback color for mobile
    }
});