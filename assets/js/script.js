var devCycle = 0;
var devTypes = ["Java", "Web"];
var eDevCycle = document.getElementById("developerTypeCycle");


function typewriterEffect(text, callback) {
    let i = 0;
    let typingInterval = setInterval(() => {
        eDevCycle.innerHTML += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(typingInterval);
            if (callback) callback();
        }
    }, 100);
}

function deleteEffect(callback) {
    let currentText = eDevCycle.innerHTML;
    let i = currentText.length;
    let deletingInterval = setInterval(() => {
        eDevCycle.innerHTML = currentText.substring(0, i - 1);
        i--;
        if (i <= 0) {
            clearInterval(deletingInterval);
            if (callback) callback();
        }
    }, 100); 
}


function cycleDevTypes() {
    deleteEffect(() => {
        devCycle = (devCycle + 1) % devTypes.length;
        typewriterEffect(devTypes[devCycle], () => {
            setTimeout(cycleDevTypes, 3000); 
        });
    });
}


// Modal functionality for Kick bounty
document.addEventListener("DOMContentLoaded", () => {
    const kickBounty = document.querySelector('#kick');
    const modal = document.getElementById("kickModal");
    const closeBtn = modal.querySelector(".close");

    kickBounty.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


window.addEventListener("load", cycleDevTypes);