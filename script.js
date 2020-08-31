/**
 * TODO: Change sortMoviesByRank() function to sort movies list by rank
 * TODO: Sort movies by id, rank, and title through dynamic function
 * TODO: Create helper function called getMaxMovieObject() for finding max movie
 */

// List of movies
let movies = [
  {
      title: "Fight Club",
      rank: 10,
      id: "tt0137523"
  },
  {
      title: "The Shawshank Redemption",
      rank: 1,
      id: "tt0111161"
  },
  {
      title: "The Lord of the Rings: The Return of the King",
      rank: 9,
      id: "tt0167260"
  },
  {
      title: "The Godfather",
      rank: 2,
      id: "tt0068646"
  },
  {
      title: "The Good, the Bad and the Ugly",
      rank: 5,
      id: "tt0060196"
  },
  {
      title: "The Godfather: Part II",
      rank: 3,
      id: "tt0071562"
  },
  {
      title: "The Dark Knight",
      rank: 6,
      id: "tt0468569"
  },
  {
      title: "Pulp Fiction",
      rank: 4,
      id: "tt0110912"
  },
  {
      title: "Schindler's List",
      rank: 8,
      id: "tt0108052"
  },
  {
      title: "12 Angry Men",
      rank: 7,
      id: "tt0050083"
  }
]

window.onload = function() {

  // Display Movies list
  displayMovies(movies);
  document.getElementById('rank-header').addEventListener('click', () => {
    let sorted = sortMoviesByRank(movies);
    displayMovies(sorted);
  });
}

/**
* Display list of movies in a table
* You don't have to worry so much about this
*/
function displayMovies(movies){
  let table = "<table border='1' style='width: 100%'>";
  table += "<tr><th>ID</th><th>Name</th><th id='rank-header'>Rank</th></tr>";
  for(let index=0; index<movies.length; index++){
      table += "<tr>";
      table += "<td>" + movies[index].id + "</td>";
      table += "<td>" + movies[index].title + "</td>";
      table += "<td>" + movies[index].rank + "</td>";
      table += "</tr>"
  }
  // Close the table
  table += "</table>";
  document.getElementById("movies-list").innerHTML = table;
}


/**
* Sort movies by rank from greatest to smallest
* HINT: make sure you are comparing the right value in in if(...)
* HINT: replace numbers with movies .
*/
function sortMoviesByRank(movieList){
// Code from previous sortBestRatingsFirst() function
  if (movieList.length === 0) {
    return [];
  }
  let maxIndex = getMaxMovieObject(movieList, 'rank');
  let max = movieList[maxIndex];
  if (movieList[0].rank !== max.rank) {
    movieList[maxIndex] = movieList[0];
    movieList[0] = max;
  }
  return [movieList[0]].concat(sortMoviesByRank(movieList.slice(1)));
}

/**
* Sort movies by an attribute
* @param sortAttr pass in 'id', 'title', or 'rank' to sort by
*/
function sortMoviesByAttr(movies, sortAttr){
// CODE GOES HERE
}


/**
* Retrieve the max movie object based on attribute
* HINT: make sure you are comparing the right attribute
*/
function getMaxMovieObject(movieList, sortAttr){
// Code from previous findMaxHelper() function
  let top = movieList[0];
  let topIndex = 0;

  for (let i = 0; i < movieList.length; i++) {
      if (movieList[i][sortAttr] > top[sortAttr]) {
          top = movieList[i];
          topIndex = i
      }
  }
  return topIndex;
}

// console.log(sortMoviesByRank(movies));


















// const findMax = (array) => {
//   let max = array[0];
//   let maxIndex = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }

// const sortDescending = (array) => {
//   if (array.length === 0) {
//     return [];
//   }
//   let maxIndex = findMax(array);
//   let max = array[maxIndex];
//   if (array[0] !== max) {
//     array[maxIndex] = array[0];
//     array[0] = max;
//   }
//   return [array[0]].concat(sortDescending(array.slice(1)));
// }


// const array1 = [5, 8, 2, 9, 3, 10]

// console.log(sortDescending(array1));


