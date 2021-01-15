The program consists of 3 files to operate, searchPage.html, searchFunctions.js, and Stylesheet.css.

When the program is opened there are two search pars and a button. You can type in a keyword to search and then the
second search bar is optional but you can add the number of results you would want to see. (The yahoo fusion api said
something about only being able to display 50) Once the inputs are filled click the button that says search. Then the
page will load with how many results were found in the api and below will be an image of the business, it's name, and a
button that says view more. When you click on view more it will give the user the following: Business ID, Location
(address, city, state, zipcode) the phone number of the business, the rating, and an embedded link to the website. The
search bars and buttons remain at the top of the page so they can search again, and the results will be cleared for the
new results.

I started with creating the base layout of the searchpage. What was most important was that there be a search bar, and
a search button which both had ID's that could be called.

Then in searchFunctions.js I began work on the java script by creating a function called display and for it to be called
when a user clicked the search button. Within the display function the input from the search bar is put into a variable
called search is then added to the url variable. Then the api url is called using ajax calling the url variable and
using the api key as authorization. I ran into a problem doing this because the yelp fusion api doesn't support CORS or
Cross - Origin Resource Sharing. However I found a workaround with CORS Anywhere which is a NodeJS proxy which adds
CORS headers to the proxied request. The url to proxy is literally taken from the path, validated and proxied.
The protocol part of the proxied URI is optional, and defaults to "http". If port 443 is specified, the protocol
defaults to "https".

Then I just took the JSON data from the api and appended it to the div with id ='businesses'. I put a div within that
div so I could toggle whether information was visible or not. Each button that is created within the display function
has a unique id using a counter that corresponds to a unique id of the div containing the business information so that
I knew which button is clicked. This way I know which div needs to have its visibility toggled using the function,
myFunction().

