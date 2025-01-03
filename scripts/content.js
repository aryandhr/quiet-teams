let hasMuted = false;

const observer = new MutationObserver(() => {
    if (!hasMuted) {
        const preJoinMicButton = document.querySelector('[data-tid="toggle-mute"]');
        
        if (preJoinMicButton) {
            const isNotMuted = preJoinMicButton.getAttribute('aria-checked');
            
            if (isNotMuted === "true") {
                preJoinMicButton.click();
                hasMuted = true;
                console.log("Initial auto-mute performed");
            }
        } else {
            console.log("Prejoin microphone button not found");
        }
    }
});

const spaScreenObserver = new MutationObserver(() => {
    if (hasMuted && !document.querySelector('[data-tid="toggle-mute"]')) {
        hasMuted = false;
        console.log("Reset mute state for next screen/meeting");
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

spaScreenObserver.observe(document.body, {
    childList: true,
    subtree: true,
});

console.log("Started observing the DOM for changes and SPA navigation");
