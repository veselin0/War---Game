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
     
const drawCards = () => {
    // create another button
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
                console.log(data); 
                // create new div after the second button
                const div = document.createElement('div');
                div.className = 'img-container';
                //create card images
                div.innerHTML = `
                    <img class='img0' src=${data.cards[0].image} alt='card0' width='200' height='300'><br>
                    <img class='img1' src=${data.cards[1].image} alt='card1' width='200' height='300'>
                `;
                document.body.appendChild(div); 
            });
    };

    // add anothe eventlistener to the button 1
    btn1.addEventListener('click', clickHandler1);
};

/**
 * Challenge:
 * 
 * Display the images of the 2 cards you drew in the browser.
 * Probably best to use `innerHTML` to insert a couple <img> elements
 * on the page.
*/

// const dispalyCards = () => {
//     // create new div after the second button
//     const div = document.createElement('div');
//     div.className = 'img-container';
//     //create card images
//     div.innerHTML = `
//         <img src='${src0}' alt='card0' width='100' height='200'><br>
//         <img src='${src1}' alt='card1' width='100' height='200'>
//     `;
//     document.body.appendChild(div);
// }

//${cards[0].image}
//${cards[1].image}