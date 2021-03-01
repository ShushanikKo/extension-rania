'use strict';

let runTest = document.getElementById('open_popup');

function injectTheScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: "content.js"});
  });
}
runTest.addEventListener('click', injectTheScript);