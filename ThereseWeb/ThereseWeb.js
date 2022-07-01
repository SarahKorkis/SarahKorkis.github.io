const quotes = [{
    quote: `True charity consists in bearing all our neighbour’s defects – not being surprised at their weakness, but edified at their smallest virtues.`,
    writer: `– St. Therese`
}, {
    quote: `If I did not simply live from one moment to another, it would be impossible for me to be patient; but I only look at the present, I forget the past, and I take good care not to forestall the future.`,
    writer: `– St. Therese`
}, {
    quote: `"Do you realise that Jesus is there in the tabernacle expressly for you – for you alone? He burns with the desire to come into your heart… Don’t listen to the demon; laugh at him, and go without fear to receive the Jesus of peace and love.`,
    writer: `– St. Therese`
}, {
    quote: `The guest of our soul knows our misery; He comes to find an empty tent within us – that is all He asks.`,
    writer: `– St. Therese`
}, {
    quote: `"Holiness consists simply in doing God’s will, and being just what God wants us to be.`,
    writer: `– St. Therese`
}, {
    quote: `"When I die, I will send down a shower of roses from the heavens, I will spend my heaven by doing good on earth."`,
    writer: `– St. Therese`
}, {
    quote: `"The good God does not need years to accomplish His work of love in a soul; one ray from His Heart can, in an instant, make His flower bloom for eternity.`,
    writer: `– St. Therese`
}, {
    quote: `"It pleases Him to create great Saints, who may be compared with the lilies or the rose; but He has also created little ones, who must be content to be daisies or violets, nestling at His feet to delight His eyes when He should choose to look at them. The happier they are to be as He wills, the more perfect they are."`,
    writer: `– St. Therese`
}, {
    quote: `"Our Lord’s love shines out just as much through a little soul who yields completely to His Grace as it does through the greatest."`,
    writer: `- St. Therese`
}, {
    quote: `"Jesus has chosen to show me the only way which leads to the Divine Furnace of love; it is the way of childlike self-surrender, the way of a child who sleeps, afraid of nothing, in its father’s arms."`,
    writer: `- St. Therese`
}, {
    quote: `"Jesus, help me to simplify my life by learning what you want me to be and becoming that person."`,
    writer: `- St. Therese`
}, {
    quote: `"Without love, deeds, even the most brilliant, count as nothing."`,
    writer: `- St. Therese`
},{
    quote: `"In trial or difficulty I have recourse to Mother Mary, whose glance alone is enough to dissipate every fear."`,
    writer: `- St. Therese`
},{
    quote: `"For me, prayer is a surge of the heart; it is a simple look turned toward heaven, it is a cry of recognition and of love, embracing both trial and joy."`,
    writer: `- St. Therese`
}, ]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})