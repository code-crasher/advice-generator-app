const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const quoteNumber = document.getElementById("counter__key");


const quotes=[
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        key:"#1"
    },
    {
        quote:"The way to get started is to quit talking and begin doing",
        key:"#2"
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        key:"#3"
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        key:"#4"
    },
    {
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
        key:"#5"
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        key:"#6"
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        key:"#7"
    },
    {
        quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        key:"#8"
    },
    {
        quote:"When you reach the end of your rope, tie a knot in it and hang on.",
        key:"#9"
    },
    {
        quote:"Always remember that you are absolutely unique. Just like everyone else.",
        key:"#10"
    },
    {
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        key:"#11"
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        key:"#12"
    }

];

btn.addEventListener('click',() => {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    quoteNumber.innerText = quotes[random].key;
})