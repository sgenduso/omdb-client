var form = document.createElement('form');
  form.setAttribute('action', '/index.js');
  form.setAttribute('method', 'get');
var label = document.createElement('label');
  label.setAttribute('for','search');
  label.innerHTML="I want to see movies about  ";
var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'search');
var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.innerHTML="SEARCH";
form.appendChild(label);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(form);
var divContent = document.createElement('div');
divContent.innerHTML="";
document.body.appendChild(divContent);


button.addEventListener('click', function () {
  event.preventDefault();

divContent.innerHTML="";


var search = input.value;

var h1 = document.createElement('h1');
h1.className = 'upper';
h1.innerHTML = 'OMDB Movies About' + " " + search;
divContent.appendChild(h1);

// var search = prompt("I want to see movies about...")

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s=' + search);
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
  divContent.appendChild(p);
}

});
xhr.send();

})
