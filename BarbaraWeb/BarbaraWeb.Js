const quotes = [{
    quote: `"In times of desolation, God conceals Himself from us so that we can discover for ourselves what we are without Him."`,
    writer: `– St. Margaret of Cortona`
}, {
    quote: `"To be taken with love for a soul, God does not look on its greatness, but the greatness of its humility."`,
    writer: `– St. John of the Cross`
}, {
    quote: `"Who except God can give you peace? Has the world ever been able to satisfy the heart?"`,
    writer: `– St. Gerard`
}, {
    quote: `"Your God is ever beside you — indeed, He is even within you."`,
    writer: `– St. Alphonsus Ligouri`
}, {
    quote: `"To be a servant of Christ is to be truly free."`,
    writer: `– St. Agatha`
}, {
    quote: `"Love God, serve God; everything is in that."`,
    writer: `– St. Clare of Assisi`
}, {
    quote: `"Apart from the cross, there is no other ladder by which we may get to heaven."`,
    writer: `– St. Rose of Lima`
}, {
    quote: `"Teach us to give and not count the cost."`,
    writer: `– St. Ignatius de Loyola`
}, {
    quote: `"If you are what you should be, you will set the whole world ablaze!"`,
    writer: `- St. Catherine of Sienna`
}, {
    quote: `"Pray, Hope, and Do not worry."`,
    writer: `- St. Padre Pio`
}, {
    quote: `"Joining before degree"`,
    writer: `- ME`
}, {
    quote: `"Joining after degree"`,
    writer: `- ME`
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})