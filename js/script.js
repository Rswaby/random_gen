/******************************************
 FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  { 
    quote:"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", 
    source:"Treehouse", 
    citation:"", 
    year:"2010" 
  },
  { 
    quote:"Those Who Do Not Understand True Pain Can Never Understand True Peace.",
    source:"Pain", 
    citation:"Naruto Shippuden", 
    year:"2010"
  },
  { 
    quote:"People's lives don't end when they die. It ends when they lose faith.", 
    source:"Itachi", 
    citation:"Naruto Shippuden", 
    year:"2010"
  
  },
  { 
    quote:"It is not wise to judge others based on your own preconceptions and by their appearances.", 
    source:"Itachi", 
    citation:"Naruto Shippuden",
  },
  { quote:"People live their lives bound by what they accept as correct and true. \
      That's how they define \"reality\". But what does it mean to be \"correct \" \
      or \"true\"? Merely vague concepts... Their \"reality\" may all be a mirage. \
      Can we consider them to simply be living in their own world, shaped by their \
      beliefs?", 
      source:"Itachi Uchiha",
      citation:"Naruto Shippuden", 
      year:"2211"},
];

/***
 * `getRandomQuote` function
***/
const getRandomQuote = (quotes) =>{
  return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log(getRandomQuote(quotes));
/***
 * `printQuote` function
***/
const printQuote = () =>{
  
  const quoteObj = getRandomQuote(quotes);

  console.log(quoteObj);
  let finalHTMLBuilder =`
  <p class="quote">${quoteObj.quote}</p>
  <p class="source">${quoteObj.source}
  `;
  if(quoteObj.citation){
    finalHTMLBuilder += `<span class="citation">${quoteObj.citation}</span>`;
  }
  if(quoteObj.year){
    finalHTMLBuilder += `<span class="year">${quoteObj.year}</span>`;
  }
  
  finalHTMLBuilder+=`</p>`

  document.getElementById('quote-box').innerHTML = finalHTMLBuilder;
  
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);