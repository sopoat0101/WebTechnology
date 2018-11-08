var DATA;
var INFO;

//path json
var path = ["./data/rena.json", "./data/seadis.json", "./data/refor.json", "./data/science.json", "./data/industrial.json"];

function setData(data){
    this.DATA = data;

}

function setINFO(info){
    this.INFO = info;
}

function getURLdata(key){
    var add = window.location.search;
    // console.log(add);

    var start = add.indexOf(key);

    var use = start + key.length;

    var str = add[use];

    return str;
}

function connectJson(){

    var index = getURLdata('index=');

    var name = getURLdata('name=');

    // console.log(index);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

            loadPage(myObj, index, name);

        }
    };

    xmlhttp.open("GET", path[index], true);
    xmlhttp.send();

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
                return allText;
            }
        }
    }
    rawFile.send(null);
}

function loadPage(data, index, name){
    document.title = data.person[name].name;
    document.getElementsByClassName('menuitem')[parseInt(index)+1].setAttribute("style", "color:black");

    // img 
    document.getElementsByClassName('img')[0].style.backgroundImage = 'url('+ data.person[name].img +')';
    // name
    document.getElementsByClassName('head')[0].innerHTML = data.person[name].name;
    //info
    readTextFile(data.person[name].info)

    document.getElementsByClassName('dis')[0].innerHTML = INFO;
    // his
    readTextFile(data.person[name].his);

    document.getElementsByClassName('inner')[1].innerHTML = INFO;

    // another
    for(var i = 0; i < data.person[name].another.length;i++){
        document.getElementsByClassName('pic')[0].innerHTML+= '<div class="img"></div>';

        document.getElementsByClassName('img')[i+1].style.backgroundImage = 'url('+ data.person[name].another[i] +')';
    }

}