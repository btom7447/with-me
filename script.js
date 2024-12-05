// Selecting elements
let noButton = document.getElementById('no');
let yesButton = document.getElementById('yes');
let proposalImage = document.getElementById('proposalImage');
let questionSection = document.getElementById('question');
let responseSection = document.getElementById('response');

// Initially hide the response section
responseSection.style.display = "none";

// Store the original position of the 'No' button as a transform
let originalTransform = {
  x: 0, // Initial X transform value
  y: 0  // Initial Y transform value
};

// 'No' button moves away from the cursor and changes image
noButton.addEventListener('mousemove', function (event) {
  // Change image to 'no.png'
  proposalImage.src = 'no.png';

  // GSAP animation for moving the button
  gsap.to(noButton, {
    duration: 0.2,
    x: (Math.random() - 0.5) * 200, // Random movement X
    y: (Math.random() - 0.5) * 200, // Random movement Y
    ease: "power2.out"
  });

  // Clear the timeout if cursor is still over the button
  clearTimeout(returnTimeout);
});

// Function to reset the button to its original position
function resetButtonPosition() {
  gsap.to(noButton, {
    duration: 0.5,
    x: originalTransform.x, // Reset to original X transform
    y: originalTransform.y, // Reset to original Y transform
    ease: "power2.out"
  });
}

// Set a timeout to return the 'No' button to its original position after 5 seconds
let returnTimeout;
noButton.addEventListener('mouseleave', function () {
  returnTimeout = setTimeout(resetButtonPosition, 5000);
});

// 'Yes' button changes the image to 'yes.png' on click
function goToMoviePage() {
  // Change image to 'yes.png'
  proposalImage.src = 'yes.png';

  // Hide the question section and show the response section
  questionSection.style.display = "none";
  responseSection.style.display = "block";

  // Optional: Redirect after showing the response for a while
  setTimeout(() => {
    window.location.href = "https://www.teleparty.com/movie/9919/how-to-lose-a-guy-in-10-days?sessionId=05e7839736179c99"; // Navigate to another page
  }, 1000); // 1-second delay
}

// Optional animation for 'Yes' button
gsap.fromTo(yesButton,
  { scale: 1 },
  { scale: 1.2, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" });
