// window.addEventListener('online', () => {
//   console.log('You are online');
// });

// window.addEventListener('offline', () => {
//   console.log('You are offline');
// });


// wrapper div
const wrapperQuote = document.getElementById('wrapper-quote');
const wrapperQuotes = document.getElementById('wrapper-quotes');

// Checking whether online or offline
navigator.onLine ? fetchData() : showError();

// If online fetching data
function fetchData() {

  // XMLHttpRequest object
  const xhr1 = new XMLHttpRequest();

  // Open connection with the server(Making GET request to the BreakingBadQuotes.xyz)
  xhr1.open('GET', 'https://breaking-bad-quotes.herokuapp.com/v1/quotes', true);

  // On completing the request
  xhr1.onload = function () {
    if (this.status == 200) {

      const quotePack1 = JSON.parse(this.responseText);

      for (const i in quotePack1) {
        if (Object.hasOwnProperty.call(quotePack1, i)) {
          const element = quotePack1[i];
          wrapperQuote.innerHTML = '<p>' + element.quote + '</p>' +
            '<h5>- ' + element.author + '</h5>';
        }
      }

    }
  }

  // Send the request
  xhr1.send();



  // XMLHttpRequest object
  const xhr2 = new XMLHttpRequest();

  // Open connection with the server(Making GET request to the BreakingBadQuotes.xyz)
  xhr2.open('GET', 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/5', true);

  // On completing the request
  xhr2.onload = function () {
    if (this.status == 200) {

      const quotePack2 = JSON.parse(this.responseText);
      let outputQuotes = '';
      let outputAuthors = '';

      for (const i in quotePack2) {
        if (Object.hasOwnProperty.call(quotePack2, i)) {
          outputQuotes = quotePack2[i].quote;
          outputAuthors = quotePack2[i].author;

          const wrapperDiv = document.createElement('div');
          wrapperDiv.className = "wrapper";
          wrapperDiv.innerHTML = '<p>' + outputQuotes + '</p>' +
            '<h5>- ' + outputAuthors + '</h5>';

          wrapperQuotes.appendChild(wrapperDiv);

        }
      }

      // console.log(outputPack);
      // wrapperQuotes.innerHTML = outputQuotes;

    } else {
      wrapperQuotes.innerHTML = "Error: Something went wrong.";
    }
  }

  // Send the request
  xhr2.send();

}


// If offline showing error
function showError() {
  wrapperQuote.innerHTML = 'You are offline...';
  wrapperQuotes.innerHTML = 'You are offline...';
}
