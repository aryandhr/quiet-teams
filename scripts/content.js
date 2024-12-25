// Observe DOM changes to find the search field
const observer = new MutationObserver(() => {
    const inputField = document.querySelector("input[id='ms-searchux-input']");
    if (inputField)  {
      console.log("Search field found:", inputField);
  
      // Stop observing once the element is found
      observer.disconnect();
  
      inputField.value = "interacted";
      const inputEvent = new Event('input', { bubbles: true });
      inputField.dispatchEvent(inputEvent);
  
    } else {
      console.error("Teams search field not found.");
    }
  });
  
// Start observing the DOM
observer.observe(document.body, {
childList: true,
subtree: true,
});

// Set a timeout to stop observing if the element is not found within a reasonable time
setTimeout(() => observer.disconnect(), 10000); // 10 seconds
  