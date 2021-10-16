/**
 Challenge: Add a button that, when clicked, gets a new 
 deck of cards from the deckofcards API
 
 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
 
 Log the whole response to the console
 */

 fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/') 
 .then(response => response.json())
 .then(data => {
     const btn = document.createElement('button');
     btn.className = 'new-deck';
     btn.innerText = 'Click Me!';
     document.body.appendChild(btn);
     btn.addEventListener('click', () => {
         console.log(data);
     });
 });