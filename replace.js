chrome.storage.sync.get(["jtRegex", "jtName"], function(data) {

  var jtName = data.jtName == undefined ? "John Terje" : data.jtName;
  var jtRegex = data.jtRegex == undefined ? ' (he|she|han|hun|henne|ham) ' : data.jtRegex;

  var re = new RegExp(jtRegex,"ig");

  $("body *").replaceText(re, " " + jtName + " ");

});
