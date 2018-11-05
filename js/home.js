
var DATA;
var x = 0;

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

function next(){

    x += 1;
    if(x > DATA.home.length-1){
        x = 0;
    }

    var pic = document.getElementById('pic');
    pic.style.transform = 'scale(0.5)';

    setTimeout(function(){
        pic.style.backgroundImage = 'url('+ DATA.home[x].img +')';
        document.getElementById('hmain').innerHTML = DATA.home[x].nameth;
    }, 500);

    setTimeout(function(){
        pic.style.transform = 'scale(1)';
    }, 1000);
    // console.log(x);
    // var index = document.getElementById("select").value;

    // var text = window.location.search;

    // console.log(text.indexOf('?'));

    // var myurl = 'generation.html' + DATA.home[index].link;

    // window.location.assign(myurl);

}