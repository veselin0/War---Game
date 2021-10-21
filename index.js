let deckId;
// create html elemnts
// create button
const btn = document.createElement('button');
btn.className = 'new-deck';
btn.innerText = 'New Deck, Please!';
document.body.appendChild(btn);
// create an h3 to display cards remaining
const cardsRemaining = document.createElement('h3');
cardsRemaining.innerText = 'Cards Remaining: 52';
document.body.appendChild(cardsRemaining);
// create an h2 to display the winner
const winner = document.createElement('h2');  
winner.innerText = 'Game of War';
document.body.appendChild(winner);
// create an he to display computer count
let computerCount = 0;
const computerCountDisplay = document.createElement('h3');
computerCountDisplay.innerText = `Computer Count: ${computerCount}`;
document.body.appendChild(computerCountDisplay);
// create new div before the second button
const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards-container';
document.body.appendChild(cardsContainer);
//create two new divs in cards container div
const cardSlot0 = document.createElement('div');
cardSlot0.className = 'card-slot';
cardsContainer.appendChild(cardSlot0);
const cardSlot1 = document.createElement('div');
cardSlot1.className = 'card-slot';
cardsContainer.appendChild(cardSlot1);
// create an he to display your count
let yourCount = 0;
const yourCountDisplay = document.createElement('h3');
yourCountDisplay.innerText = `Your Count: ${yourCount}`;
document.body.appendChild(yourCountDisplay);
// create another button
const br = document.createElement('br');
document.body.appendChild(br);
const btn1 = document.createElement('button');
btn1.className = 'draw-two-cards';
btn1.innerText = 'Draw Two Cards, Please!';

// create clickHandler function
const clickHandler = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(response => response.json())
        .then(data => {
            cardsRemaining.innerText = `Cards Remaining: ${(data.remaining)}`;
            deckId = data.deck_id;
            if (deckId) document.body.appendChild(btn1); 
            
        });
};

// add eventlistener to the button
btn.addEventListener('click', clickHandler);

// create another click-handler function
const clickHandler1 = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(response => response.json())
        .then(data => {

            cardSlot0.innerHTML = `
                
                    <img class='card' src=${data.cards[0].image} alt='card0'>
            `;
            cardSlot1.innerHTML = `
                
                    <img class='card' src=${data.cards[1].image} alt='card1'>
                
            `;
            // determine which of the 2 cards is the "winner" (has higher value)
            const score = ["2", "3", "4", "5", "6", "7", "8", "9", 
            "10", "JACK", "QUEEN", "KING", "ACE"];
            let card0 = score.indexOf(data.cards[0].value);
            let card1 = score.indexOf(data.cards[1].value);
            if (card0 > card1) {
                winner.innerText = 'Computer wins!';
                computerCount++;
                computerCountDisplay.innerText = `Computer Count: ${computerCount}`;
            } else if (card1 > card0) {
                winner.innerText = 'You win!';
                yourCount++;
                yourCountDisplay.innerText = `Your Count: ${yourCount}`;
            } else {
                winner.innerText = 'War!';
            }
            cardsRemaining.innerText = `Cards Remaining: ${(data.remaining)}`;
            if (data.remaining) {
                btn.disabled = true;
            } else {
                btn.disabled = false;
                btn1.remove();
                cardSlot0.innerHTML = '';
                cardSlot1.innerHTML = '';
            }
        });
};

// add anothe eventlistener to the button 1
btn1.addEventListener('click', clickHandler1);
