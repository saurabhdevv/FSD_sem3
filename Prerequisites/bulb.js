let isOn = false;

function toggle() {
    let bulb = document.getElementById("bulb");

    if(isOn) {
        bulb.src = "images (1).jpg";
        isOn = false;
    }
    else {
        bulb.src = "images.jpg";
        isOn = true;
    }
}

// function off() {
//     let bulb = document.getElementById("bulb");
//     bulb.src = "images (1).jpg";
// }
// function on() {
//     let bulb = document.getElementById("bulb");
//     bulb.src = "images.jpg";
// }