var defaultName = "John Terje";
var defaultRegex = ' (he|she|han|hun|henne|ham) ';

function loadOptions() {

	chrome.storage.sync.get("jtRegex", function(data) {
		var regexField = document.getElementById("regex");
		regexField.value = data.jtRegex == undefined ? defaultRegex : data.jtRegex;
	});

	chrome.storage.sync.get("jtName", function(data) {
		var nameField = document.getElementById("name");
		nameField.value = data.jtName == undefined ? defaultName : data.jtName;
	});

}

function saveOptions() {
	var name = document.getElementById("name").value;
	chrome.storage.sync.set({'jtName': name}, function() {
	});

	var regex = document.getElementById("regex").value;
	chrome.storage.sync.set({'jtRegex': regex}, function() {
	});
}

function resetOptions() {
	chrome.storage.sync.set({'jtName': defaultName}, function() {
	});
	chrome.storage.sync.set({'jtRegex': defaultRegex}, function() {
	});
	location.reload();
}

$( document ).ready(function() {
	loadOptions();
	$('#saveBtn').click(function(){
		saveOptions();
	});
	$('#eraseBtn').click(function(){
		resetOptions();
	});
});
