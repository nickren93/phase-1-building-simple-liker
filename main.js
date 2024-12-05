// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtonArray = document.querySelectorAll("span.like-glyph")
const errorAlert = document.querySelector("#modal")
errorAlert.className = "hidden"

likeButtonArray.forEach(addEvent);

function addEvent(element){
  element.addEventListener("click", handleEvent)
}

function handleEvent(eventObject){
  mimicServerCall()
  .then(function (){
    if (eventObject.target.textContent == EMPTY_HEART) {
      eventObject.target.textContent = FULL_HEART
      eventObject.target.className = "activated-heart"
    }else if(eventObject.target.textContent == FULL_HEART){
      eventObject.target.textContent = EMPTY_HEART
      eventObject.target.className = ""
    }
    
    })
  .catch(function (){
    errorAlert.className = ""
    setTimeout(() => errorAlert.className = "hidden", 3000)
    })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
