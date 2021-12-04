/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author- Purabi Panigrahy
******************************************/


/*** 
 * `quotes` is an array of objects. 
 * I added image key to provide an image of the author when his/her qoute is displayed on the app.
 
***/
const quotes = [
  { quote:    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source:   'Nelson Mandela',
    citation: 'WANDERLUST WORKER',
    year:     '1943',
    image:    'js/images/NMandela.png'

  },
  { quote:    'The way to get started is to quit talking and begin doing.',
    source:   'Walt Disney',
    citation: 'BrainyQuote',
    year:     '1950',
    image:    'js/images/WDisney.png'
  },
  { quote:    'When you reach the end of your rope, tie a knot in it and hang on.',
    source:   'Franklin D. Roosevelt',
    year:     '1945',
    image:    'js/images/FRoos.png'
  },
  { quote:    'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source:   'Benjamin Franklin',
    citation: 'Quote Investigator',
    year:     '1730',
    image:    'js/images/BFranklin.png'
  },
  { quote:    'The only impossible journey is the one you never begin.',
    source:   'Tony Robbins',
    citation: 'quotefancy',
    image:    'js/images/TRobbins.PNG'
  }]

  // check if the array is logging it's contents to the console or not.
  console.log(quotes);

/***
 * `getRandomQuote` function generates random object from the array `quoutes using `Math.random` and `Math.floor` functions.
 * @param arr is the array passed to the function from which we are generating random quote object.
***/

function getRandomQuote(arr){

  let randomQuote = arr[Math.floor(Math.random() * arr.length)];
  return randomQuote;
}

// check if the `getRandomQuote` function when invoked prints corectly to console.
console.log(getRandomQuote(quotes));

/***
 * `randomBackgroundcolor` function generates random background colors combining the random values for green, blue and red colors.
 
***/
function randomBackgroundcolor() {
  let red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue} )`;

  }


/***
 * `printQuote` function to print the key values of random quote index generated from `getRandomQuote` function.
***/

function printQuote(){
 let randQuote = getRandomQuote(quotes);
 let displayQuote = `<p class="quotes"><strong>"${randQuote.quote}"</strong></p>
                     <p class="sources">${randQuote.source}`;
   
if (Object.keys(randQuote).includes('citation')){
  displayQuote += `<span class="citation">${randQuote.citation}</span>`;
 }

if (Object.keys(randQuote).includes('year')){
  displayQuote += `<span class="citation">${randQuote.year}</span>`;
}

//Closing of the P tag.
displayQuote += `</p>`;

if (Object.keys(randQuote).includes('image')){
  displayQuote += `<div><img src="${randQuote.image}"></div>`;
}


document.getElementById('quote-box').innerHTML = displayQuote; 

//Invoking the `randomBackgroundcolor` function
  randomBackgroundcolor();
    
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

