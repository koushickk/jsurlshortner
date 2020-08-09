let endpoint = "https://jsonbox.io/box_2a9eec4c4b6884b8e794" ;

function getRandom(){
  let randomString = Math.random().toString(32).substring(2,5) + + Math.random().toString(32).substring(2,5);
  
  return randomString
  
}

function getUrl(){
  let url = document.getElementById('urlinput').value;
  
  let protokol_ok = url.startsWith('http://') || url.startsWith('https://') || url.startsWith('ftp://');
  
  if(!protokol_ok){
  let newurl = 'http' + url;
    return newurl;
  }
  else{
    return url;
  }
  
}
//generate hash '#'
function genHash(){
  if(window.location.hash == ''){
    window.location.hash = getRandom();
  }
}
//send send_request
function send_request(url){
  
this.url = url;
$.ajax({‘url’: endpoint + '/'
+window.location.hash.substr(1),
type:'POST',
‘data’: JSON.stringify(this.url),
dataType:'json',
contentType:'application/json',
charset:'utf-8'

}
//store the url
function shortUrl(){
  let longUrl = getUrl();
  genHash();
  send_request(longUrl);
  
}
let hashh = window.location.hash.substr(1);

if (window.location.hash != "") {    $.getJSON(endpoint + "/" + hashh, function (data) {        data = data["result"];}
if (data != null) {            window.location.href = data;
}
