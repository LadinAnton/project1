function change() {
    var elements = document.getElementsByClassName('zzz');
    for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i+1;
    }
}