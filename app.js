const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const quoteNumber = document.getElementById("counter__key");

const getQuote = ()=>{
fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    quote.innerText = data.slip.advice;
    quoteNumber.innerText = "#" + data.slip.id;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

}



btn.addEventListener('click',() => {
    getQuote();   
    
})