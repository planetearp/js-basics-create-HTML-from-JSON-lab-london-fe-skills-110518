// document.addEventListener("DOMContentLoaded", (e) => {

const buttonOne = document.getElementById('Titanic');
const buttonTwo = document.getElementById('Terminator 2');

buttonOne.addEventListener('click', function() {
  document.getElementById('cast').innerHTML = "";
  document.getElementById('reviews').innerHTML = "";
  populateMovie('Titanic');
});

buttonTwo.addEventListener('click', function() {
  document.getElementById('cast').innerHTML = "";
  document.getElementById('reviews').innerHTML = "";
  populateMovie('Terminator 2');
});

function populateMovie(movieName) {
  const title = movies[movieName]['title'];
  const director = movies[movieName].director;
  const genre = movies[movieName].genre;
  const filmRating = movies[movieName].filmRating;
  const poster = movies[movieName].poster;
  const audienceScore = movies[movieName].audienceScore;
  const descript = movies[movieName]["description"];
  const cast = movies[movieName].cast;
  const reviews = movies[movieName].reviews;
  
  console.log(cast);
  document.getElementById('title').innerText = title;
  document.getElementById('director').innerText = director;
  document.getElementById('genre').innerText = genre;
  document.getElementById('filmRating').innerText = filmRating;
  document.getElementById('poster').src = poster;
  document.getElementById('audienceScore').innerText = audienceScore;
  document.getElementById('description').innerText = descript;
  
  //Talent iterator
  
  let talent = cast.map(function(each) {
  return `${each.actor} as ${each.role}`;
  })
  
  console.log(talent)
  
  for (const each of talent) {
  let node = document.createElement('div');
  let textnode = document.createTextNode(each);
  node.appendChild(textnode);
  document.getElementById('cast').appendChild(node);
}

//Reviews iterator

  let revs = reviews.map(function(each) {
    return `${each.username} says: ${each.content}`;
  })
  for (const each of revs) {
    let node = document.createElement('div');
    let textnode = document.createTextNode(each);
    node.appendChild(textnode);
    document.getElementById('reviews').appendChild(node);
  }
}


populateMovie('Titanic');
// });