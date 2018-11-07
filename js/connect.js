function connectJson(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            // DATA = myObj;
            return myObj;
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

export function connect(url){
    connectJson(url);
};