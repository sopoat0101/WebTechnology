
var DATA;
var x = 0;
document.getElementsByClassName('point')[x].style.backgroundColor = 'white';

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

    xmlhttp.open("GET", "./data/home.json", true);
    xmlhttp.send();

}

function next(index){

    for(var i = 0;i < DATA.home.length ;i++){
        if(i != x){
            document.getElementsByClassName('point')[x].style.backgroundColor = 'black';
        }
    }

    x += index;
    if(x > DATA.home.length-1){
        x = 0;
    }if(x < 0){
        x = DATA.home.length-1;
    }

    var pic = document.getElementById('pic');
    pic.style.transform = 'scale(0.5)';

    setTimeout(function(){
        pic.style.backgroundImage = 'url('+ DATA.home[x].img +')';
        document.getElementById('hmain').innerHTML = DATA.home[x].nameth;

        document.getElementsByClassName('point')[x].style.backgroundColor = 'white';

    }, 500);

    setTimeout(function(){
        pic.style.transform = 'scale(0.95)';
    }, 1000);
}

function go(){
    var index = x;

    var text = window.location.search;

    var myurl = 'generation.html' + DATA.home[index].link;

    window.location.assign(myurl);
}

function setpic(x){

    for(var i = 0;i < DATA.home.length ;i++){
        if(i != this.x){
            document.getElementsByClassName('point')[this.x].style.backgroundColor = 'black';
        }
    }

    this.x = x;

    var pic = document.getElementById('pic');
    pic.style.transform = 'scale(0.5)';

    setTimeout(function(){
        pic.style.backgroundImage = 'url('+ DATA.home[x].img +')';
        document.getElementById('hmain').innerHTML = DATA.home[x].nameth;

        document.getElementsByClassName('point')[x].style.backgroundColor = 'white';

    }, 500);

    setTimeout(function(){
        pic.style.transform = 'scale(0.95)';
    }, 1000);

}