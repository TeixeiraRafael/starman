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

getRandomImage = () =>{
    let images = [
        'alladin_sane.png',
        'blind_prophet.png',
        'halloween_jack.png',
        'major_tom.png',
        'thin_white_duke.png',
        'ziggy_stardust.png'
    ]

    let key = Math.trunc(getRandomInt(0, 5));
    let item = document.getElementById('polaroid-content');
    item.src = 'assets/' + images[key];

}

window.onload = () => {
    let item = document.getElementById('polaroid')
    randomRotation(item);
    getRandomImage();
}