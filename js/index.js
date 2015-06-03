var h1 = document.createElement('h1');
h1.innerHTML = "OMDB Movies About Pizza";
document.body.appendChild(h1);

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);

for (var i = 0; i < responseData.Search.length; i++) {
  var movie = responseData.Search[i]
  var id = movie.imdbID

  var a = document.createElement('a');
  a.innerHTML = movie.Title;
  a.href = '/show.html?i=' + id;

  var p = document.createElement('p');
  p.appendChild(a);
  document.body.appendChild(p);
}

});
xhr.send();
