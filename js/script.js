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
    year:"2010", 
    tags:["motivational"]
  },
  { 
    quote:"Those Who Do Not Understand True Pain Can Never Understand True Peace.",
    source:"Pain", 
    citation:"Naruto Shippuden", 
    year:"2010",
    tags:["godlike","pain"]
  },
  { 
    quote:"People's lives don't end when they die. It ends when they lose faith.", 
    source:"Itachi", 
    citation:"Naruto Shippuden", 
    year:"2010",
    tags:["guru","wisdom"]
  
  },
  { 
    quote:"It is not wise to judge others based on your own preconceptions and by their appearances.", 
    source:"Itachi", 
    citation:"Naruto Shippuden",
  },
  { 
    quote:"People live their lives bound by what they accept as correct and true. \
      That's how they define \"reality\". But what does it mean to be \"correct \" \
      or \"true\"? Merely vague concepts... Their \"reality\" may all be a mirage. \
      Can we consider them to simply be living in their own world, shaped by their \
      beliefs?", 
      source:"Itachi Uchiha",
      citation:"Naruto Shippuden", 
      year:"2010",
      tags:["guru","wisdom","perspective"]

    },
];
const backGroundColors = ["rebeccapurple", "firebrick", "green", "yellow","aqua","darkolivegreen","darkseagreen","lightseagreen","mediumseagreen"]

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () =>{
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor = () =>{
  return backGroundColors[Math.floor(Math.random() * backGroundColors.length)]
}

/***
 * `printQuote` function
***/
const printQuote = () =>{
  
  const quoteObject = getRandomQuote();
  const randomColor = getRandomColor();

  console.log(quoteObject);
  
  let finalHTMLBuilder =`
  <p class="quote">${quoteObject.quote}</p>
  <p class="source">${quoteObject.source}
  `;
  // determine if object has citation or year 
  if(quoteObject.citation){
    finalHTMLBuilder += `<span class="citation">${quoteObject.citation}</span>`;
  }
  if(quoteObject.year){
    finalHTMLBuilder += `<span class="year">${quoteObject.year}</span>`;
  }
  // close p tag
  finalHTMLBuilder+=`</p>`

  

  // tags (if tags value exist and has tags)
  const tagList = quoteObject.tags;

  // This will return undefined/false or true
  const tagsExist = tagList && tagList.length > 0;

  if (tagsExist){
    finalHTMLBuilder+=`<ul class="tags">`
    for( let i = 0; i<tagList.length; i++){
      finalHTMLBuilder+=`<li class="tag">${tagList[i]}</li>`
    }
    finalHTMLBuilder+='</ul>'
  }

  document.getElementById('quote-box').innerHTML = finalHTMLBuilder;
  
  // change background color for body
  document.getElementById('body').style.backgroundColor = randomColor;
  
  // change text color for tags to the same color
  // has to be done after innerHTML has been set for quote-box
  if(tagsExist) {
    const htmltags = document.querySelectorAll(".tag");
    // htmltags = [li.tag, li.tag ...] a list of list item nodes.
    for( let i = 0; i<htmltags.length; i++){
      htmltags[i].style.color = randomColor;
    }
  }
}

const autoPrintQuote = () =>{
  setInterval(printQuote,10000);
}

autoPrintQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);