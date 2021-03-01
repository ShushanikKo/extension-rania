// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';
// document.getElementById('button-1059-btnInnerEl').click();

// chrome.alarms.onAlarm.addListener(function() {
//   chrome.browserAction.setBadgeText({text: ''});
//   chrome.notifications.create({
//       type:     'basic',
//       iconUrl:  'stay_hydrated.png',
//       title:    'Time to Hydrate',
//       message:  'Everyday I\'m Guzzlin\'!',
//       buttons: [
//         {title: 'Keep it Flowing.'}
//       ],
//       priority: 0});
// });

// chrome.notifications.onButtonClicked.addListener(function() {
//   chrome.storage.sync.get(['minutes'], function(item) {
//     chrome.browserAction.setBadgeText({text: 'ON'});
//     chrome.alarms.create({delayInMinutes: item.minutes});
//   });
// });
chrome.browserAction.setBadgeText({text: "run"});
// background.js // Вызывается, когда пользователь нажимает на действие браузера.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Отправить сообщение на активную вкладку
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "shoo_clicked_browser_action"});
  });
});