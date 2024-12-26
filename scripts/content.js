// Observe DOM changes to find the microphone button
const observer = new MutationObserver(() => {
    const micButton = document.querySelector("button#microphone-button");
    if (micButton) {
        console.log("Microphone button found:", micButton);
        
        // Stop observing once the element is found
        observer.disconnect();
        
        // Simulate a click event on the button
        micButton.click();
        console.log("Microphone button clicked.");
    } else {
        console.error("Microphone button not found.");
    }
});

// Start observing the DOM
observer.observe(document.body, {
    childList: true,
    subtree: true,
});

// Set a timeout to stop observing if the element is not found within a reasonable time
setTimeout(() => {
    observer.disconnect();
    console.error("Stopped observing: Microphone button not found within the timeout.");
}, 100000); // 10 seconds
