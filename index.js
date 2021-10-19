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
            console.log(deckId);
            if (deckId) document.body.appendChild(btn1); //drawCards();
        }); 
};

// add eventlistener to the button
btn.addEventListener('click', clickHandler);
     
// const drawCards = () => {
//     // create another button
//     const br = document.createElement('br');
//     document.body.appendChild(br);
//     const btn1 = document.createElement('button');
//     btn1.className = 'draw-two-cards';
//     btn1.innerText = 'Draw Two Cards, Please!';
//     document.body.appendChild(btn1);

    // create another click-handler function
    const clickHandler1 = () => {
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`) 
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                // create new div after the second button
                // const div = document.createElement('div');
                // div.className = 'img-container';
                //create card images
                cardSlot0.innerHTML = `
                
                    <img class='card' src=${data.cards[0].image} alt='card0'>
                `;
                cardSlot1.innerHTML = `
                
                    <img class='card' src=${data.cards[1].image} alt='card1'>
                
            `;
                // document.body.appendChild(div); 
            });
    };

    // add anothe eventlistener to the button 1
    btn1.addEventListener('click', clickHandler1);
//};

