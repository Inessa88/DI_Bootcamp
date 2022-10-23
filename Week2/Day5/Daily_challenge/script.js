// Instructions
// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.
// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

// 4. Note : Make sure you get the grammar correct.
// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.




function bottleSong() {
    let quantity = Number(prompt("From what number would you like to begin counting down bottles?"));
    let bottles = 1;

    while (quantity>0){

        if (quantity > bottles){
            console.log(
                `${quantity === 1 ? quantity + ' bottle' : quantity + ' bottles'} of beer on the wall
                ${quantity === 1 ? quantity + ' bottle' : quantity + ' bottles'} of beer
                Take ${bottles} down, pass ${bottles === 1 ? 'it' : 'them'} around
                ${(quantity - bottles) === 1 ? (quantity - bottles) + ' bottle' : (quantity - bottles) + ' bottles'} of beer on the wall
                `);
            quantity = quantity-bottles;
            bottles = bottles +1;
        } else if (quantity < bottles || quantity === bottles){
            bottles = quantity;
            console.log(
                `${quantity === 1 ? quantity + ' bottle' : quantity + ' bottles'} of beer on the wall
                ${quantity === 1 ? quantity + ' bottle' : quantity + ' bottles'} of beer
                Take ${bottles} down, pass ${bottles === 1 ? 'it' : 'them'} around
                0 bottle of beer on the wall
                `);
            break;
        }
    }
}

bottleSong();