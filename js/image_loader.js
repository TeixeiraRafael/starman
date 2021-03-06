randomRotation = (item) => {
    val = getRandomInt(-10, 10);
    item.style.transform = "rotate(" + val + "deg)";
    item.style.webkitTransform = "rotate(" + val + "deg)";
    item.style.mozTransform = "rotate(" + val + "deg)";
    item.style.display = "inline";

    item.style['box-shadow'] = val + "px " + Math.abs(val) + "px 5px #111";
}

getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = () => {
    let item = document.getElementById('polaroid')
    randomRotation(item);
}