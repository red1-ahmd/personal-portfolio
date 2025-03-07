function openTab(evt, tabName) {
    var i, descriptionTab, tabBTN;

    // Hide all tabs
    descriptionTab = document.getElementsByClassName('descriptionTab');
    for (i = 0; i < descriptionTab.length; i++) {
        descriptionTab[i].style.display = "none";
    }

    // Remove the 'active' class from all buttons
    tabBTN = document.getElementsByClassName('tabBTN');
    for (i = 0; i < tabBTN.length; i++) {
        tabBTN[i].className = tabBTN[i].className.replace(" active", "");
    }

    // Show the current tab
    document.getElementById(tabName).style.display = "block";

    // Add the 'active' class to the button that opened the tab
    evt.currentTarget.className += ' active';
}

// Set the default tab and content to show
document.getElementById('Education').style.display = 'block'; // Sets the default tab content to show
document.getElementsByClassName('tabBTN')[0].className += ' active'; // Sets the default tab button to active /// default tab styling. Why " active", this set in a way so when you run the code it will temporarily change the code to descriptionTab active. By making this change you can use CSS to later target this specific button by typing 
// .tab button.active and you can add css styles to this. 

// change border color

let isScrolling = false; // Flag to prevent multiple scrolls at once

// Add fixed scroll behavior
document.addEventListener('wheel', function(event) {
  event.preventDefault(); // Prevent default scrolling behavior

  if (isScrolling) return; // If already scrolling, ignore additional wheel events
  isScrolling = true;

  const delta = Math.sign(event.deltaY); // Get the direction of the scroll
  const scrollAmount = window.innerHeight; // 100vh

  window.scrollBy({
    top: delta * scrollAmount,
    behavior: 'smooth' // Smooth scrolling
  });

  // Reset the flag after the scroll is complete
  setTimeout(() => {
    isScrolling = false;
  }, 500); // Adjust timeout to match the duration of the smooth scroll
}, { passive: false }); // Set passive to false to allow preventDefault

// Optional: Add touch support for mobile devices
let startY;

document.addEventListener('touchstart', function(event) {
  startY = event.touches[0].clientY;
});

document.addEventListener('touchmove', function(event) {
  event.preventDefault();
  const currentY = event.touches[0].clientY;
  const deltaY = startY - currentY;

  if (Math.abs(deltaY) > 50) { // Threshold to trigger scroll
    const scrollAmount = window.innerHeight;
    window.scrollBy({
      top: (deltaY > 0 ? 1 : -1) * scrollAmount,
      behavior: 'smooth'
    });
    startY = currentY;
  }
}, { passive: false });
