chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      id: 1,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "*clarify-box*",
        resourceTypes: ["script", "xmlhttprequest", "stylesheet", "image", "sub_frame"]
      }
    }
  ],
  removeRuleIds: [1]
});
