
var DATA;

function loadPage(){
    var index = document.getElementById("select").value;
    var bg = DATA.home[index].img;
    console.log(bg);
    document.body.style.backgroundImage = 'url('+bg+')';
}

function connectJson(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            DATA = myObj;
        }
    };

    xmlhttp.open("GET", "../data/home.json", true);
    xmlhttp.send();

}

function goto(){
    var index = document.getElementById("select").value;

    var text = window.location.search;

    console.log(text.indexOf('?'));

    var myurl = 'generation.html' + DATA.home[index].link;

    window.location.assign(myurl);

}