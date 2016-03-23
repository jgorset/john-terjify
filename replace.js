chrome.storage.sync.get(['jtRegex', 'jtName'], function(data) {
   var jtNames = data.jtName == undefined ?
                  'Love, Peace, Rome, Spain, Compassion' :
                  data.jtName.split(',').map(function(name){
                    names = []
                    names.push(name.trim());
                    return names;
                  });

  var jtWords = data.jtRegex == undefined ?
                  ' War, Terrorism, Anders Breivik, Violence ' :
                  data.jtRegex.split(',').map(function(word){
                    words = []
                    words.push(word.trim().replace(/\s/g, "\\\s"));
                    return words;
                  });

  jtWords = '(' + jtWords.join("|") + ')'

  var re = new RegExp(jtWords, 'ig');
  var randomName = jtNames[Math.floor(Math.random() * jtNames.length)].toString();

  $('body *').replaceText(re, ' ' + randomName + ' ');

  // Don't replace form for now
  // $('body *').find(':not(form):not(input)').replaceText(re, ' ' + randomName + ' ');
});
