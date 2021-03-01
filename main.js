document.getElementById("open_popup").onclick = function () {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {
            action: "overlay",
            show: false
        });
    });
    chrome.tabs.create({url: '../record_page.html'});
};
chrome.runtime.sendMessage({ message: "popup_opened" });