const quotes = [{
    quote: `"Let nothing Disturb you, Let nothing frighten you, Though all things pass, God does not change. Patience wins all things. But he lacks nothing who possesses God; For God alone suffices."`,
    writer: `– St. Teresa of Avila`
}, {
    quote: `"Trust God that you are exactly where you are meant to be."`,
    writer: `– St. Teresa Of Avila`
}, {
    quote: `"The surest way to determine whether one possesses the love of God is to see whether he or she loves his or her neighbor. These two loves are never separated. Rest assured, the more you progress in love of neighbor the more your love of God will increase."`,
    writer: `– St. Teresa Of Avila`
}, {
    quote: `"When we accept what happens to us and make the best of it, we are praising God."`,
    writer: `– St. Teresa Of Avila`
}, {
    quote: `"Prayer is an act of love. Words are not needed."`,
    writer: `– St. Teresa Of Avila`
}, {
    quote: `"We always find that those who walked closest to Christ were those who had to bear the greatest trials."`,
    writer: `– St. Teresa Of Avila`
}, {
    quote: `"Mental prayer in my opinion is nothing else than an intimate sharing between friends; it means taking time frequently to be alone with Him who we know loves us. The important thing is not to think much but to love much and so do that which best stirs you to love. Love is not great delight but desire to please God in everything."`,
    writer: `– St. Teresa Of Avila`
}, {
    quote: `"Christ has no body now but mine. He prays in me, works in me, looks through my eyes, speaks through my words, works through my hands, walks with my feet and loves with my heart."`,
    writer: `– St. Teresa Of Avila`
}, {
    quote: `"Each of us has a soul, but we forget to value it. We don't remember that we are creatures made in the image of God. We don't understand the great secrets hidden inside of us."`,
    writer: `- St. Teresa Of Avila`
}, {
    quote: `"Desire to see God, be fearful of losing Him, and find joy in everything that can lead to Him. If you act in this way, you will always live in great peace."`,
    writer: `- St. Teresa Of Avila`
}, {
    quote: `"The closer one approaches to God, the simpler one becomes."`,
    writer: `- St. Teresa Of Avila`
}, {
    quote: `"Always think of yourself as everyone's servant; look for Christ Our Lord in everyone and you will then have respect and reverence for them all."`,
    writer: `- Teresa Of Avila`
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})