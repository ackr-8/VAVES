// Once the DOM is ready...
window.addEventListener("DOMContentLoaded", function() {
  console.log(document);
  document.getElementById("themeSet").onclick = function() {
    for (let i of document.getElementsByName("themeSelect")) {
      if (i.checked) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(
          tabs
        ) {
          chrome.tabs.sendMessage(tabs[0].id, {
            message: "style:" + i.value
          });
        });
        break;
      }
    }
  };
});
document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
      (function () {
          var ln = links[i];
          var location = ln.href;
          ln.onclick = function () {
              chrome.tabs.create({active: true, url: location});
          };
      })();
  }
});