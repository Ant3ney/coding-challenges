# Card Deck Coding Challenge

## Live Demo

https://card-deck-challenge.netlify.app/?suits=spades&limit=4&sorted=true

## How I implemented the solution

Firstly I loaded the query params inside the window.onload function. Then I made sure to alert the user if the query parameter entered is of an invalid format. After taking steps to ensure the query parameters are valid, I formatted them properly and used them as part of arguments inside of the instantiated deck’s objects methods. Firstly I applied the filter params by calling the proper deck methods, I then sorted the deck if the sorted query parameter equaled true, then I limited the amount of output cards based on the limited parameter, then I ran the draw filtered cards method.

## Challenges I Faced

### Figuring out what code I should read carefully vs skim over

When reading the file script.js, I got a little worried about a line of code in the shuffle method. I did not understand exactly how the shuffle method worked. But it turned out this challenge did not require me to understand that.

### Understanding how the instructions expected the sorted query parameter to work

The instructions mention that I could add a bounous query parameter called sorted that should sort the cards but it did not give examples on how to use it. I implemented it by checking to see if it equaled 'true' and sorted the cards if so.

### Finding out weather the cards param should call the filter method or draw card method

The cards query parameter can have a huge effect on the displayed drawn cards so I wondered whether or not it should be applied as a filter or whether it should just draw cards. In the end I made it so that cards apply a filter.
