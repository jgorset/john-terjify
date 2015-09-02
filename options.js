$( document ).ready(function() {
	var defaultName = "John Terje";
	var defaultRegex = ' (he|she|han|hun|henne|ham) ';

	var regexField = document.getElementById("regex");
	var nameField = document.getElementById("name");

	function loadOptions() {
		chrome.storage.sync.get(["jtRegex", "jtName"], function(data) {
			regexField.value = data.jtRegex == undefined ? defaultRegex : data.jtRegex;
			nameField.value = data.jtName == undefined ? defaultName : data.jtName;
		});
	}

	function saveOptions() {
		console.log(nameField)
		chrome.storage.sync.set({'jtName': nameField.value, 'jtRegex': regexField.value}, function() {
		});
	}

	function resetOptions() {
		chrome.storage.sync.set({'jtName': defaultName, 'jtRegex': defaultRegex}, function() {
		});
		location.reload();
	}

	loadOptions();
	$('#saveBtn').click(function(){
		saveOptions();
	});
	$('#eraseBtn').click(function(){
		resetOptions();
	});
});
