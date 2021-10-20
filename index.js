let deckId;
// create html elemnts
// create button
const btn = document.createElement('button');
btn.className = 'new-deck';
btn.innerText = 'New Deck, Please!';
document.body.appendChild(btn);
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
            deckId = data.deck_id;
            if (deckId) document.body.appendChild(btn1); //drawCards();
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
                console.log('card0');
            } else if (card1 > card0) {
                console.log('card1');
            } else {
                console.log("It's a tie!");
            }


        });
};

// add anothe eventlistener to the button 1
btn1.addEventListener('click', clickHandler1);