var url = ["../data/renaissance.json", "../data/renaissance.json", "../data/renaissance.json", "../data/renaissance.json", "../data/renaissance.json"];

var DATA;

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

    xmlhttp.open("GET", url[index], true);
    xmlhttp.send();

}

function loadPage(data, index){
    console.log(data);
    document.title = data.gen.nameth;
    document.getElementsByClassName('menuitem')[parseInt(index)+1].setAttribute("style", "color:black");
    document.getElementsByClassName('head')[0].innerHTML = data.gen.nameth;

    for(var i = 0; i < data.gen.person.length ;i++){
        // console.log(i);
        document.getElementsByClassName('maincard')[0].innerHTML += '\
        <div class="card">\
            <div class="front"></div>\
            <div class="back">\
                <div class="cardimg"></div>\
                <div class="tag">Leonardo da Vinci</div>\
            </div>\
        </div>' ;
        document.getElementsByClassName('tag')[i].innerHTML = data.gen.person[i].name;
        document.getElementsByClassName('front')[i].style.backgroundImage = "url("+ data.gen.person[i].img +")";
        document.getElementsByClassName('cardimg')[i].style.backgroundImage = "url("+ data.gen.person[i].img +")";

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