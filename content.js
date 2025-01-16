// Function to remove the clarify-box
function removeClarifyBox() {
  const clarifyBox = document.getElementById('clarify-box');
  if (clarifyBox) {
    console.log('Blocked and removed clarify-box.');
    clarifyBox.remove();
  }
}

// MutationObserver to monitor DOM changes
const observer = new MutationObserver(() => {
  removeClarifyBox();
});

// Start observing changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });

// Initial removal in case it's already loaded
removeClarifyBox();
