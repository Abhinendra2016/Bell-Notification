document.addEventListener("DOMContentLoaded", function () {
    const bell = document.getElementById("bell");
    const clapperGroup = document.getElementById("clapper-group");

    let isRinging = false;

    bell.addEventListener("click", function () {
        if (!isRinging) {
            ringBell();
        }
    });

    function ringBell() {
        isRinging = true;


        bell.classList.add("ringing");
        clapperGroup.classList.add("ringing");

        setTimeout(() => {
            bell.classList.remove("ringing");
            clapperGroup.classList.remove("ringing");
            isRinging = false;
        }, 1500); 
    }
});
