const ball = document.getElementById("ball");
const hoverables = document.querySelectorAll('.hoverable');

document.body.addEventListener('mousemove', onMouseMove);

for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
    console.log("Some");
    TweenMax.to(ball, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
    });
}

function onHover(e) {
    console.log("Hover");
    TweenMax.to(ball, 0.3, {
        scale: 4
    });
}

function onMouseHoverOut(e) {
    console.log("UnHover");
    TweenMax.to(ball, 0.3, {
        scale: 1
    });
}
