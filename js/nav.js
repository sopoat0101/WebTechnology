function go(num){

    var myurl = 'generation.html' + '?name=' + num;

    window.location.assign(myurl);
}

function setData(data){
    this.DATA = data;
}