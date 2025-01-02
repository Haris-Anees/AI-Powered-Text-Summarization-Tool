chrome.runtime.onInstalled.addListener(() => {
    console.log("Service worker for Summarization Tool is active!");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'summarize') {
        console.log(message.summary);
    }
});