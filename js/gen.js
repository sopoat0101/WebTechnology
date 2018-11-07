var DATA;
var INFO;

window.onload = connectJson();

function connectJson(){

    var index = getURLdata();

    console.log(index);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

            loadPage(myObj, index);

        }
    };

    xmlhttp.open("GET", "../data/gen.json", true);
    xmlhttp.send();

}

function loadPage(data, index){
    // console.log(data);
    document.title = data.gen[index].nameth;
    document.getElementsByClassName('menuitem')[parseInt(index)+1].setAttribute("style", "color:black");
    document.getElementsByClassName('head')[0].innerHTML = data.gen[index].nameth;

    readTextFile(data.gen[index].text);

    document.getElementsByClassName('inner')[0].innerHTML = INFO;
    // gen img
    for(var i = 0; i < data.gen[index].img.length ;i++){
        document.getElementsByClassName('pic')[0].innerHTML+= '<div class="img"></div>';

        document.getElementsByClassName('img')[i].style.backgroundImage = 'url('+ data.gen[index].img[i] +')';

    }
    // gen card
    for(var i = 0; i < data.gen[index].person.length ;i++){

        // console.log(i);
        document.getElementsByClassName('maincard')[0].innerHTML += '\
        <div onclick="goto('+ i + ','+ index +')" class="card">\
            <div class="front"></div>\
            <div class="back">\
                <div class="cardimg"></div>\
                <div class="tag">Leonardo da Vinci</div>\
            </div>\
        </div>' ;
        document.getElementsByClassName('tag')[i].innerHTML = data.gen[index].person[i].name;
        document.getElementsByClassName('front')[i].style.backgroundImage = "url("+ data.gen[index].person[i].img +")";
        // document.getElementsByClassName('cardimg')[i].style.backgroundImage = "url("+ data.gen[index].person[i].img +")";

    }

}

function getURLdata(){
    var add = window.location.search;

    var use = add.search("=");

    var str = add.slice(use+1, add.length);

    return str;
}

function setData(data){
    this.DATA = data;

}

function setINFO(info){
    this.INFO = info;
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                setINFO(allText);
            }
        }
    }
    rawFile.send(null);
}

function goto(num, index){

    var myurl = 'person.html' + '?name=' + num+'?index='+ index;

    window.location.assign(myurl);

}