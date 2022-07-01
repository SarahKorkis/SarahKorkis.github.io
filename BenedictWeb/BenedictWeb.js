const quotes = [{
    quote: `“Idleness is the enemy of the soul; and therefore the brethren ought to be employed in manual labor at certain times, at others, in devout reading.”`,
    writer: `– St. Benedict`
}, {
    quote: `“The first degree of humility is prompt obedience.”`,
    writer: `– St. Benedict`
}, {
    quote: `“He should first show them in deeds rather than words all that is good and holy.”`,
    writer: `– St. Benedict`
}, {
    quote: `“It is time now for us to rise from sleep.”`,
    writer: `– St. Benedict`
}, {
    quote: `“The prophet shows that, for the sake of silence, we are to abstain even from good talk. If this be so, how much more needful is it that we refrain from evil words, on account of the penalty of the sin!”`,
    writer: `– St. Benedict`
}, {
    quote: `“He should know that whoever undertakes the government of souls must prepare himself to account for them.”`,
    writer: `– St. Benedict`
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})