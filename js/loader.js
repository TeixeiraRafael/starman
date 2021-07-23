function loadBody(source){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', source, true);
    xhr.onreadystatechange= function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;

        const new_doc = document.implementation.createHTMLDocument("newDocument").documentElement;
        new_doc.innerHTML = this.responseText;
        
        var title = new_doc.querySelector('.title');
        var body = new_doc.querySelector('.body');

        if (title) document.querySelector('.title').textContent = title.textContent;
        if (body) document.querySelector('.body').innerHTML = body.innerHTML;
    };

    xhr.send();
}