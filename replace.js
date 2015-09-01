
var defaultName = "John Terje";
var defaultRegex = ' (he|she|han|hun|henne|ham) ';
var jtName;
var jtRegex;

chrome.storage.sync.get(["jtRegex", "jtName"], function(data) {
  jtRegex = data.jtRegex;
  jtName = data.jtName;

  if (jtName == undefined) {
    jtName = defaultName;
  }
  if (jtRegex == undefined) {
    jtRegex = defaultRegex;
  }
  var re = new RegExp(jtRegex,"ig");
  $("body *").replaceText(re, " " + jtName + " ");

});
