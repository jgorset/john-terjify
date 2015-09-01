var defaultName = "John Terje";
var defaultRegex = ' (he|she|han|hun|henne|ham) ';
var jtName;
var jtRegex;

chrome.storage.sync.get(["jtRegex", "jtName"], function(data) {

  if (data.jtName == undefined) {
    jtName = defaultName;
  } else {
    jtName = data.jtName;
  }

  if (data.jtRegex == undefined) {
    jtRegex = defaultRegex;
  } else {
    jtRegex = data.jtRegex;
  }

  var re = new RegExp(jtRegex,"ig");
  $("body *").replaceText(re, " " + jtName + " ");

});
