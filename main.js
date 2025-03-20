// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Function to handle heart clicks
function handleHeartClick(event) {
  const heart = event.target;

  // Check if the heart is empty or full
  if (heart.classList.contains("activated-heart")) {
    // If the heart is full, change it back to empty
    heart.classList.remove("activated-heart");
  } else {
    // If the heart is empty, simulate a server call
    mimicServerCall()
      .then(() => {
        // On success, make the heart full
        heart.classList.add("activated-heart");
      })
      .catch((error) => {
        // On failure, display the error modal
        const errorModal = document.getElementById("error-modal");
        const errorMessage = document.getElementById("error-message");
        const articleHearts = document.querySelectorAll(".like-glyph");

        // Display the error message
        errorMessage.textContent = error;
        errorModal.classList.remove("hidden");

        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  }
}

// Attach the event listener to the heart element
document.querySelector(".like-glyph").addEventListener("click", handleHeartClick);



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



