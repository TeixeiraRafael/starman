function loadBody(source, title){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', source, true);
    xhr.onreadystatechange= function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById('page-title').innerHTML = title;
        document.getElementById('page-content').innerHTML = this.responseText;
    };
    xhr.send();
}
