var query = document.location.search;
query = query.replace('?','');
query = query.split('&');
var urlObj = {};

for (var i = 0; i < query.length; i++) {
  var splitArray = query[i].split('=');
  urlObj[splitArray[0]]=splitArray[1];
}

var id = urlObj.i;

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?i=' + id);
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);

  for (var key in responseData) {
    var p = document.createElement('p');
    var filler = key + ": " + responseData[key];
    p.innerHTML = filler
    document.body.appendChild(p);
  }

});


xhr.send();
