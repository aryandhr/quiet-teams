let userInput = false;

const observer = new MutationObserver(() => {
    const preJoinMicButton = document.querySelector('[data-tid="toggle-mute"]');
    if (preJoinMicButton) {
        if (!preJoinMicButton.hasAttribute('data-listener-attached')) {
            preJoinMicButton.addEventListener('click', () => {
                userInput = true;
                console.log("User manually toggled the microphone");
            });
            preJoinMicButton.setAttribute('data-listener-attached', 'true');
        }

        let isNotMuted = preJoinMicButton.getAttribute('aria-checked');
        if (isNotMuted === "true" && !userInput) {
            preJoinMicButton.click();
            isNotMuted = preJoinMicButton.getAttribute('aria-checked');
            console.log(`Microphone is now ${isNotMuted === "true" ? 'muted' : 'unmuted'}`);
        }
    } else {
        console.log("Prejoin microphone button not found");
    }

    const micButton = document.querySelector("button#microphone-button");
    if (micButton && isNotMuted) {
        console.log("Microphone button found unmuted");

        if (!micButton.dataset.clicked) {
            micButton.click();
            micButton.dataset.clicked = "true";
            console.log("Microphone muted");
        }
    } else {
        console.error("Microphone button not found");
    }
});

window.addEventListener('load', () => {
    userInput = false; // Reset user input for a fresh session
    console.log("Page loaded, resetting user input");
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

console.log("Started observing the DOM");
