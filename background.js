chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.url && details.url.includes("https://teams.microsoft.com")) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: () => alert("Hello World!")
      });
    }
  }, { url: [{ hostContains: "teams.microsoft.com" }] });
  