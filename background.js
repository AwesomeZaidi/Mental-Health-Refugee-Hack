'use strict';



//The background script is the extension's event handler; it contains listeners for browser events that
//are important to the extension. It lies dormant until an event is fired then performs the instructed logic.
//An effective background script is only loaded when it is needed and unloaded when it goes idle.

// Define rules for when the extension is usable by calling chrome.declarativeContent
// under the runtime.onInstalled listener in a background script. The Page action by
// URL sample extension sets a condition that the url must include a ‘g’.
// If the condition is met, the extension calls declarativeContent.ShowPageAction().


//Add instructions
//The background script is the extension's event handler; it contains listeners for browser events that
//are important to the extension. It lies dormant until an event is fired then performs the instructed logic.
//An effective background script is only loaded when it is needed and unloaded when it goes idle.

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  //declarative API tells browser when the user can interact with popup.html
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
