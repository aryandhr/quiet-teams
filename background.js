chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.url && details.url.includes("https://chatgpt.com")) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: () => alert("Hello World!")
      });
    }
  }, { url: [{ hostContains: "chatgpt.com" }] });
  