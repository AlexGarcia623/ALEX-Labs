document.onkeydown = checkKey;

// document.getElementById('test').innerHTML = slider.value;
var slider = document.getElementById("myRange");
var output = document.getElementById("energy");
output.innerHTML = slider.value;

function checkKey(e) {
    e = e || window.event;

    // e.preventDefault();
    if (e.keyCode == "37") { // Left -- Decrease energy
        if (!going) {
            slider.value = parseFloat(slider.value) - 0.1;
            sliderInput();
        }
    } else if (e.keyCode == "39") { // Right -- Increase energy
        if (!going) {
            slider.value = parseFloat(slider.value) + 0.1;
            sliderInput();
        }
    } else if (e.keyCode == "13") { // Enter -- Fire Photon
        if (!going) {
            start();
        }
    } else if (e.keyCode == "67") { // C -- change to colorblind mode
        colorBlindToggle();
    } else if (e.keyCode >= 48 && e.keyCode < 58) { // E -- Focus on photon input
        document.getElementById('repeats').focus();
    }
}