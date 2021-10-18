/**
 Challenge: Add a button that, when clicked, gets a new 
 deck of cards from the deckofcards API
 
 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
 
 Log the whole response to the console
*/

let deckId;

// create button
const btn = document.createElement('button');
btn.className = 'new-deck';
btn.innerText = 'New Deck, Please!';
document.body.appendChild(btn);

// create clickHandler function
const clickHandler = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/') 
        .then(response => response.json())
        .then(data => {
            deckId = data.deck_id;
            console.log(deckId);
            if (deckId) drawCards();
        }); 
};

// add eventlistener to the button
btn.addEventListener('click', clickHandler);
     
/**
 * Challenge
 * 
 * Background:
 * The Deck of Cards API expects us to provide the deck id 
 * of the deck we're playing with so it can remember which
 * cards we've already drawn, how many are remaining in the
 * deck, etc.
 * 
 * Task: save the deck_id from the returned data to a local?
 * (global) variable so we can use it later
*/

/**
 * Challenge
 * 
 * Task: Using the saved deckId, draw 2 new cards from the deck
 * 
 * Docs for original Deck of Cards API: https://deckofcardsapi.com/#draw-card
 * BaseUrl you'll use: https://apis.scrimba.com/deckofcards/api/deck/
 * (that will replace the base url of https://deckofcardsapi.com/api/deck/)
 * that you'll see in the deck of cards API docs.
 * 
 * 1. Create a new button that, when clicked, draws 2 cards from the deckId
 * you have saved
 *      Note: you'll need to get a new deck every time you refresh the page,
 *      since you're only saving your deckId in a local variable right now
 * 2. Log those 2 cards to the console
*/

const drawCards = () => {
    const br = document.createElement('br');
    document.body.appendChild(br);
    const btn1 = document.createElement('button');
    btn1.className = 'draw-two-cards';
    btn1.innerText = 'Draw Two Cards, Please!';
    document.body.appendChild(btn1);

    // create another click-handler function
    const clickHandler1 = () => {
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`) 
            .then(response => response.json())
            .then(data => {
                if (deckId) console.log(data);
            });
    };

    // add anothe eventlistener to the button 1
    btn1.addEventListener('click', clickHandler1);
};
// create another button
// const createBtn = () => {
//     const br = document.createElement('br');
//     document.body.appendChild(br);
//     const btn1 = document.createElement('button');
//     btn1.className = 'draw-two-cards';
//     btn1.innerText = 'Draw Two Cards, Please!';
//     document.body.appendChild(btn1);
// }
// const br = document.createElement('br');
// document.body.appendChild(br);
// const btn1 = document.createElement('button');
// btn1.className = 'draw-two-cards';
// btn1.innerText = 'Draw Two Cards, Please!';
// document.body.appendChild(btn1);

// // create another click-handler function
// const clickHandler1 = () => {
//     fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`) 
//         .then(response => response.json())
//         .then(data => {
//             if (deckId) console.log(data);
//         });
// };

// // add another eventlistener to the button 1
// btn1.addEventListener('click', clickHandler1);